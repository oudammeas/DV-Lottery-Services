import React from 'react'
import { Button } from 'rsuite'
import { useTranslation } from 'react-i18next'
import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {
  const { isLoading } = useAuth0()
  const { t } = useTranslation()
  const { logout } = useAuth0()
  return (
    <Button
      onClick={() => logout({ returnTo: window.location.origin })}
      variant="danger"
      className="btn-margin"
      appearance="primary"
      size="lg"
      loading={isLoading}
      color="red"
      style={{ marginRight: '0.5em', minWidth: '130px' }}>
      {t('common.navigation.logout')}
    </Button>
  )
}

export default LogoutButton
