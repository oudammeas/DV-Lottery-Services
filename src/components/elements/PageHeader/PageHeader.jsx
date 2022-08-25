import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Header, Navbar, Nav, Button } from 'rsuite'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { observer, inject } from 'mobx-react'
import { Affix } from 'rsuite'
import LoginButton from '../Auth/LoginButton'
import LogoutButton from '../Auth/LogoutButton'
import { ReactComponent as Logo } from './logo.svg'
import { v4 as uuidv4 } from 'uuid'
// Import authentication ui and components
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import { menu } from '../../../routes/router'

// // list of menu options
// const menu = [
//   { title: 'common.routes.home', route: '/' },
//   { title: 'common.routes.faqs', route: '/faqs' },
//   { title: 'common.routes.contact-us', route: '/contact-us' },
//   { title: 'common.routes.profile', route: '/profile' },
// ]

const PageHeader = ({ commonStore, authStore }) => {
  const { t } = useTranslation()
  const styles = {
    navbar: {
      header: {
        minHeight: '150px',
        width: '100%',
        background: '#003875',
        alignContent: 'left',
        paddingLeft: '25px'
      },
      nav: {
        alignContent: 'center',
      },
      body: {
        paddingLeft: '3em',
        maxHeight: '250px'
      },
      logo: {
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
        textDecoration: 'none',
      },
      title: {
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
        alignContent: 'center',
        textAlign: 'center',
        textDecoration: 'none',
      },
    },
  }

  const isAuthenticated = authStore.isAuthenticated

  console.log(isAuthenticated)

  // Set button active
  const handleSelect = active => {
    commonStore.setActiveNavMenu(active)
  }

  return (
    <Header>
      <Affix>
        <Navbar appearance="default">
          <Navbar.Header style={styles.navbar.header}>
            <Nav>
              <Logo style={styles.navbar.logo}/>
            </Nav>
            <Nav>
              <Link to="/">
                <span style={styles.navbar.title}>{t('common.routes.brand-name')}</span>
              </Link>
            </Nav>
          </Navbar.Header>
          <Navbar.Body style={styles.navbar.body}>
            <Nav activeKey={commonStore.activeNavMenu} onSelect={handleSelect}>
              {menu.map(m =>
                m.private ? (
                  isAuthenticated && (
                    <Nav.Item eventKey={t(m.name)} key={uuidv4()} componentClass={Link} to={t(m.path)}>
                      {t(m.name)}
                    </Nav.Item>
                  )
                ) : (
                  <Nav.Item eventKey={t(m.name)} key={uuidv4()} componentClass={Link} to={t(m.path)}>
                    {t(m.name)}
                  </Nav.Item>
                ),
              )}
            </Nav>
            <Nav pullRight style={{ minHeight: '50px', padding: '0.5em' }}>
              {isAuthenticated ? <LogoutButton /> : <LoginButton />}
              <Link to="/appointment">
                <Button appearance="ghost" size="lg" style={{ marginRight: '0.5em', minWidth: '130px' }}>
                  {t('common.routes.appointment')}
                </Button>
              </Link>
            </Nav>
          </Navbar.Body>
        </Navbar>
      </Affix>
    </Header>
  )
}

PageHeader.propTypes = {}

export default withRouter(inject('commonStore', 'authStore')(observer(PageHeader)))
