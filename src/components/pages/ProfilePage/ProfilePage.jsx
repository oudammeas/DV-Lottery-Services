import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Content,
  Panel,
  Button,
  ButtonToolbar,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Radio,
  RadioGroup,
  FlexboxGrid,
  Col,
  Divider,
  Icon,
  Timeline,
} from 'rsuite'
import MainLayout from '../../layouts/MainLayout.js/MainLayout'
import { useTranslation } from 'react-i18next'
import FlexboxGridItem from 'rsuite/lib/FlexboxGrid/FlexboxGridItem'
import { Schema } from 'rsuite'
// import { useAuth0 } from '@auth0/auth0-react'
import { Redirect, withRouter } from 'react-router'
import { observer, inject } from 'mobx-react'
import AuthenticatorPage from '../AuthenticatorPage'

// Set up frontend
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify'
import awsExports from '../../../aws-exports'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import * as queries from '../../../graphql/queries'
import * as mutations from '../../../graphql/mutations'

Amplify.configure(awsExports)
API.configure(awsExports)

const form_groups = [
  {
    group_name: 'Biological Information',
    fields: [
      { name: 'firstname_kh', label: 'First Name (Khmer)', type: 'input' },
      { name: 'lastname_kh', label: 'Last Name (Khmer)', type: 'input' },
      { name: 'firstname', label: 'First Name (English)', type: 'input' },
      { name: 'lastname', label: 'Last Name (English)', type: 'input' },
      { name: 'date_of_birth', label: 'Date of Birth', type: 'date' },
      {
        name: 'gender',
        label: 'Gender',
        type: 'radio',
        select: [
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
        ],
      },
      { name: 'marital_status', label: 'Marital Status', type: 'input' },
      { name: 'number_of_dependent', label: 'Number of Dependent', type: 'number' },
      { name: 'portrait', label: 'Photo Portrait', type: 'image', prop: 'width=48px height=48px' },
      { name: 'upload_portrait', label: 'Upload Photo Portrait', type: 'file' },
      { name: 'passport_id', label: 'Passport No.', type: 'input' },
      { name: 'upload_passport', label: 'Upload Passport', type: 'file' },
      { name: 'passport_issue_date', label: 'Issue Date', type: 'input' },
      { name: 'passport_expiration_date', label: 'Expiration Date', type: 'input' },
      { name: 'national_id', label: 'National ID No.', type: 'input' },
      { name: 'upload_national_id', label: 'Upload National ID', type: 'file' },
      { name: 'driver_license_id', label: 'Driver License No.', type: 'input' },
      { name: 'upload_driver_license', label: 'Upload Driver License', type: 'file' },
      { name: 'marriage_certificate_id', label: 'Marriage Certificate No.', type: 'input' },
      { name: 'upload_marriage_certificate', label: 'Upload Marriage Certificate', type: 'file' },
    ],
  },

  {
    group_name: 'Contact Information',
    fields: [
      { name: 'email', label: 'Email', type: 'email' },
      { name: 'phone_id', label: 'Phone No.', type: 'tel' },
      { name: 'portrait', label: 'Photo Portrait', type: 'image' },
    ],
  },

  {
    group_name: 'Spouse Information',
    fields: [
      { name: 'firstname_spouse_kh', label: 'First Name (Khmer)', type: 'input' },
      { name: 'lastname_spouse_kh', label: 'Last Name (Khmer)', type: 'input' },
      { name: 'firstname_spouse', label: 'First Name (English)', type: 'input' },
      { name: 'lastname_spouse', label: 'Last Name (English)', type: 'input' },
      { name: 'national_id_spouse', label: 'National ID No.', type: 'input' },
    ],
  },
  {
    group_name: 'Dependent Information',
    fields: [
      { name: 'firstname_depend_kh', label: 'First Name (Khmer)', type: 'input' },
      { name: 'lastname_depend_kh', label: 'Last Name (Khmer)', type: 'input' },
      { name: 'firstname_depend', label: 'First Name (English)', type: 'input' },
      { name: 'lastname_depend', label: 'Last Name (English)', type: 'input' },
      { name: 'national_id_depend', label: 'National ID No.', type: 'input' },
    ],
  },

  {
    group_name: 'Permanent Address',
    fields: [
      { name: 'street', label: 'Street Address', type: 'input' },
      { name: 'province', label: 'Province', type: 'input' },
      { name: 'city', label: 'City', type: 'input' },
      { name: 'commune', label: 'Commune', type: 'input' },
      { name: 'village', label: 'Village', type: 'input' },
    ],
  },

  {
    group_name: 'Education Information',
    fields: [
      { name: 'degree', label: 'Highest Educational Level', type: 'input' },
      { name: 'institute', label: 'Institution Name', type: 'input' },
      { name: 'date_start', label: 'Start Date', type: 'date' },
      { name: 'date_finish', label: 'Graduation Date', type: 'date' },
      { name: 'upload_diploma', label: 'Upload Diploma', type: 'file' },
    ],
  },

  {
    group_name: 'Current Employment Information',
    fields: [
      { name: 'current_job_title', label: 'Position', type: 'input' },
      { name: 'current_job_employer', label: 'Employer', type: 'input' },
      { name: 'current_job_start_date', label: 'Start Date', type: 'date' },
    ],
  },
  {
    group_name: 'Previous Employment Information',
    fields: [
      { name: 'previous_job_title', label: 'Position', type: 'input' },
      { name: 'previous_job_employer', label: 'Employer', type: 'input' },
      { name: 'previous_job_start_date', label: 'Start Date', type: 'date' },
      { name: 'previous_job_end_date', label: 'End Date', type: 'date' },
    ],
  },
]

const ProfilePage = ({ commonStore, authStore }) => {
  const { t } = useTranslation()

  const styles = {
    content: {
      padding: '1em',
      minHeight: '40em',
      margin: '0 auto',
      textAlign: 'start',
      justifyContent: 'center',
    },

    pagetitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '1em',
    },

    flexboxgrid: {
      root: {
        padding: '1em 1em 1em 1em',
      },

      item: {},
    },
  }

  // // Auth Profile:
  const isAuthenticated = authStore.isAuthenticated
  const user = authStore.authUser
  // console.log(authStore)
  console.log(user)
  const username = user ? user['username'] : null
  const picture = './favicon.ico'
  const email = user ? user.attributes['email'] : null

  const handleSubmit = e => {
    // e.preventDefault();
  }

  const fieldEditHandler = (form_id, field_id) => {
    // setReadOnly([...readOnly, `${form_id}${field_id}`]);
  }

  const [readOnly, setReadOnly] = useState([])

  /// API TEST:

  //  queries
  const allServices = API.graphql(graphqlOperation(queries.listServices))
  console.log(allServices)
  //  get
  const oneServices = API.graphql(graphqlOperation(queries.getService, { id: '7be458f2-23c1-4bbb-aa5f-642f1e121676' }))

  //  create
  const service = { service_name: 'service_03', service_price: 400, service_description: 'Service_03' }
  // const newService = API.graphql(graphqlOperation(mutations.createService, { input: service }))

  // customer data
  const customerData = [
    { key: 'firstname', value: '123877' },
    { key: 'lastname', value: '124565' },
  ]

  // update customer data
  function updateCustomer(customer, customerData) {
    customerData.forEach(data => {
      customer['data']['getCustomer'][data.key] = data.value
    })
    API.graphql(graphqlOperation(mutations.updateCustomer, { input: customer }))
  }

  return isAuthenticated ? (
    <MainLayout>
      <Content style={styles.content}>
        <div style={styles.pagetitle}>{t('common.profile-page.page-title')}</div>
        <div className="align-items-center profile-header mb-5 text-center text-md-left">
          <div md={2}>
            <img src={picture} alt="Profile" className="rounded-circle img-fluid profile-picture mb-3 mb-md-0" />
          </div>
          <div md>
            <h4>{username}</h4>
            <p className="lead text-muted">{email}</p>
          </div>
        </div>
        <div>{/* <p>{JSON.stringify(user, null, 2)}</p> */}</div>
        <FlexboxGrid style={styles.flexboxgrid.root}>
          {/* loop thru group of forms */}
          {form_groups.map((group, i) => {
            return (
              <FlexboxGrid.Item colspan={24} style={styles.flexboxgrid.item}>
                <Form
                  layout="horizontal"
                  id={i}
                  onSubmit={handleSubmit}
                  layout="horizontal"
                  style={styles.form}

                  // ref={ref => (form = ref)}
                  // onChange={formValue => {
                  //   setFormValue({ formValue });
                  // }}
                  // onCheck={formError => {
                  //   setFormError({ formError });
                  // }}
                  // formValue={formValue}
                  // model={customerModel}
                >
                  <h4 key={i}>{group.group_name}</h4>
                  {/* loop thru form fields */}
                  {group.fields &&
                    group.fields.map((field, j) => {
                      return field.type == 'radio' ? (
                        <div>
                          <ControlLabel>{field.label}</ControlLabel>
                          <RadioGroup inline>
                            {field.select &&
                              field.select.map((s, k) => {
                                return (
                                  <Radio value={s.value} id={j} readOnly={readOnly.includes(`${i}${j}`)}>
                                    {s.label}
                                  </Radio>
                                )
                              })}
                          </RadioGroup>
                          <ControlLabel>
                            <a onClick={(i, j) => fieldEditHandler(i, j)}> Edit</a>
                          </ControlLabel>{' '}
                          <Divider vertical /> <a onClick={fieldEditHandler(i, j)}>Save</a>
                        </div>
                      ) : (
                        <FormGroup>
                          <ControlLabel>{field.label} </ControlLabel>
                          <FormControl type={field.type} name={field.name} id={j} readOnly={readOnly.includes(`${i}${j}`)} />
                          {/* <HelpBlock tooltip>This field is required</HelpBlock> */}
                          <ControlLabel>
                            <a onClick={(i, j) => fieldEditHandler(i, j)}>Edit</a>
                          </ControlLabel>
                        </FormGroup>
                      )
                    })}
                  {/* Save Changes and Cancel Changes buttons*/}
                  <FormGroup>
                    <ButtonToolbar>
                      <Button appearance="primary" size="md" href="#" color="blue" onClick={handleSubmit}>
                        Save Changes
                      </Button>
                      <Button appearance="ghost" size="md" href="#">
                        Cancel Changes
                      </Button>
                    </ButtonToolbar>
                  </FormGroup>
                </Form>
              </FlexboxGrid.Item>
            )
          })}
          ;
        </FlexboxGrid>
      </Content>
    </MainLayout>
  ) : (
    <Redirect to={<AuthenticatorPage />} />
  )
}

ProfilePage.propTypes = {}

export default withRouter(inject('authStore')(observer(ProfilePage)))
