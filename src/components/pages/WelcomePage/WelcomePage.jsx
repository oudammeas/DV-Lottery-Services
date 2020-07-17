import React, { Component } from "react";
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

const { Column, HeaderCell, Cell, Pagination } = Table;

const WelcomePage = () => {
  return (
    <Container>
      <Header>
        <Navbar appearance="inverse">
          <Navbar.Header>
            <a className="navbar-brand logo">BRAND</a>
          </Navbar.Header>
          <Navbar.Body>
            <Nav>
              <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
              <Nav.Item>Processes</Nav.Item>
              <Nav.Item>Register</Nav.Item>
              <Nav.Item>FAQs</Nav.Item>
              <Nav.Item>Contact Us</Nav.Item>
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
