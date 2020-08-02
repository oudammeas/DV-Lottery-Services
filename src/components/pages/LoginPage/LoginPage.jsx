import React, { useState } from "react";
import { Content, Panel, Button, ButtonToolbar, Form, FormGroup, FormControl, ControlLabel, HelpBlock } from "rsuite";
import MainLayout from "../../layouts/MainLayout.js/MainLayout";
import { useTranslation } from "react-i18next";
import { Schema } from 'rsuite';


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
      marginBottom: "1em",
    },

  };

  const { StringType, NumberType, ArrayType, DateType, ObjectType, BooleanType } = Schema.Types;

  const customerModel = Schema.Model({
    email: StringType().isEmail('Please enter a valid email address.'),
    password: StringType().isRequired('Please enter the correct password')

  });

  customerModel.checkAsync({
    email: 'oudam.meas@gmail.com',
    password: 'abc'
  }).then(result => {
    console.log(result);
  });

  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    age: '',
    password: '',
    verifyPassword: ''
  });

  const [formError, setFormError] = useState({});

  const handleSubmit = () => {
    // const { formValue } = useState();
    // if (!form.check()) {
    //   console.error('Form Error');
    //   return;
    // }
    // console.log(formValue, 'Form Value');
  };


  return (
    <MainLayout>
      <Content style={styles.content}>
        <div style={styles.formwrapper}>
          <div style={styles.formtitle}>{t("common.login-page.form-title")}</div>
          <Form
            layout="horizontal"
            style={styles.form}

            // ref={ref => (form = ref)}
            onChange={formValue => {
              setFormValue({ formValue });
            }}
            onCheck={formError => {
              setFormError({ formError });
            }}
            formValue={formValue}
            model={customerModel}
          >
            <FormGroup>
              <FormControl
                name="email"
                placeholder="Email"
                type="email"
              />
              <HelpBlock tooltip>This field is required</HelpBlock>
            </FormGroup>
            <FormGroup>
              <FormControl
                name="password"
                placeholder="Create Password"
                type="password"
              />
              <HelpBlock tooltip>This field is required</HelpBlock>
            </FormGroup>
            <FormGroup>
              <ButtonToolbar>
                <Button appearance="primary" type="submit" onClick={handleSubmit}>Login</Button>
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
