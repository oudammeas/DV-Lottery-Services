import React, { useState, useEffect, useRef, useReducer } from 'react'
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
  Avatar,
  FileType,
  Uploader,
  Alert,
  Loader,
  Icon,
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
import { Amplify, Auth, API, graphqlOperation, Storage } from 'aws-amplify'
import { v4 as uuid } from 'uuid'
import awsExports from '../../../aws-exports'
import * as queries from '../../../graphql/queries'
import * as mutations from '../../../graphql/mutations'
import * as subscriptions from '../../../graphql/subscriptions'
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
Storage.configure(awsExports)

// load bucket
const { aws_user_files_s3_bucket_region: region, aws_user_files_s3_bucket: bucket } = awsExports

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

    container: {
      width: 300,
      margin: '0 auto',
    },
    username: {
      cursor: 'pointer',
      border: '1px solid #ddd',
      padding: '5px 25px',
    },
    button: {
      width: 200,
      backgroundColor: '#ddd',
      cursor: 'pointer',
      height: 30,
      margin: '0px 0px 8px',
    },
  }

  // fetch user:
  const isAuthenticated = authStore.isAuthenticated
  const user = authStore.authUser
  // console.log(authStore)
  // console.log(user)
  const picture = './favicon.ico'
  const email = user ? user.attributes['email'] : null
  const username = user ? user.attributes['sub'] : null
  const given_name = user ? user.attributes['given_name'] : null
  const family_name = user ? user.attributes['family_name'] : null

  // when the component loads, the useEffect hook is called and it invokes the fectCustomer() function:
  useEffect(() => {
    fetchFormData()
    // console.log('1')

    // Subscribe to update customer
    const subscriptionOnUpdateCustomer = API.graphql(graphqlOperation(subscriptions.onUpdateCustomer)).subscribe({
      next: async customer => {
        // Do something with the data
        setCustomer(customer)
      },
    })
    // Stop receiving data updates from the subscription
    subscriptionOnUpdateCustomer.unsubscribe()

    // Subscribe to update address
    const subscriptionOnUpdateAddresses = API.graphql(graphqlOperation(subscriptions.onUpdateAddress)).subscribe({
      next: async addresses => {
        // Do something with the data
        setAddresses(addresses)
      },
    })
    // Stop receiving data updates from the subscription
    subscriptionOnUpdateAddresses.unsubscribe()

    // Subscribe to update address
    const subscriptionOnUpdateEducation = API.graphql(graphqlOperation(subscriptions.onUpdateEducation)).subscribe({
      next: async education => {
        // Do something with the data
        setEducation(education)
      },
    })
    // Stop receiving data updates from the subscription
    subscriptionOnUpdateEducation.unsubscribe()

    // Subscribe to update address
    const subscriptionOnUpdateEmployment = API.graphql(graphqlOperation(subscriptions.onUpdateEmployment)).subscribe({
      next: async employment => {
        // Do something with the data
        setEmployment(employment)
      },
    })
    // Stop receiving data updates from the subscription
    subscriptionOnUpdateEmployment.unsubscribe()
  }, [])

  // fetch avatar
  const [file, updateFile] = useState(null)
  // const [username, updateUsername] = useState('')
  // const [state, dispatch] = useReducer(reducer, initialState)
  const [avatarUrl, updateAvatarUrl] = useState('./favicon.ico')
  async function fetchImage(key) {
    try {
      const imageData = await Storage.get(key)
      updateAvatarUrl(imageData)
      console.log('Image:', imageData)
    } catch (err) {
      console.log('error', err)
    }
  }

  // handle change
  function handleChange(event) {
    const {
      target: { value, files },
    } = event
    const [image] = files || []
    updateFile(image || value)
  }

  async function createAvatar() {
    if (file) {
      const { name: fileName, type: mimeType } = file
      const key = `${uuid()}${fileName}`
      const fileForUpload = {
        bucket,
        key,
        region,
      }
      const inputData = { id: username, portrait_file: fileForUpload }

      console.log(inputData)

      try {
        await Storage.put(key, file, {
          contentType: mimeType,
        })
        await API.graphql(graphqlOperation(mutations.updateCustomer, { input: inputData }))
        console.log('successfully stored user data!')
      } catch (err) {
        console.log('error: ', err)
      }
    }
  }

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
    // console.log(education)

    // handle file type fields
    const entries = Object.entries(education)
    const file_field = ['degree_file']
    for (const [fieldName, value] of entries) {
      if (file_field.includes(fieldName)) {
        // prep file for upload to S3 bucket
        const file = value
        const { name: fileName, type: mimeType } = file
        const key = `${uuid()}${fileName}`
        const fileForUpload = {
          bucket,
          key,
          region,
        }
        education[fieldName] = fileForUpload

        // upload file to S3 bucket
        try {
          await Storage.put(key, file, {
            contentType: mimeType,
          })
        } catch (err) {
          console.log('error: ', err)
        }
      }
    }

    // mutation
    // console.log(education)
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
        // console.log(data)
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

  // fectCustomer() function uses the Amplify API category to call the AppSync GraphQL API with the getCustomer query.
  // Once the data is returned, the data is passed into the setCustomerData() function to update the local state.
  async function fetchFormData() {
    // fetch customer data
    try {
      await API.graphql(graphqlOperation(queries.getCustomer, { id: username })).then(function (output) {
        // console.log(output)
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
        // console.log(output)
        if (output.data.listContacts.items.length == 0) {
          setContact(FieldListInitial['contact'])
          // console.log(FieldListInitial['contact'])
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
        // console.log(output)
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
        // console.log(output)
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
        // console.log(output)
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

  // console.log('Customer:', customer)
  // // console.log(customerFormError)
  // console.log('Education:', education)

  return isAuthenticated ? (
    <MainLayout>
      <Content style={styles.content}>
        <div style={styles.pagetitle}>{t('common.profile-page.page-title')}</div>
        <input label="File to upload" type="file" onChange={handleChange} style={{ margin: '10px 0px' }} />
        <button style={styles.button} onClick={createAvatar}>
          Save Image
        </button>

        <p style={styles.username} onClick={() => fetchImage(customer.portrait_file.key)}>
          {' '}
          {given_name} {family_name}
        </p>
        <img src={avatarUrl} style={{ width: 300 }} />

        <FlexboxGrid justify="space-between">
          <FlexboxGrid.Item colspan={7}>
            <CustomerForm model={customer} updateModel={updateCustomer} form_id="customer" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={7}>
            <AddressForm model={addresses} updateModel={updateAddress} form_id="address" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={7}>
            <EducationForm model={education} updateModel={updateEducation} form_id="education" />
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <br />
        <Divider></Divider>
        <FlexboxGrid justify="space-between">
          <FlexboxGrid.Item colspan={7}>
            <EmploymentForm model={employment} updateModel={updateEmployment} form_id="employment" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={7}>
            <ContactForm model={contact} updateModel={updateContact} form_id="contact" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={7}>
            <BillingForm model={billing} updateModel={updateBilling} form_id="billing" />
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
