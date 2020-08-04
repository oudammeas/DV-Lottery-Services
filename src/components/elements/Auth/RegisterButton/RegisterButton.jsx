import React from "react";
import { Content, Panel, Button, ButtonToolbar, Form, FormGroup, FormControl, ControlLabel, HelpBlock } from "rsuite";
import MainLayout from "../../../layouts/MainLayout.js/MainLayout";
import { useTranslation } from "react-i18next";
import { useAuth0 } from "@auth0/auth0-react";


const RegisterButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
      variant="primary"
      className="btn-margin"
    >
      Sign Up
    </Button>
  );
};

RegisterButton.propTypes = {};

export default RegisterButton;
