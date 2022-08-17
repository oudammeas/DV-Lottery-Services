import React, { useState, useEffect } from 'react'
// Style
import './App.css'
import 'rsuite/lib/styles/index.less'
import './App.less'
// Translation
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n.js'

// Provider inject into all child component
import { Provider, observer, inject } from 'mobx-react'
import { withRouter } from 'react-router'

// Route
import Routes from './routes/router'
import { BrowserRouter as VichySugarDaddyProvider } from 'react-router-dom'

// Import Stores
import { commonStore, authStore } from './stores'

// Set up frontend
import { Amplify, Auth, API } from 'aws-amplify'
import awsExports from './aws-exports'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import * as queries from './graphql/queries'
Amplify.configure(awsExports)
API.configure(awsExports)
Auth.configure(awsExports)

const stores = {
  commonStore,
  authStore,
}

function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true)

  useEffect(() => {
    onLoad()
  }, [])

  // Auth.currentAuthenticatedUser({
  //   bypassCache: false,
  // })
  //   .then(function (user) {
  //     console.log('User:' + JSON.stringify(user))
  //   })
  //   .catch(err => console.log(err))

  async function onLoad() {
    try {
      const session = await Auth.currentSession()
      const user = await Auth.currentAuthenticatedUser()
      // console.log(user)
      authStore.setAuth(AuthState.SignedIn, user)
      authStore.setIsAuthenticated(true)
    } catch (e) {
      if (e !== 'No current user') {
        alert(e)
      }
    }
    setIsAuthenticating(false)
  }

  // console.log(authStore)
  // console.log(authStore.authState)
  // console.log(authStore.authUser)
  // console.log(authStore.isAuthenticating)

  return (
    !isAuthenticating && (
      <div className="App">
        <VichySugarDaddyProvider>
          <Provider {...stores}>
            <Routes />
          </Provider>
        </VichySugarDaddyProvider>
      </div>
    )
  )
}

export default App
