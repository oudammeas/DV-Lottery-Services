import React from 'react'
import { Button } from 'rsuite'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
const LoginButton = () => {
  const { t } = useTranslation()
  return (
    <Link to="/authenticator">
      <Button
        variant="primary"
        className="btn-margin"
        appearance="primary"
        size="lg"
        color="blue"
        style={{ marginRight: '0.5em', minWidth: '130px' }}>
        {t('common.routes.login')}
      </Button>
    </Link>
  )
}

export default LoginButton
