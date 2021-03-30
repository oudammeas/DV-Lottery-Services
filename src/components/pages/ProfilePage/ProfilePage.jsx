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

  const [contact, setContact] = useState({})
  async function updateContact(contact) {
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

  const [education, setEducation] = useState({})
  async function updateEducation(education) {
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
      console.log('error updating customer:', err)
    }
  }

  const [employment, setEmployment] = useState({})
  async function updateEmployment(employment) {
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
      console.log('error updating customer:', err)
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
    console.log('1')
  }, [])

  // fectCustomer() function uses the Amplify API category to call the AppSync GraphQL API with the getCustomer query.
  // Once the data is returned, the data is passed into the setCustomerData() function to update the local state.
  async function fetchFormData() {
    try {
      const customer = await API.graphql(graphqlOperation(queries.getCustomer, { id: username })).then(function (output) {
        // console.log(output)
        setCustomer(output.data.getCustomer)
        // contact
        // alert(output.data.getCustomer.Contact)
        // setContact(output.data.getCustomer.Contact)
      })
      // updateCustomer({ firstname: 'Oudam', lastname: 'Meas' })
    } catch (err) {
      console.log('error fetching customer data', err)
    }
    try {
      const addresses = await API.graphql(
        graphqlOperation(queries.listAddresss, { filter: { customerID: { eq: username } } }),
      ).then(function (output) {
        // console.log(addresses.data.listAddresss.items[0])
        setAddresses(output.data.listAddresss.items[0])
      })
    } catch (err) {
      console.log('error fetching address data', err)
    }
    try {
      const education = await API.graphql(
        graphqlOperation(queries.listEducations, { filter: { customerID: { eq: username } } }),
      ).then(function (output) {
        console.log(output)
        setEducation(output.data.listEducations.items[0])
      })
    } catch (err) {
      console.log('error fetching education data', err)
    }
    try {
      const employment = await API.graphql(
        graphqlOperation(queries.listEmployments, { filter: { customerID: { eq: username } } }),
      ).then(function (output) {
        // Employments
        setEmployment(output.data.listEmployments.items[0])
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
      })
    } catch (err) {
      console.log('error fetching billing data', err)
    }
  }

  // // console.log(customer)
  // // const customerData = [
  // //   { key: 'firstname', value: '123877' },
  // //   { key: 'lastname', value: '124565' },
  // // ]

  // const handleAppSync = event => {
  //   event.preventDefault()
  // }

  // // form switch helper
  // // callbackType: {setFormValue, setFormError, resetFormValue, setFormInput}

  // async function switchFormHandler(formName, value, callbackType) {
  //   switch (formName) {
  //     case 'customer':
  //       if (callbackType == 'setFormError') {
  //         setCustomerFormError(value)
  //       } else if (callbackType == 'setFormValue') {
  //         setCustomerFormValue(value)
  //       } else if (callbackType == 'resetFormValue') {
  //         setCustomerFormValue(customer)
  //       } else if (callbackType == 'setFormInput') {
  //         let key = value[0]
  //         setCustomerFormValue({ ...customerFormValue, [key]: value[1] })
  //       }
  //       break
  //     case 'contact':
  //       if (callbackType == 'setFormError') {
  //         setContactFormError(value)
  //       } else if (callbackType == 'setFormValue') {
  //         setContactFormValue(value)
  //       } else if (callbackType == 'resetFormValue') {
  //         setContactFormValue(contact)
  //       } else if (callbackType == 'setFormInput') {
  //         let key = value[0]
  //         setContactFormValue({ ...contactFormValue, [key]: value[1] })
  //       }
  //       break
  //     case 'education':
  //       if (callbackType == 'setFormError') {
  //         setEducationFormError(value)
  //       } else if (callbackType == 'setFormValue') {
  //         setEducationFormValue(value)
  //       } else if (callbackType == 'resetFormValue') {
  //         setEducationFormValue(education)
  //       } else if (callbackType == 'setFormInput') {
  //         let key = value[0]
  //         setEducationFormValue({ ...educationFormValue, [key]: value[1] })
  //       }
  //       break
  //     case 'address':
  //       if (callbackType == 'setFormError') {
  //         setAddressFormError(value)
  //       } else if (callbackType == 'setFormValue') {
  //         setAddressFormValue(value)
  //       } else if (callbackType == 'resetFormValue') {
  //         setAddressFormValue(addresses)
  //       } else if (callbackType == 'setFormInput') {
  //         let key = value[0]
  //         setAddressFormValue({ ...addressFormValue, [key]: value[1] })
  //       }
  //       break
  //     case 'currentEmployment':
  //       if (callbackType == 'setFormError') {
  //         setCurrentEmploymentFormError(value)
  //       } else if (callbackType == 'setFormValue') {
  //         setCurrentEmploymentFormValue(value)
  //       } else if (callbackType == 'resetFormValue') {
  //         setCurrentEmploymentFormValue(currentEmployment)
  //       } else if (callbackType == 'setFormInput') {
  //         let key = value[0]
  //         setCurrentEmploymentFormValue({ ...currentEmploymentFormValue, [key]: value[1] })
  //       }
  //       break
  //     case 'pastEmployment':
  //       if (callbackType == 'setFormError') {
  //         setPastEmploymentFormError(value)
  //       } else if (callbackType == 'setFormValue') {
  //         setPastEmploymentFormValue(value)
  //       } else if (callbackType == 'resetFormValue') {
  //         setPastEmploymentFormValue(pastEmployment)
  //       } else if (callbackType == 'setFormInput') {
  //         let key = value[0]
  //         setPastEmploymentFormValue({ ...pastEmploymentFormValue, [key]: value[1] })
  //       }
  //       break
  //     case 'billing':
  //       if (callbackType == 'setFormError') {
  //         setBillingFormError(value)
  //       } else if (callbackType == 'setFormValue') {
  //         setBillingFormValue(value)
  //       } else if (callbackType == 'resetFormValue') {
  //         setBillingFormValue(billing)
  //       } else if (callbackType == 'setFormInput') {
  //         let key = value[0]
  //         setBillingFormValue({ ...billingFormValue, [key]: value[1] })
  //       }
  //       break
  //     default:
  //       break
  //   }
  // }

  console.log(customer)
  // // console.log(customerFormError)

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
          <CustomerForm model={customer} updateModel={updateCustomer} />
          <br />
          <ContactForm model={contact} updateModel={updateContact} />
          <br />
          <EducationForm model={education} updateModel={updateEducation} />
          <br />
          <AddressForm model={addresses} updateModel={updateAddress} />
          <br />
          <EmploymentForm model={employment} updateModel={updateEmployment} />
          <br />
          <BillingForm model={billing} updateModel={updateBilling} />
        </FlexboxGrid>
      </Content>
    </MainLayout>
  ) : (
    <Redirect to={<AuthenticatorPage />} />
  )
}

ProfilePage.propTypes = {}

export default withRouter(inject('authStore')(observer(ProfilePage)))
