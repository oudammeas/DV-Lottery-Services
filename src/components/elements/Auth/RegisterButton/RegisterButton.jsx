import React, { Fragment, useState, useEffect } from 'react';
import { Button, Content } from 'rsuite';
import MainLayout from '../../../layouts/MainLayout.js/MainLayout';
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';

const RegisterButton = () => {
  const { loginWithPopup, user } = useAuth0();

  return (
    <Fragment>
      <Button
        onClick={() =>
          loginWithPopup({
            screen_hint: 'signup',
          })
        }
        variant="primary"
        className="btn-margin">
        Sign Up
      </Button>
    </Fragment>
  );
};

RegisterButton.propTypes = {};

export default RegisterButton;
