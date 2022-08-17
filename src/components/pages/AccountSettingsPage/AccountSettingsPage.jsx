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
import './CustomStyle.css'
import { Redirect, withRouter } from 'react-router'
import { observer, inject } from 'mobx-react'
import AuthenticatorPage from '../AuthenticatorPage'

import { API } from 'aws-amplify'
import { useHistory, Link } from 'react-router-dom'
import { onError } from '../../elements/Libs/errorLib.js'
// import config from '../config'

import { Elements, StripeProvider } from 'react-stripe-elements'
import BillingForm from '../../elements/Billings/BillingForm.js'
import './AccountSettingsPage.css'
import LoaderButton from '../../elements/Libs/LoaderButton'
import ChagePassword from './ChangePassword'
import ChageEmail from './ChangeEmail'
import ChageAccountInfo from './ChangeAccountInfo'

const AccountSettingsPage = ({ commonStore, authStore }) => {
  const { t } = useTranslation()

  const styles = {
    content: {
      padding: '5em',
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
        // padding: "1em 1em 1em 1em",
      },

      item: {},
    },

    customTimeline: {
      marginLeft: '20px',

      dot: {
        position: 'absolute',
        background: '#fff',
        top: '0',
        left: '-2px',
        border: '2px solid #ddd',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        fontSize: '18px',
        paddingTop: '9px',
        color: '#999',
        marginLeft: '-13px',
      },
    },

    currentStage: {
      fontWeight: 'bold',
      color: 'blue',
    },
  }

  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const [stripe, setStripe] = useState(null)

  const stripe_public_key =
    'pk_test_51If9KsEW3qdQ6xhEFxASLZLOyCrHkP0Hsk0KCzmgcUmtoHskyGr3IG9jUP1ePbv0CLl7AQjQyshZCz7w66nsS67R00HAzv7jm9'

  useEffect(() => {
    setStripe(window.Stripe(stripe_public_key))
  }, [])

  function billUser(details) {
    return <div>Nothing</div>

    // API.post('notes', '/billing', {
    //   body: details,
    // })
  }

  // Auth Status:
  const isAuthenticated = authStore.isAuthenticated
  const user = authStore.authUser
  console.log(authStore)

  const username = user ? user.username : null
  const picture = './favicon.ico'
  const email = user ? user.attributes.email : null

  async function handleFormSubmit(storage, { token, error }) {
    if (error) {
      onError(error)
      return
    }

    setIsLoading(true)

    try {
      await billUser({
        storage,
        source: token.id,
      })

      alert('Your card has been charged successfully!')
      history.push('/')
    } catch (e) {
      onError(e)
      setIsLoading(false)
    }
  }

  return isAuthenticated ? (
    <MainLayout>
      <Content style={styles.content}>
        <div style={styles.pagetitle}>{t('common.account-settings-page.page-title')}</div>
        <Form layout="horizontal">
          <FormGroup>
            <ControlLabel>Firstame</ControlLabel>
            <FormControl value={user.attributes.given_name} readOnly />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Lastname</ControlLabel>
            <FormControl value={user.attributes.family_name} readOnly />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Email</ControlLabel>
            <FormControl value={user.attributes.email} readOnly />
          </FormGroup>
        </Form>
        <br />
        <Link to="/account-settings/account-info">
          <LoaderButton block bsSize="large">
            Change Account Info
          </LoaderButton>
        </Link>
        <br />
        <Link to="/account-settings/email">
          <LoaderButton block bsSize="large">
            Change Email
          </LoaderButton>
        </Link>
        <br />
        <Link to="/account-settings/password">
          <LoaderButton block bsSize="large">
            Change Password
          </LoaderButton>
        </Link>
        <hr />

        <h3>Payment</h3>
        <StripeProvider stripe={stripe}>
          <Elements
            fonts={[
              {
                cssSrc: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800',
              },
            ]}>
            <BillingForm isLoading={isLoading} onSubmit={handleFormSubmit} />
          </Elements>
        </StripeProvider>
      </Content>
    </MainLayout>
  ) : (
    <Redirect to={<AuthenticatorPage />} />
  )
}

AccountSettingsPage.propTypes = {}

export default withRouter(inject('authStore')(observer(AccountSettingsPage)))
