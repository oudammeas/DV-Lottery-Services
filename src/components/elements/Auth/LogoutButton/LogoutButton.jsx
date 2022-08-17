import React from 'react'
import { Redirect } from 'react-router-dom'
import { Button } from 'rsuite'
import { useTranslation } from 'react-i18next'
import { Auth } from 'aws-amplify'
import { withRouter } from 'react-router'
import { observer, inject } from 'mobx-react'
import { useHistory } from 'react-router-dom'
const LogoutButton = ({ authStore }) => {
  const { t } = useTranslation()
  const history = useHistory()
  async function signOut() {
    try {
      await Auth.signOut()
      authStore.setAuth(Auth.signedOut, null)
      authStore.setIsAuthenticated(false)
      history.push('/authenticator')
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }

  return (
    <Button
      onClick={signOut}
      variant="danger"
      className="btn-margin"
      appearance="primary"
      size="lg"
      color="red"
      style={{ marginRight: '0.5em', minWidth: '130px' }}>
      {t('common.routes.logout')}
    </Button>
  )
}

export default withRouter(inject('authStore')(observer(LogoutButton)))
