import React from 'react'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import { observer, inject } from 'mobx-react'
import { autorun } from 'mobx'

const AuthenticatorPage = ({ authStore, history }) => {
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
  })

  return authStore.authState === AuthState.SignedIn && authStore.authUser ? (
    <Redirect to={history.goBack()} />
  ) : (
    <AmplifyAuthenticator />
  )
}

AuthenticatorPage.propTypes = {}

export default withRouter(inject('authStore')(observer(AuthenticatorPage)))
