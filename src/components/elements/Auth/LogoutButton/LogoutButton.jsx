import React, { useState } from "react";
import { Content, Panel, Button, ButtonToolbar, Form, FormGroup, FormControl, ControlLabel, HelpBlock } from "rsuite";
import { useTranslation } from "react-i18next";
import { useAuth0 } from "@auth0/auth0-react";


const LogoutButton = ({ commonStore }) => {
  const { t } = useTranslation();
  const { logout } = useAuth0();
  return (
    <Button
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
      variant="danger"
      className="btn-margin"
      appearance="primary"
      size="lg"
      color="red"
      style={{ marginRight: "0.5em", minWidth: "130px" }}
    >
      {t("common.navigation.logout")}
    </Button>
  );
};


LogoutButton.propTypes = {};

export default LogoutButton;
