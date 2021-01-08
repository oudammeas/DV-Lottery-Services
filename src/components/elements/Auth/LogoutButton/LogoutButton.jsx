import React from 'react'
import { Button } from 'rsuite'
import { useTranslation } from 'react-i18next'
import { Auth } from 'aws-amplify'
import { inject } from 'mobx-react'
const LogoutButton = ({ authStore }) => {
  const { t } = useTranslation()

  async function signOut() {
    try {
      await Auth.signOut()
      authStore.setAuth(Auth.signedOut, null)
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
      {t('common.navigation.logout')}
    </Button>
  )
}

export default inject('authStore')(LogoutButton)
