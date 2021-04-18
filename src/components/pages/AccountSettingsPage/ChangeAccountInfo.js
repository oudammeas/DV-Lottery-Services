import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import { useHistory } from 'react-router-dom'
import LoaderButton from '../../elements/Libs/LoaderButton'
import { useFormFields } from '../../elements/Libs/hooksLib'
import { onError } from '../../elements/Libs/errorLib'
import './ChangeAccountInfo.css'

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

const ChangeAccountInfo = ({ commonStore, authStore }) => {
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
  console.log(user)

  const history = useHistory()
  const [fields, handleFieldChange] = useFormFields({
    given_name: user.attributes.given_name,
    family_name: user.attributes.family_name,
  })
  const [isChanging, setIsChanging] = useState(false)

  function validateEmailForm() {
    return fields.family_name.length > 0 && fields.given_name.length
  }

  async function handleUpdateClick(event) {
    event.preventDefault()

    setIsChanging(true)

    try {
      const user = await Auth.currentAuthenticatedUser()
      await Auth.updateUserAttributes(user, { given_name: fields.given_name, family_name: fields.family_name })
    } catch (error) {
      onError(error)
      setIsChanging(false)
    }
  }

  return isAuthenticated ? (
    <MainLayout>
      <Content style={styles.content}>
        <div style={styles.pagetitle}>{t('common.change-account-info-page.page-title')}</div>
        <Form formValue={fields} onChange={handleFieldChange}>
          <FormGroup>
            <ControlLabel>First Name</ControlLabel>
            <FormControl name="given_name" type="text" autoFocus />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Family Name</ControlLabel>
            <FormControl name="family_name" type="text" autoFocus />
          </FormGroup>
          <LoaderButton
            block
            type="submit"
            bsSize="large"
            onClick={handleUpdateClick}
            disabled={!validateEmailForm()}
            isLoading={isChanging}>
            Update Info
          </LoaderButton>
        </Form>
      </Content>
    </MainLayout>
  ) : (
    <Redirect to={<AuthenticatorPage />} />
  )
}

ChangeAccountInfo.propTypes = {}

export default withRouter(inject('authStore')(observer(ChangeAccountInfo)))
