import React from "react";
import { Content, Panel, Button, ButtonToolbar, Form, FormGroup, FormControl, ControlLabel, HelpBlock } from "rsuite";
import MainLayout from "../../layouts/MainLayout.js/MainLayout";
import { useTranslation } from "react-i18next";

const RegisterPage = () => {
  const { t } = useTranslation();

  const styles = {
    content: {
      padding: "1em",
      minHeight: "700px",
      maxWidth: "1280px",
      margin: "0 auto",
      textAlign: "start",
      justifyContent: "center",

    },

    formwrapper: {
      justifyContent: "center"
    },

    formtitle: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "1em",
    }

  };
  return (
    <MainLayout>
      <Content style={styles.content}>
        <div style={styles.formwrapper}>
          <div style={styles.formtitle}>{t("common.register-page.form-title")}</div>
          <Form layout="horizontal" action="/profile">
            <FormGroup>
              <FormControl name="firstname" placeholder="Firstname" />
              <HelpBlock tooltip>This field is required</HelpBlock>
            </FormGroup>
            <FormGroup>
              <FormControl name="lastname" placeholder="Lastname" />
              <HelpBlock tooltip>This field is required</HelpBlock>
            </FormGroup>
            <FormGroup>
              <FormControl name="email" placeholder="Email" type="email" />
              <HelpBlock tooltip>This field is required</HelpBlock>
            </FormGroup>
            <FormGroup>
              <FormControl name="password" placeholder="Create Password" type="password" />
              <HelpBlock tooltip>This field is required</HelpBlock>
            </FormGroup>
            <FormGroup>
              <ButtonToolbar>
                <Button appearance="primary">Submit</Button>
                <Button appearance="default">Cancel</Button>
              </ButtonToolbar>
            </FormGroup>
          </Form>
        </div>
      </Content>
    </MainLayout>
  );
};

RegisterPage.propTypes = {};

export default RegisterPage;
