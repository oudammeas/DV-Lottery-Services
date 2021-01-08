import React from 'react'
import { Route } from 'react-router-dom'
// import { withAuthenticationRequired } from '@auth0/auth0-react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import WelcomePage from '../../pages/WelcomePage'

const PrivateRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticator(component, {
      onRedirecting: () => <WelcomePage />,
    })}
    {...args}
  />
)

export default PrivateRoute
