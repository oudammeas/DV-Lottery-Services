import React from "react";
import { Content, Panel, Button } from "rsuite";
import MainLayout from "../../layouts/MainLayout.js/MainLayout";
import { useTranslation } from "react-i18next";

const WelcomePage = () => {
  const { t } = useTranslation();

  const styles = {
    content: {
      minHeight: "800px",
      padding: "1em 5em 1em 5em",
      height: "5em",
      textAlign: "center",
      justifyContent: "center",
      maintext: {
        fontSize: "36px"
      },

      subtext: {
        paddingTop: "1em",
        paddingBottom: "1em",
        fontSize: "36px"
      }
    }

  };

  return (
    <MainLayout>
      <Content style={styles.content}>
        <div style={styles.content.maintext}>
          {t("common.welcome-page.main-text")}
        </div>
        <div style={styles.content.subtext}>
          {t("common.welcome-page.sub-text")}
        </div>

        <div style={styles.content.hero}>
          <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 588, height: 500 }}>
            <img src="./front_page_image_1.jpg" height="340" />
            <Panel header="New DV Lottery Candidates">
              <Button appearance="primary" size="lg" href="/new-candidates" color="blue">Learn more</Button>
            </Panel>
          </Panel>

          <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 588, height: 500 }}>
            <img src="../../../public/front_page_image_2.jpg" height="340" />
            <Panel header="Selected DV Lottery Candidates">
              <Button appearance="primary" size="lg" href="/selected-candidates" color="blue">Learn more</Button>
            </Panel>
          </Panel>
        </div>

      </Content>
    </MainLayout>
  );
};

WelcomePage.propTypes = {};

export default WelcomePage;
