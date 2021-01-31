import React from 'react'
import { Route, Redirect, Link } from 'react-router-dom'
// import { withAuthenticationRequired } from '@auth0/auth0-react'
import AuthenticatorPage from '../../pages/AuthenticatorPage'
import { Authenticator } from 'aws-amplify-react'
import { withRouter } from 'react-router'
import { observer, inject } from 'mobx-react'

const PrivateRoute = ({ component, commonStore, authStore, ...rest }) => {
  const isAuthenticated = authStore.isAuthenticated
  console.log(isAuthenticated)
  return <Route {...rest}>{isAuthenticated ? component : <Redirect to={'/authenticator'} />}</Route>
}

export default withRouter(inject('commonStore', 'authStore')(observer(PrivateRoute)))
