import React from 'react'
import { Button } from 'rsuite'
import { useTranslation } from 'react-i18next'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
  const { t } = useTranslation()

  const { loginWithPopup, isLoading } = useAuth0()
  return (
    <Button
      onClick={() => loginWithPopup()}
      variant="primary"
      className="btn-margin"
      appearance="primary"
      size="lg"
      loading={isLoading}
      color="blue"
      style={{ marginRight: '0.5em', minWidth: '130px' }}>
      {t('common.navigation.login')}
    </Button>
  )
}

export default LoginButton
