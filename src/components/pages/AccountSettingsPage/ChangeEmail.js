import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import { useHistory } from 'react-router-dom'
import LoaderButton from '../../elements/Libs/LoaderButton'
import { useFormFields } from '../../elements/Libs/hooksLib'
import { onError } from '../../elements/Libs/errorLib'
import './ChangeEmail.css'

import {
  Content,
  Panel,
  Button,
  ButtonToolbar,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Radio,
  RadioGroup,
  FlexboxGrid,
  Col,
  Divider,
  Icon,
  Timeline,
} from 'rsuite'
import MainLayout from '../../layouts/MainLayout.js/MainLayout'
import { useTranslation } from 'react-i18next'
import FlexboxGridItem from 'rsuite/lib/FlexboxGrid/FlexboxGridItem'
// import './CustomStyle.css'
import { Redirect, withRouter } from 'react-router'
import { observer, inject } from 'mobx-react'
import AuthenticatorPage from '../AuthenticatorPage'

const ChangeEmail = ({ commonStore, authStore }) => {
  const { t } = useTranslation()

  const styles = {
    content: {
      padding: '5em',
      margin: '0 auto',
      textAlign: 'start',
      justifyContent: 'center',
    },

    pagetitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '1em',
    },

    flexboxgrid: {
      root: {
        // padding: "1em 1em 1em 1em",
      },

      item: {},
    },

    customTimeline: {
      marginLeft: '20px',

      dot: {
        position: 'absolute',
        background: '#fff',
        top: '0',
        left: '-2px',
        border: '2px solid #ddd',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        fontSize: '18px',
        paddingTop: '9px',
        color: '#999',
        marginLeft: '-13px',
      },
    },

    currentStage: {
      fontWeight: 'bold',
      color: 'blue',
    },
  }

  // Auth Status:
  const isAuthenticated = authStore.isAuthenticated
  const user = authStore.authUser
  console.log(authStore)

  const history = useHistory()
  const [codeSent, setCodeSent] = useState(false)
  const [fields, handleFieldChange] = useFormFields({
    code: '',
    email: '',
  })
  const [isConfirming, setIsConfirming] = useState(false)
  const [isSendingCode, setIsSendingCode] = useState(false)

  function validateEmailForm() {
    return fields.email.length > 0
  }

  function validateConfirmForm() {
    return fields.code.length > 0
  }

  async function handleUpdateClick(event) {
    event.preventDefault()

    setIsSendingCode(true)

    try {
      const user = await Auth.currentAuthenticatedUser()
      await Auth.updateUserAttributes(user, { email: fields.email })
      setCodeSent(true)
    } catch (error) {
      onError(error)
      setIsSendingCode(false)
    }
  }

  async function handleConfirmClick(event) {
    event.preventDefault()

    setIsConfirming(true)

    try {
      await Auth.verifyCurrentUserAttributeSubmit('email', fields.code)

      history.push('/settings')
    } catch (error) {
      onError(error)
      setIsConfirming(false)
    }
  }

  function renderUpdateForm() {
    return (
      <form onSubmit={handleUpdateClick}>
        <FormGroup bsSize="large" controlId="email">
          <ControlLabel>Email</ControlLabel>
          <FormControl autoFocus type="email" value={fields.email} onChange={handleFieldChange} />
        </FormGroup>
        <LoaderButton block type="submit" bsSize="large" isLoading={isSendingCode} disabled={!validateEmailForm()}>
          Update Email
        </LoaderButton>
      </form>
    )
  }

  function renderConfirmationForm() {
    return (
      <form onSubmit={handleConfirmClick}>
        <FormGroup bsSize="large" controlId="code">
          <ControlLabel>Confirmation Code</ControlLabel>
          <FormControl autoFocus type="tel" value={fields.code} onChange={handleFieldChange} />
          <HelpBlock>Please check your email ({fields.email}) for the confirmation code.</HelpBlock>
        </FormGroup>
        <LoaderButton block type="submit" bsSize="large" isLoading={isConfirming} disabled={!validateConfirmForm()}>
          Confirm
        </LoaderButton>
      </form>
    )
  }

  return isAuthenticated ? (
    <MainLayout>
      <Content style={styles.content}>
        <div style={styles.pagetitle}>{t('common.change-password-page.page-title')}</div>
        <div className="ChangeEmail">{!codeSent ? renderUpdateForm() : renderConfirmationForm()}</div>
      </Content>
    </MainLayout>
  ) : (
    <Redirect to={<AuthenticatorPage />} />
  )
}

ChangeEmail.propTypes = {}

export default withRouter(inject('authStore')(observer(ChangeEmail)))
