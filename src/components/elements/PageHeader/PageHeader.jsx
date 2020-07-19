import React, { useState } from "react";
import PropTypes from "prop-types";
import { Header, Navbar, Nav, Icon, Container } from "rsuite";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { observer, inject } from "mobx-react";


const menu = [
  { title: "common.navigation.home", route: "/" },
  { title: "common.navigation.process", route: "/" },
  { title: "common.navigation.register", route: "/register-page" },
  { title: "common.navigation.faq", route: "/" },
  { title: "common.navigation.contact-us", route: "/" },
];

const PageHeader = ({ commonStore }) => {
  const { t } = useTranslation();

  const styles = {
    navbar: {
      root: {},
      header: {
        padding: "1em",
        height: "5em",
        width: "100%",
        alignContent: "center",
        padding: "2em",
        backgroundColor: "inherite",
        justifyContent: "left",
      },
      body: {
        paddingLeft: "3em",
      },
    },
  };
  const handleSelect = (active) => {
    console.log(active);
    commonStore.setActiveNavMenu(active);
  };

  return (
    <Header>
      <Navbar appearance="inverse" style={styles.navbar.root}>
        <Navbar.Header style={styles.navbar.header}>
          <Nav>
            <a className="navbar-brand logo">
              {t("common.navigation.brand-name")}
            </a>
          </Nav>
        </Navbar.Header>
        <Navbar.Body style={styles.navbar.body}>
          <Nav activeKey={commonStore.activeNavMenu} onSelect={handleSelect}>
            {menu.map((m) => (
              <Nav.Item
                eventKey={t(m.title)}
                componentClass={Link}
                to={t(m.route)}
              >
                {t(m.title)}
              </Nav.Item>
            ))}
          </Nav>
          <Nav pullRight>
            <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </Header>
  );
};

PageHeader.propTypes = {};

export default withRouter(inject("commonStore")(observer(PageHeader)));
