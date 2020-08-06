import React, { useState } from "react";
import { Content, Panel, Button, ButtonToolbar, Form, FormGroup, FormControl, ControlLabel, HelpBlock } from "rsuite";
import { useTranslation } from "react-i18next";
import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = ({ commonStore }) => {

  const { t } = useTranslation();

  const { loginWithPopup } = useAuth0();
  return (
    <Button
      onClick={() => loginWithPopup()}
      variant="primary"
      className="btn-margin"
      appearance="primary"
      size="lg"
      color="blue"
      style={{ marginRight: "0.5em", minWidth: "130px" }}
    >
      {t("common.navigation.login")}
    </Button>
  );
};


LoginButton.propTypes = {};

export default LoginButton;
