import React from 'react'
import { Button } from 'rsuite'
import { useTranslation } from 'react-i18next'
import { SignIn } from 'aws-amplify-react'

const LoginButton = () => {
  const { t } = useTranslation()
  return (
    <Button
      href="/authenticator"
      variant="primary"
      className="btn-margin"
      appearance="primary"
      size="lg"
      color="blue"
      style={{ marginRight: '0.5em', minWidth: '130px' }}>
      {t('common.navigation.login')}
    </Button>
  )
}

export default LoginButton
