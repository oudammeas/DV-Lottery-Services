import React, { useState, useEffect } from 'react'
import { Container, Content, Footer, Calendar, Badge } from 'rsuite'
import MainLayout from '../../layouts/MainLayout.js/MainLayout'
import { useTranslation } from 'react-i18next'
import { Authenticator } from 'aws-amplify-react'
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { observer, inject } from 'mobx-react'
import { autorun } from 'mobx'

const AuthenticatorPage = ({ authStore }) => {
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
    authStore.setAuthState(nextAuthState)
    authStore.setAuthUser(authData)
  })

  autorun(()=>
    {
      console.log("user Change",authStore.authUser,authStore.authState)
      console.info('Condition', authStore.authState === AuthState.SignedIn && authStore.authUser )
    }
  ) 

  return authStore.authState === AuthState.SignedIn && authStore.authUser ? (
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

export default withRouter(inject('authStore')(observer(AuthenticatorPage)))
