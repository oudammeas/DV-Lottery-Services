import React from "react";
import { Content, Panel, Button } from "rsuite";
import MainLayout from "../../layouts/MainLayout.js/MainLayout";
import { useTranslation } from "react-i18next";

const WelcomePage = () => {
  const { t } = useTranslation();

  const styles = {
    content: {
      padding: "1em",
      minHeight: "700px",
      maxWidth: "1280px",
      margin: "0 auto",
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
            <img src="https://c.wallhere.com/photos/74/7e/mer_france_marin_champs_terre_normandie_campagne_rocher-798292.jpg!d" height="340" />
            <Panel header="New DV Lottery Candidates">
              <Button appearance="primary" size="lg" href="/new-candidates" color="blue">Learn more</Button>
            </Panel>
          </Panel>
          <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 588, height: 500 }}>
            <img src="https://photoartinc.com/wp-content/uploads/2018/12/free-non-copyright-photos-4.jpg" height="340" />
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
