import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
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
import './CustomStyle.css'
import { Redirect, withRouter } from 'react-router'
import { observer, inject } from 'mobx-react'
import AuthenticatorPage from '../AuthenticatorPage'

import { API } from 'aws-amplify'
import { useHistory } from 'react-router-dom'
// import { onError } from '../libs/errorLib'
// import config from '../config'

const StatusPage = ({ commonStore, authStore }) => {
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

  const username = user ? user.username : null
  const picture = './favicon.ico'
  const email = user ? user.attributes.email : null

  return isAuthenticated ? (
    <MainLayout>
      <Content style={styles.content}>
        <div style={styles.pagetitle}>{t('common.status-page.page-title')}</div>

        <Timeline className="custom-timeline">
          <Timeline.Item dot={<Icon icon="play" size="2x" />}>
            <p>Lottery Entrance Stage: Initiation.</p>
            <p>October 1, 2020</p>
          </Timeline.Item>
          <Timeline.Item dot={<Icon icon="paperclip" size="2x" />}>
            <p>Lottery Entrance Stage: Information Collection.</p>
            <p>October 7, 2020</p>
          </Timeline.Item>
          <Timeline.Item dot={<Icon icon="balance-scale" size="2x" />} style={styles.currentStage}>
            <p>Lottery Entrance Stage: Eligibility Evaluation.</p>
            <p>October 14, 2020</p>
          </Timeline.Item>
          <Timeline.Item dot={<Icon icon="file" size="2x" />}>
            <p>Lottery Entrance Stage: Application Submission.</p>
            <p>October 30, 2020</p>
          </Timeline.Item>
          <Timeline.Item dot={<Icon icon="hourglass-o" size="2x" />}>
            <p>Lottery Stage: Drawing Period.</p>
            <p>March 2, 06:12</p>
          </Timeline.Item>
          <Timeline.Item dot={<Icon icon="hourglass" size="2x" />}>
            <p>Lottery Stage: Drawing Result.</p>
            <p>March 2, 06:12</p>
          </Timeline.Item>
          <Timeline.Item dot={<Icon icon="paperclip" size="2x" />}>
            <p>Immigration Application Stage: Information Collection.</p>
            <p>March 2, 06:12</p>
          </Timeline.Item>
          <Timeline.Item dot={<Icon icon="file" size="2x" />}>
            <p>Immigration Application Stage: Information Submission.</p>
            <p>March 2, 06:12</p>
          </Timeline.Item>
          <Timeline.Item dot={<Icon icon="calendar" size="2x" />}>
            <p>Interview Stage: Interview Date Booking.</p>
            <p>March 2, 06:12</p>
          </Timeline.Item>
          <Timeline.Item dot={<Icon icon="paperclip" size="2x" />}>
            <p>Interview Stage: Interview Preparation.</p>
            <p>March 2, 06:12</p>
          </Timeline.Item>
          <Timeline.Item dot={<Icon icon="wechat" size="2x" />}>
            <p>Interview Stage: Interview Result.</p>
            <p>March 2, 06:12</p>
          </Timeline.Item>
          <Timeline.Item dot={<Icon icon="file" size="2x" />}>
            <p>Final Stage: Immigration Paperwork.</p>
            <p>March 2, 06:12</p>
          </Timeline.Item>
          <Timeline.Item dot={<Icon icon="plane" size="2x" />}>
            <p>Final Stage: Travel Plan.</p>
            <p>March 2, 06:12</p>
          </Timeline.Item>
          <Timeline.Item dot={<Icon icon="check" size="2x" style={{ background: '#15b215', color: '#fff' }} />}>
            <p>Contratulation!!!</p>
            <p>March 2, 06:12</p>
          </Timeline.Item>
        </Timeline>
      </Content>
    </MainLayout>
  ) : (
    <Redirect to={<AuthenticatorPage />} />
  )
}

const AccountSettingsPage = ({ commonStore, authStore }) => {
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

  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)

  function billUser(details) {
    return API.post('notes', '/billing', {
      body: details,
    })
  }

  return <div className="Settings"></div>
}

AccountSettingsPage.propTypes = {}

export default withRouter(inject('authStore')(observer(AccountSettingsPage)))
