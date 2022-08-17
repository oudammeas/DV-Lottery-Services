import React from 'react'
import { Amplify, Auth } from 'aws-amplify'
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import { observer, inject } from 'mobx-react'
import { autorun } from 'mobx'
import { useTranslation } from 'react-i18next'

const AuthenticatorPage = ({ authStore, history }) => {
  const { t } = useTranslation()

  const styles = {
    content: {
      padding: '5em',
      // minHeight: "40em",.,
      maxWidth: '100%',
      margin: '0 auto',
      textAlign: 'start',
      calendar: {
        width: 400,
      },
    },
  }

  onAuthUIStateChange((nextAuthState, authData) => {
    authStore.setAuth(nextAuthState, authData)
    {
      nextAuthState === AuthState.SignedIn && authStore.setIsAuthenticated(true)
    }
    console.log(nextAuthState)
    console.log(authData)
  })

  return authStore.authState === AuthState.SignedIn && authStore.authUser ? (
    <Redirect to={history.goBack()} />
  ) : (
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[
          {
            type: 'given_name',
            label: 'Given Name',
            placeholder: 'given name',
            required: true,
          },
          {
            type: 'family_name',
            label: 'Family Name',
            placeholder: 'family name',
            required: true,
          },
          {
            type: 'email',
            label: 'Email Address',
            placeholder: 'jonhsmith@gmail.com',
            required: true,
          },
          {
            type: 'password',
            label: 'Password',
            placeholder: 'password placeholder',
            required: true,
          },
          // {
          //   type: 'phone_number',
          //   label: 'Phone Number',
          //   placeholder: 'custom Phone placeholder',
          //   required: false,
          // },
        ]}
      />
      <AmplifySignIn slot="sign-in" usernameAlias="email" />
    </AmplifyAuthenticator>
  )
}

AuthenticatorPage.propTypes = {}

export default withRouter(inject('authStore')(observer(AuthenticatorPage)))
