import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Header, Navbar, Nav, Icon, Container, Button } from 'rsuite'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { observer, inject } from 'mobx-react'
import { Affix } from 'rsuite'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../Auth/LoginButton'
import LogoutButton from '../Auth/LogoutButton'
import RegisterButton from '../Auth/RegisterButton'
import { ReactComponent as Logo } from './logo.svg'
// import Amplify from 'aws-amplify';
// import awsconfig from '../../../aws-exports';
// import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';

// Amplify.configure(awsconfig);


const menu = [
  { title: 'common.navigation.home', route: '/' },
  { title: 'common.navigation.faqs', route: '/faqs' },
  { title: 'common.navigation.contact-us', route: '/contact-us' },
]

const PageHeader = ({ commonStore }) => {
  const { t } = useTranslation()

  const styles = {
    navbar: {
      header: {
        padding: '2em',
        minHeight: '150px',
        width: '100%',
        alignContent: 'center',
        padding: '2em',
        backgroundColor: '#003875',
        justifyContent: 'left',
        color: '#E5E5E5',
      },
      body: {
        minHeight: '50px',
        paddingLeft: '3em',
      },

      logo: {
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
        alignContent: 'center',
        textAlign: 'center',
        textDecoration: "none",
      },
    },
  }
  const handleSelect = active => {
    commonStore.setActiveNavMenu(active)
  }

  const AuthNav = () => {
    const { isAuthenticated } = useAuth0()

    return (
        isAuthenticated ? <LogoutButton /> : <LoginButton />
    );
  };

  return (
    <Header>
      <Affix>
        <Navbar appearance="default">
          <Navbar.Header style={styles.navbar.header}>
            <Nav>
              <a className="navbar-brand logo" href="/" style={styles.navbar.logo}>
                <Logo /> {t('common.navigation.brand-name')}
              </a>
            </Nav>
          </Navbar.Header>
          <Navbar.Body style={styles.navbar.body}>
            <Nav activeKey={commonStore.activeNavMenu} onSelect={handleSelect}>
              {menu.map(m => (
                <Nav.Item eventKey={t(m.title)} componentClass={Link} to={t(m.route)}>
                  {t(m.title)}
                </Nav.Item>
              ))}
            </Nav>
            <Nav pullRight style={{ minHeight: '50px', padding: '0.5em' }}>
              <AuthNav />
              <Button
                appearance="ghost"
                size="lg"
                href="/appointment"
                style={{ marginRight: '0.5em', minWidth: '130px' }}>
                {t('common.navigation.appointment')}
              </Button>
            </Nav>
          </Navbar.Body>
        </Navbar>
      </Affix>
    </Header>
  )
}

PageHeader.propTypes = {}

export default withRouter(inject('commonStore')(observer(PageHeader)))
