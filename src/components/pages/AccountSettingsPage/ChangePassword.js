import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import { useHistory } from 'react-router-dom'
import LoaderButton from '../../elements/Libs/LoaderButton'
import { useFormFields } from '../../elements/Libs/hooksLib'
import { onError } from '../../elements/Libs/errorLib'
import './ChangePassword.css'

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
import { FieldSelect } from '../../elements/Forms/FormikHelpers'
import { ChangePasswordForm } from '../../elements/Forms'

const ChangePassword = ({ commonStore, authStore }) => {
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
  // console.log(isAuthenticated)

  const history = useHistory()
  const [fields, handleFieldChange] = useFormFields({
    password: '',
    oldPassword: '',
    confirmPassword: '',
  })
  const [isChanging, setIsChanging] = useState(false)

  function validateForm() {
    return fields.oldPassword.length > 0 && fields.password.length > 0 && fields.password === fields.confirmPassword
  }

  async function handleChangeClick(event) {
    event.preventDefault()

    setIsChanging(true)

    try {
      const currentUser = await Auth.currentAuthenticatedUser()
      await Auth.changePassword(currentUser, fields.oldPassword, fields.password)

      history.push('/account-settings')
    } catch (error) {
      onError(error)
      setIsChanging(false)
    }
  }

  return isAuthenticated ? (
    <MainLayout>
      <Content style={styles.content}>
        <div style={styles.pagetitle}>{t('common.change-password-page.page-title')}</div>
        <div className="ChangePassword">
          <Form onChange={handleFieldChange} formValue={fields}>
            <FormGroup>
              <ControlLabel>Old Password</ControlLabel>
              <FormControl name="oldPassword" type="text" />
            </FormGroup>
            <hr />
            <FormGroup>
              <ControlLabel>New Password</ControlLabel>
              <FormControl name="password" type="password" />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Confirm Password</ControlLabel>
              <FormControl name="confirmPassword" type="password" />
            </FormGroup>
            <LoaderButton
              block
              type="submit"
              bsSize="large"
              onClick={handleChangeClick}
              disabled={!validateForm()}
              isLoading={isChanging}>
              Change Password
            </LoaderButton>
          </Form>
        </div>
      </Content>
    </MainLayout>
  ) : (
    <Redirect to={<AuthenticatorPage />} />
  )
}

ChangePassword.propTypes = {}

export default withRouter(inject('authStore')(observer(ChangePassword)))
