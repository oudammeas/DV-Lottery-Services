import React, { useState, useEffect } from 'react'
import { Container, Content, Footer, Calendar, Badge } from 'rsuite'
import MainLayout from '../../layouts/MainLayout.js/MainLayout'
import { useTranslation } from 'react-i18next'
import { Authenticator } from 'aws-amplify-react'
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import { Redirect } from 'react-router-dom'

const AuthenticatorPage = () => {
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

  // Set up authentication
  const [authState, setAuthState] = useState()
  const [user, setUser] = useState()

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState)
      setUser(authData)
    })
  }, [])
  useEffect(() => console.log(user), [user])

  return authState === AuthState.SignedIn && user ? (
    <Redirect to="/" />
  ) : (
    // <MainLayout>
    //     <Content style={styles.content}>
    //         <Authenticator />

    //     </Content>
    // </MainLayout>
    <AmplifyAuthenticator />
  )
}

AuthenticatorPage.propTypes = {}

export default AuthenticatorPage
