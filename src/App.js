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
import { Amplify, Auth } from 'aws-amplify'
import awsExports from './aws-exports'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
Amplify.configure(awsExports)

const stores = {
  commonStore,
  authStore,
}

function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true)

  useEffect(() => {
    onLoad()
  }, [])

  async function onLoad() {
    try {
      await Auth.currentSession()
      let user = await Auth.currentAuthenticatedUser()
      console.log(user)
      authStore.setAuth(AuthState.SignedIn, user)
    } catch (e) {
      if (e !== 'No current user') {
        alert(e)
      }
    }

    // Auth.currentSession()
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err))

    // Auth.currentAuthenticatedUser({
    //   bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    // })
    //   .then(user => console.log(user))
    //   .catch(err => console.log(err))

    setIsAuthenticating(false)
    // authStore.setIsAuthenticating(false)
    // console.log(authStore.isAuthenticating)
  }

  console.log(authStore)
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
