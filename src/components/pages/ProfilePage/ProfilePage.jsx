import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import {
  Content,
  Button,
  ButtonToolbar,
  Form,
  FlexboxGrid,
  ControlLabel,
  RadioGroup,
  Radio,
  FormControl,
  FormGroup,
  Divider,
} from 'rsuite'
import FlexboxGridItem from 'rsuite/lib/FlexboxGrid/FlexboxGridItem'
import MainLayout from '../../layouts/MainLayout.js/MainLayout'
import { useTranslation } from 'react-i18next'
// import { useAuth0 } from '@auth0/auth0-react'
import { Redirect, withRouter } from 'react-router'
import { observer, inject } from 'mobx-react'
import AuthenticatorPage from '../AuthenticatorPage'
import JSONView from 'react-json-view'
// Set up frontend
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify'
import awsExports from '../../../aws-exports'
import * as queries from '../../../graphql/queries'
import * as mutations from '../../../graphql/mutations'
import {
  CustomerForm,
  ContactForm,
  EducationForm,
  EmploymentForm,
  AddressForm,
  BillingForm,
  TextField,
  Form_Group,
  FieldList,
  FieldListInitial,
} from '../../elements/Forms'

Amplify.configure(awsExports)
API.configure(awsExports)

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
        justify: 'center',
      },

      item: { colspan: 4 },
    },
  }

  /// Auth Profile:
  const isAuthenticated = authStore.isAuthenticated
  const user = authStore.authUser
  // console.log(authStore)
  // console.log(user)
  // const username = user ? user['username'] : null
  const picture = './favicon.ico'
  const email = user ? user.attributes['email'] : null
  const username = user ? user.attributes['sub'] : null
  const given_name = user ? user.attributes['given_name'] : null
  const family_name = user ? user.attributes['family_name'] : null

  // console.log(user)
  /// Connect frontend to API:

  // define local states
  // const initialState = { firstname_kh: '', lastname_kh: '', gender: '', date_of_birth: '' }

  const [customer, setCustomer] = useState({})
  async function updateCustomer(customer) {
    // updateCustomer function uses the Amplify API category to call the APpSync GRaphQL API with the updateCustomer mutation.
    try {
      const data = {}
      const form = FieldList['customer']
      form.forEach(field => {
        data[field] = customer[field]
      })
      console.log(data)
      await API.graphql(graphqlOperation(mutations.updateCustomer, { input: data }))
      setCustomer(customer)
    } catch (err) {
      console.log('error updating customer:', err)
    }
  }

  const [addresses, setAddresses] = useState({})
  async function updateAddress(address) {
    console.log(address)
    if (!address.hasOwnProperty('id')) {
      address['customerID'] = username
      // create address
      try {
        await API.graphql(graphqlOperation(mutations.createAddress, { input: address }))
      } catch (err) {
        console.log('error creating address:', err)
      }
    } else {
      // update address
      try {
        const data = {}
        const form = FieldList['address']
        form.forEach(field => {
          data[field] = address[field]
        })
        console.log(data)
        await API.graphql(graphqlOperation(mutations.updateAddress, { input: data }))
        setAddresses(address)
      } catch (err) {
        console.log('error updating address:', err)
      }
    }
  }

  const [contact, setContact] = useState({})
  async function updateContact(contact) {
    if (!contact.hasOwnProperty('id')) {
      contact['customerID'] = username
      // create contact
      try {
        await API.graphql(graphqlOperation(mutations.createContact, { input: contact }))
      } catch (err) {
        console.log('error creating contact:', err)
      }
    } else {
      // update contact
      try {
        const data = {}
        const form = FieldList['contact']
        form.forEach(field => {
          data[field] = contact[field]
        })
        console.log(data)
        await API.graphql(graphqlOperation(mutations.updateContact, { input: data }))
        setContact(contact)
      } catch (err) {
        console.log('error updating contact:', err)
      }
    }
  }

  const [education, setEducation] = useState({})
  async function updateEducation(education) {
    if (!education.hasOwnProperty('id')) {
      education['customerID'] = username
      // create education
      try {
        await API.graphql(graphqlOperation(mutations.createEducation, { input: education }))
      } catch (err) {
        console.log('error creating education:', err)
      }
    } else {
      // update education
      try {
        const data = {}
        const form = FieldList['education']
        form.forEach(field => {
          data[field] = education[field]
        })
        console.log(data)
        await API.graphql(graphqlOperation(mutations.updateEducation, { input: data }))
        setEducation(education)
      } catch (err) {
        console.log('error updating education:', err)
      }
    }
  }

  const [employment, setEmployment] = useState({})
  async function updateEmployment(employment) {
    if (!employment.hasOwnProperty('id')) {
      employment['customerID'] = username
      // create education
      try {
        await API.graphql(graphqlOperation(mutations.createEmployment, { input: employment }))
      } catch (err) {
        console.log('error creating employment:', err)
      }
    } else {
      // update education
      try {
        const data = {}
        const form = FieldList['employment']
        form.forEach(field => {
          data[field] = employment[field]
        })
        console.log(data)
        await API.graphql(graphqlOperation(mutations.updateEmployment, { input: data }))
        setEmployment(employment)
      } catch (err) {
        console.log('error updating employment:', err)
      }
    }
  }

  const [billing, setBilling] = useState({})
  const updateBilling = billing => {
    setBilling(billing)
  }

  // // visiblity
  // const [visibility, setVisibility] = useState('visible')
  // const hidden = visibility === 'hidden'

  // when the component loads, the useEffect hook is called and it invokes the fectCustomer() function:
  useEffect(() => {
    fetchFormData()
    // console.log('1')
  }, [])

  // fectCustomer() function uses the Amplify API category to call the AppSync GraphQL API with the getCustomer query.
  // Once the data is returned, the data is passed into the setCustomerData() function to update the local state.
  async function fetchFormData() {
    // fetch customer data
    try {
      await API.graphql(graphqlOperation(queries.getCustomer, { id: username })).then(function (output) {
        console.log(output)
        setCustomer(output.data.getCustomer)
      })
    } catch (err) {
      console.log('error fetching customer data', err)
    }

    // fetch contact data
    try {
      await API.graphql(graphqlOperation(queries.listContacts, { filter: { customerID: { eq: username } } })).then(function (
        output,
      ) {
        console.log(output)
        if (output.data.listContacts.items.length == 0) {
          setContact(FieldListInitial['contact'])
          console.log(FieldListInitial['contact'])
        } else {
          setContact(output.data.listContacts.items[0])
        }
      })
    } catch (err) {
      console.log('error fetching contact data', err)
    }

    // fetch address data
    try {
      await API.graphql(graphqlOperation(queries.listAddresss, { filter: { customerID: { eq: username } } })).then(function (
        output,
      ) {
        console.log(output)
        if (output.data.listAddresss.items.length == 0) {
          setAddresses(FieldListInitial['address'])
        } else {
          setAddresses(output.data.listAddresss.items[0])
        }
      })
    } catch (err) {
      console.log('error fetching address data', err)
    }

    // fetch education data
    try {
      await API.graphql(graphqlOperation(queries.listEducations, { filter: { customerID: { eq: username } } })).then(function (
        output,
      ) {
        console.log(output)
        if (output.data.listEducations.items.length == 0) {
          setEducation(FieldListInitial['education'])
        } else {
          setEducation(output.data.listEducations.items[0])
        }
      })
    } catch (err) {
      console.log('error fetching education data', err)
    }

    // fetch employments data
    try {
      await API.graphql(graphqlOperation(queries.listEmployments, { filter: { customerID: { eq: username } } })).then(function (
        output,
      ) {
        console.log(output)
        if (output.data.listEmployments.items.length == 0) {
          setEmployment(FieldListInitial['employment'])
        } else {
          setEmployment(output.data.listEmployments.items[0])
        }
      })
    } catch (err) {
      console.log('error fetching employment data', err)
    }

    // fetch billing data
    try {
      await API.graphql(graphqlOperation(queries.listBillings, { filter: { customerID: { eq: username } } })).then(function (
        output,
      ) {
        console.log(output)
        if (output.data.listBillings.items.length == 0) {
          setBilling(FieldListInitial['billing'])
        } else {
          setBilling(output.data.listBillings.items[0])
        }
      })
    } catch (err) {
      console.log('error fetching billing data', err)
    }
  }

  // console.log(customer)
  // // console.log(customerFormError)

  return isAuthenticated ? (
    <MainLayout>
      <Content style={styles.content}>
        <div style={styles.pagetitle}>{t('common.profile-page.page-title')}</div>
        <Divider></Divider>
        <div className="align-items-center profile-header mb-5 text-center text-md-left">
          <div md={2}>
            <img src={picture} alt="Profile" className="rounded-circle img-fluid profile-picture mb-3 mb-md-0" />
          </div>
          <div md>
            <h4>
              {given_name} {family_name}
            </h4>
            <p className="lead text-muted">{email}</p>
          </div>
        </div>
        <div>{/* <p>{JSON.stringify(user, null, 2)}</p> */}</div>
        {/* <JSONView formValue={customer} /> */}
        <Divider></Divider>
        <FlexboxGrid justify="space-between">
          <FlexboxGrid.Item colspan={7}>
            <CustomerForm model={customer} updateModel={updateCustomer} />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={7}>
            <AddressForm model={addresses} updateModel={updateAddress} />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={7}>
            <EducationForm model={education} updateModel={updateEducation} />
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <br />
        <Divider></Divider>
        <FlexboxGrid justify="space-between">
          <FlexboxGrid.Item colspan={7}>
            <EmploymentForm model={employment} updateModel={updateEmployment} />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={7}>
            <ContactForm model={contact} updateModel={updateContact} />
          </FlexboxGrid.Item>

          <FlexboxGrid.Item colspan={7}>
            <BillingForm model={billing} updateModel={updateBilling} />
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
    </MainLayout>
  ) : (
    <Redirect to={<AuthenticatorPage />} />
  )
}

ProfilePage.propTypes = {}

export default withRouter(inject('authStore')(observer(ProfilePage)))
