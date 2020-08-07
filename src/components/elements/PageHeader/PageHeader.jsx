import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Header, Navbar, Nav, Icon, Container, Button } from 'rsuite';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { observer, inject } from 'mobx-react';
import { Affix } from 'rsuite';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Auth/LoginButton';
import LogoutButton from '../Auth/LogoutButton';
import RegisterButton from '../Auth/RegisterButton';

const menu = [
  { title: 'common.navigation.home', route: '/' },
  { title: 'common.navigation.register', route: '/register' },
  { title: 'common.navigation.faqs', route: '/faqs' },
  { title: 'common.navigation.contact-us', route: '/contact-us' },
];

const PageHeader = ({ commonStore }) => {
  const { t } = useTranslation();

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
    },
  };
  const handleSelect = (active) => {
    commonStore.setActiveNavMenu(active);
  };

  const AuthNav = () => {
    const { isAuthenticated } = useAuth0();

    return (
      <Nav pullRight style={{ minHeight: '50px', padding: '0.5em' }}>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        <Button
          appearance="ghost"
          size="lg"
          href="/appointment"
          style={{ marginRight: '0.5em', minWidth: '130px' }}>
          {t('common.navigation.appointment')}
        </Button>
      </Nav>
    );
  };

  return (
    <Header>
      <Affix>
        <Navbar appearance="default">
          <Navbar.Header style={styles.navbar.header}>
            <Nav>
              <a className="navbar-brand logo">{t('common.navigation.brand-name')}</a>
            </Nav>
          </Navbar.Header>
          <Navbar.Body style={styles.navbar.body}>
            <Nav activeKey={commonStore.activeNavMenu} onSelect={handleSelect}>
              {menu.map((m) => (
                <Nav.Item eventKey={t(m.title)} componentClass={Link} to={t(m.route)}>
                  {t(m.title)}
                </Nav.Item>
              ))}
            </Nav>
            <AuthNav />
          </Navbar.Body>
        </Navbar>
      </Affix>
    </Header>
  );
};

PageHeader.propTypes = {};

export default withRouter(inject('commonStore')(observer(PageHeader)));
