import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Content, Button, ButtonToolbar, Form, FlexboxGrid, ControlLabel, RadioGroup, Radio } from 'rsuite'
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
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import * as queries from '../../../graphql/queries'
import * as mutations from '../../../graphql/mutations'
import { set } from 'mobx'
import { Event, isEmptyObject } from 'jquery'
import { EmptyContainer } from 'aws-amplify-react/lib-esm/Auth/Authenticator'
import { form_group, TextField } from '../../elements/Forms'
import { ElasticInference } from 'aws-sdk'

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
      },

      item: {},
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
  const username = '3d834b52-09c1-4bb8-9e86-01fe10fcc38d'

  // console.log(username)
  /// Connect frontend to API:

  // define local states
  // const initialState = { firstname_kh: '', lastname_kh: '', gender: '', date_of_birth: '' }

  const [customerFormValue, setCustomerFormValue] = useState({})
  const [customerFormError, setCustomerFormError] = useState({})
  const [customer, setCustomer] = useState({})
  const [customerMode, setCustomerMode] = useState('readOnly')
  const readOnly = customerMode === 'readOnly'

  const [addressFormValue, setAddressFormValue] = useState({})
  const [addressFormError, setAddressFormError] = useState({})
  const [addresses, setAddresses] = useState({})
  const [addressMode, setAddressMode] = useState('readOnly')

  const [contactFormValue, setContactFormValue] = useState({})
  const [contactFormError, setContactFormError] = useState({})
  const [contact, setContact] = useState({})
  const [contactMode, setContactMode] = useState('readOnly')

  const [educationFormValue, setEducationFormValue] = useState({})
  const [educationFormError, setEducationFormError] = useState({})
  const [education, setEducation] = useState({})
  const [educationMode, setEducationMode] = useState('readOnly')

  const [currentEmploymentFormValue, setCurrentEmploymentFormValue] = useState({})
  const [currentEmploymentFormError, setCurrentEmploymentFormError] = useState({})
  const [currentEmployment, setCurrentEmployment] = useState({})
  const [currentEmploymentMode, setCurrentEmploymentMode] = useState('readOnly')

  const [pastEmploymentFormValue, setPastEmploymentFormValue] = useState({})
  const [pastEmploymentFormError, setPastEmploymentFormError] = useState({})
  const [pastEmployment, setPastEmployment] = useState({})
  const [pastEmploymentMode, setPastEmploymentMode] = useState('readOnly')

  const [billingFormValue, setBillingFormValue] = useState({})
  const [billingFormError, setBillingFormError] = useState({})
  const [billing, setBilling] = useState({})
  const [billingMode, setBillingMode] = useState('readOnly')

  // visiblity
  const [visibility, setVisibility] = useState('visible')
  const hidden = visibility === 'hidden'

  // when the component loads, the useEffect hook is called and it invokes the fectCustomer() function:
  useEffect(() => {
    fetchFormData()
  }, [])

  const customerFormRef = useRef()

  // // setInitalState set the initial state of form
  // function setInitial(customerData) {
  //   const obj = customerData
  //   // using for in
  //   for (let key in obj) {
  //     let value = obj[key]
  //     // console.log(key, value)
  //     setFormState({ ...formState, [key]: value })
  //   }
  // }

  // fectCustomer() function uses the Amplify API category to call the AppSync GraphQL API with the getCustomer query.
  // Once the data is returned, the data is passed into the setCustomerData() function to update the local state.
  async function fetchFormData() {
    try {
      const customer = await API.graphql(graphqlOperation(queries.getCustomer, { id: username })).then(function (output) {
        // customer
        setCustomer(output.data.getCustomer)
        setCustomerFormValue(output.data.getCustomer)

        // contact
        // alert(output.data.getCustomer.Contact)
        setContact(output.data.getCustomer.Contact)
        setContactFormValue(output.data.getCustomer.Contact)
      })
    } catch (err) {
      console.log('error fetching customer data', err)
    }
    try {
      const addresses = await API.graphql(
        graphqlOperation(queries.listAddresss, { filter: { customerID: { eq: username } } }),
      ).then(function (output) {
        // console.log(addresses.data.listAddresss.items[0])
        setAddresses(output.data.listAddresss.items[0])
        setAddressFormValue(output.data.listAddresss.items[0])
      })
    } catch (err) {
      console.log('error fetching address data', err)
    }

    try {
      const education = await API.graphql(
        graphqlOperation(queries.listEducations, { filter: { customerID: { eq: username } } }),
      ).then(function (output) {
        // console.log(output)
        setEducation(output.data.listEducations.items[0])
        setEducationFormValue(output.data.listEducations.items[0])
      })
    } catch (err) {
      console.log('error fetching education data', err)
    }
    try {
      const currentEmployment = await API.graphql(
        graphqlOperation(queries.listEmployments, { filter: { customerID: { eq: username } } }),
      ).then(function (output) {
        // current employments
        setCurrentEmployment(output.data.listEmployments.items[0])
        setCurrentEmploymentFormValue(output.data.listEmployments.items[0])
        // past employments
        setPastEmployment(output.data.listEmployments.items[0])
        setPastEmploymentFormValue(output.data.listEmployments.items[0])
      })
    } catch (err) {
      console.log('error fetching employment data', err)
    }

    try {
      const billing = await API.graphql(
        graphqlOperation(queries.listBillings, { filter: { customerID: { eq: username } } }),
      ).then(function (output) {
        // console.log(output)
        setBilling(output.data.listBillings.items[0])
        setBillingFormValue(output.data.listBillings.items[0])
      })
    } catch (err) {
      console.log('error fetching billing data', err)
    }
  }

  // console.log(customer)
  // const customerData = [
  //   { key: 'firstname', value: '123877' },
  //   { key: 'lastname', value: '124565' },
  // ]

  // updateCustomer function uses the Amplify API category to call the APpSync GRaphQL API with the updateCustomer mutation.
  async function updateCustomer(data) {
    // const id = customer['data']['getCustomer']['id']
    // const version = customer['data']['getCustomer']['_version']
    // console.log(id, version)
    // console.log(data)
    try {
      const obj = data
      console.log(data)
      // using for in
      for (let key in obj) {
        let value = obj[key]
      }
      console.log(obj)
      await API.graphql(graphqlOperation(mutations.updateCustomer, { input: data }))
      console.log('OK')
    } catch (err) {
      console.log('error updating customer:', err)
    }
  }

  const handleAppSync = event => {
    event.preventDefault()

    // // update
    // API.graphql(
    //   graphqlOperation(mutations.updateService, {
    //     input: { id: '261fc855-fd58-4416-a70f-9a33c7b68458', service_name: 'new name', _version: 1 },
    //   }),
    // )

    // // delete
    // API.graphql(
    //   graphqlOperation(mutations.deleteService, {
    //     input: { id: 'd57e8c5f-a72a-49e8-b241-2fbf02b50637', _version: 1 },
    //   }),
    // )

    // queries
    // const allServices = API.graphql(graphqlOperation(queries.listServices))
    // console.log(allServices)

    // //  get
    // const oneService = API.graphql(graphqlOperation(queries.getService, { id: '7be458f2-23c1-4bbb-aa5f-642f1e121676' }))
    // console.log(oneService)

    // //  create
    // const service = { service_name: 'service_03', service_price: 400, service_description: 'Service_03' }
    // const newService = API.graphql(graphqlOperation(mutations.createService, { input: service }))
  }

  // form switch helper
  // callbackType: {setFormValue, setFormError, resetFormValue, setFormInput}

  async function switchFormHandler(formName, value, callbackType) {
    switch (formName) {
      case 'customer':
        if (callbackType == 'setFormError') {
          setCustomerFormError(value)
        } else if (callbackType == 'setFormValue') {
          setCustomerFormValue(value)
        } else if (callbackType == 'resetFormValue') {
          setCustomerFormValue(customer)
        } else if (callbackType == 'setFormInput') {
          let key = value[0]
          setCustomerFormValue({ ...customerFormValue, [key]: value[1] })
        }
        break
      case 'contact':
        if (callbackType == 'setFormError') {
          setContactFormError(value)
        } else if (callbackType == 'setFormValue') {
          setContactFormValue(value)
        } else if (callbackType == 'resetFormValue') {
          setContactFormValue(contact)
        } else if (callbackType == 'setFormInput') {
          let key = value[0]
          setContactFormValue({ ...contactFormValue, [key]: value[1] })
        }
        break
      case 'education':
        if (callbackType == 'setFormError') {
          setEducationFormError(value)
        } else if (callbackType == 'setFormValue') {
          setEducationFormValue(value)
        } else if (callbackType == 'resetFormValue') {
          setEducationFormValue(education)
        } else if (callbackType == 'setFormInput') {
          let key = value[0]
          setEducationFormValue({ ...educationFormValue, [key]: value[1] })
        }
        break
      case 'address':
        if (callbackType == 'setFormError') {
          setAddressFormError(value)
        } else if (callbackType == 'setFormValue') {
          setAddressFormValue(value)
        } else if (callbackType == 'resetFormValue') {
          setAddressFormValue(addresses)
        } else if (callbackType == 'setFormInput') {
          let key = value[0]
          setAddressFormValue({ ...addressFormValue, [key]: value[1] })
        }
        break
      case 'currentEmployment':
        if (callbackType == 'setFormError') {
          setCurrentEmploymentFormError(value)
        } else if (callbackType == 'setFormValue') {
          setCurrentEmploymentFormValue(value)
        } else if (callbackType == 'resetFormValue') {
          setCurrentEmploymentFormValue(currentEmployment)
        } else if (callbackType == 'setFormInput') {
          let key = value[0]
          setCurrentEmploymentFormValue({ ...currentEmploymentFormValue, [key]: value[1] })
        }
        break
      case 'pastEmployment':
        if (callbackType == 'setFormError') {
          setPastEmploymentFormError(value)
        } else if (callbackType == 'setFormValue') {
          setPastEmploymentFormValue(value)
        } else if (callbackType == 'resetFormValue') {
          setPastEmploymentFormValue(pastEmployment)
        } else if (callbackType == 'setFormInput') {
          let key = value[0]
          setPastEmploymentFormValue({ ...pastEmploymentFormValue, [key]: value[1] })
        }
        break
      case 'billing':
        if (callbackType == 'setFormError') {
          setBillingFormError(value)
        } else if (callbackType == 'setFormValue') {
          setBillingFormValue(value)
        } else if (callbackType == 'resetFormValue') {
          setBillingFormValue(billing)
        } else if (callbackType == 'setFormInput') {
          let key = value[0]
          setBillingFormValue({ ...billingFormValue, [key]: value[1] })
        }
        break
      default:
        break
    }
  }

  // set form error state
  const setFormError = (formName, formError) => {
    // console.log(formError)
    switchFormHandler(formName, formError, 'setFormError')
  }

  // set form value state
  const setFormValue = (formName, formValue) => {
    // console.log(formName)
    switchFormHandler(formName, formValue, 'setFormValue')
  }

  // reset form value state
  const resetFormValue = formName => {
    switchFormHandler(formName, 'OK', 'resetFormValue')
  }
  // pas form value
  const passFormValue = (formName, formField) => {
    // console.log(formName)

    switch (formName) {
      case 'customer':
        return customerFormValue
      case 'contact':
        return contactFormValue
      case 'education':
        return educationFormValue
      case 'address':
        return addressFormValue
      case 'currentEmployment':
        return currentEmploymentFormValue
      case 'pastEmployment':
        return pastEmploymentFormValue
      case 'billing':
        return billingFormValue
      default:
        return customerFormValue
    }
  }

  // setInput update formState based on form input changes
  const setFormInput = (formName, inputValue) => {
    console.log(inputValue)
    // alert(inputValue)
    switchFormHandler(formName, inputValue, 'setFormInput')
  }

  const handleSubmit = (event, formName) => {
    event.preventDefault()
    // console.log(Object.keys(customerFormError).length)
    console.log(formName)

    // cancel form update -> setCustomerFormValue back to customerData
    if (event.target.name == 'cancel') {
      // resetFormValue(formName)
      setCustomerFormValue(customer)
      setCustomerMode('readOnly')
      // setCustomerFormValue(customer)
      // console.log(customer)
    }
    // submit form update -> updateCustomer with custeromFormValue
    else if (event.target.name == 'update') {
      if (Object.keys(customerFormError).length > 0) {
        alert('Please, fix errors before submitting the form!')
      } else if (Object.keys(customerFormError).length == 0 && Object.keys(customerFormValue).length == 0) {
        alert('You did not make any changes!')
      } else if (Object.keys(customerFormError).length == 0 && Object.keys(customerFormValue).length > 0) {
        console.log(customerFormValue)
        updateCustomer(customerFormValue)
      }
    } else if (event.target.name == 'reset') {
      event.target.reset()
    }
  }

  const handleEdit = (event, formName) => {
    setCustomerMode('normal')
  }
  // // select a specific field
  // const fieldEditHandler = (form_id, field_id) => {
  //   // setReadOnly([...readOnly, `${form_id}${field_id}`]);
  // }

  // console.log(customerFormValue)
  // console.log(customerFormError)

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

        {/* <JSONView formValue={customer} /> */}

        <FlexboxGrid style={styles.flexboxgrid.root}>
          {/* loop thru forms */}
          {form_group.map((form, i) => {
            return (
              <FlexboxGrid.Item colspan={24} style={styles.flexboxgrid.item}>
                <Form
                  ref={customerFormRef}
                  model={form.model}
                  onCheck={formError => setFormError(form.name, formError)}
                  // formValue={customerFormValue}
                  formValue={passFormValue(form.name)}
                  onChange={formValue => setFormValue(form.name, formValue)}
                  onSubmit={handleSubmit}>
                  {/* form title */}
                  <h3>{form.title}</h3>
                  <div>
                    {customerMode == 'readOnly' && (
                      <Button appearance="ghost" type="submit" name="customerMode" onClick={event => setCustomerMode('normal')}>
                        Edit Information
                      </Button>
                    )}
                  </div>
                  {/* <RadioGroup inline value={mode} onChange={value => setMode(value)}>
                    <Radio value="normal">Edit</Radio>
                  </RadioGroup> */}

                  {/* loop thru form fields */}
                  {form.fields.map((field, j) => {
                    return (
                      <TextField
                        name={field.name}
                        label={field.label}
                        // onChange={event => setFormInput(form.name, [field.name, event])}
                        // value={customerFormValue[field.name]}
                        readOnly={readOnly}
                        controlId={'form#' + i.toString() + 'field#' + j.toString()}
                      />
                    )
                  })}
                  <ButtonToolbar>
                    <Button appearance="primary" type="submit" name="update" onClick={event => handleSubmit(event, form.name)}>
                      Save Changes
                    </Button>
                    <Button appearance="ghost" type="submit" name="cancel" onClick={event => handleSubmit(event, form.name)}>
                      Cancel Changes
                    </Button>
                    <Button appearance="ghost" type="reset" name="reset">
                      Reset
                    </Button>
                  </ButtonToolbar>
                  <pre>{JSON.stringify(customerFormValue, null, 2)}</pre>
                  {console.log(customerFormRef)}
                </Form>

                <br />
              </FlexboxGrid.Item>
            )
          })}
        </FlexboxGrid>
      </Content>
    </MainLayout>
  ) : (
    <Redirect to={<AuthenticatorPage />} />
  )
}

ProfilePage.propTypes = {}

export default withRouter(inject('authStore')(observer(ProfilePage)))
