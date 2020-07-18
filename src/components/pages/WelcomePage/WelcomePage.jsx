import React from "react";
import { Content } from "rsuite";
import Header from "../../elements/navbar";
import MainLayout from "../../layouts/MainLayout.js/MainLayout";

const WelcomePage = () => {
  return (
    <MainLayout>
      <Content> Welcome page</Content>
    </MainLayout>
  );
};

WelcomePage.propTypes = {};

export default WelcomePage;
