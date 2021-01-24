import React from 'react'
import { Route } from 'react-router-dom'
// import { withAuthenticationRequired } from '@auth0/auth0-react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import AuthenticatorPage from '../../pages/AuthenticatorPage'

const PrivateRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticator(component, {
      onRedirecting: () => <AuthenticatorPage />,
    })}
    {...args}
  />
)

export default PrivateRoute
