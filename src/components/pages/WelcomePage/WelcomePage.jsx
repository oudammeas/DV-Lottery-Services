import React from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  Sidebar,
  Navbar,
  Nav,
  Icon,
  Dropdown,
  Button,
  Table,
} from "rsuite";
import { useTranslation } from "react-i18next";

const { Column, HeaderCell, Cell, Pagination } = Table;

const WelcomePage = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Header>
        <Navbar appearance="inverse">
          <Navbar.Header>
            <a className="navbar-brand logo">BRAND</a>
          </Navbar.Header>
          <Navbar.Body>
            <Nav>
              <Nav.Item icon={<Icon icon="home" />}>
                {t("common.navigation.home")}
              </Nav.Item>
              <Nav.Item>{t("common.navigation.process")}</Nav.Item>
              <Nav.Item>{t("common.navigation.register")}</Nav.Item>
              <Nav.Item>{t("common.navigation.faq")}</Nav.Item>
              <Nav.Item>{t("common.navigation.contact-us")}</Nav.Item>
              <Nav.Item>
                <Button appearance="primary">Login</Button>
              </Nav.Item>
              <Nav.Item>
                <Button appearance="ghost" icon="facebook-official">
                  {" "}
                  Book an Appointment{" "}
                </Button>
              </Nav.Item>
            </Nav>
            <Nav pullRight>
              <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
            </Nav>
          </Navbar.Body>
        </Navbar>
      </Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Container>
  );
};

WelcomePage.propTypes = {};

export default WelcomePage;
