import React from "react";
import { Content, Panel, Button, ButtonToolbar, Form, FormGroup, FormControl, ControlLabel, HelpBlock } from "rsuite";
import MainLayout from "../../layouts/MainLayout.js/MainLayout";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
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
    }

  };

  return (
    <MainLayout>
      <Content style={styles.content}>
        <div style={styles.formwrapper}>
          <div style={styles.formtitle}>{t("common.login-page.form-title")}</div>
          <Form layout="horizontal">
            <FormGroup>
              <ControlLabel>Email: </ControlLabel>
              <FormControl name="email" type="email" />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Password: </ControlLabel>
              <FormControl name="password" type="password" />
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



LoginPage.propTypes = {};

export default LoginPage;
