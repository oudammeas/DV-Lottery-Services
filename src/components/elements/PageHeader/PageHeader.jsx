import React from 'react'
import PropTypes from 'prop-types'
import { Header, Navbar, Nav, Button } from 'rsuite'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { observer, inject } from 'mobx-react'
import { Affix } from 'rsuite'
import LoginButton from '../Auth/LoginButton'
import LogoutButton from '../Auth/LogoutButton'
import { ReactComponent as Logo } from './logo.svg'
import { v4 as uuidv4 } from 'uuid'
// Import authentication ui and components
import { AuthState } from '@aws-amplify/ui-components'

// list of menu options
const menu = [
  { title: 'common.navigation.home', route: '/' },
  { title: 'common.navigation.faqs', route: '/faqs' },
  { title: 'common.navigation.contact-us', route: '/contact-us' },
]

const PageHeader = ({ commonStore, authStore }) => {
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
        textDecoration: 'none',
      },
    },
  }

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
              <a className="navbar-brand logo" href="/" style={styles.navbar.logo}>
                <Logo /> {t('common.navigation.brand-name')}
              </a>
            </Nav>
          </Navbar.Header>
          <Navbar.Body style={styles.navbar.body}>
            <Nav activeKey={commonStore.activeNavMenu} onSelect={handleSelect}>
              {menu.map(m => (
                <Nav.Item eventKey={t(m.title)} key={uuidv4()} componentClass={Link} to={t(m.route)}>
                  {t(m.title)}
                </Nav.Item>
              ))}
            </Nav>
            <Nav pullRight style={{ minHeight: '50px', padding: '0.5em' }}>
              {authStore.authState === AuthState.SignedIn ? <LogoutButton /> : <LoginButton />}
              <Link to="/appointment">
                <Button appearance="ghost" size="lg" style={{ marginRight: '0.5em', minWidth: '130px' }}>
                  {t('common.navigation.appointment')}
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
