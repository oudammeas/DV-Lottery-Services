import React from "react";
import { Container, Content, Footer, Panel, Button } from "rsuite";
import MainLayout from "../../layouts/MainLayout.js/MainLayout";
import { useTranslation } from "react-i18next";

const NewCandidatesPage = () => {
    const { t } = useTranslation();

    const styles = {
        content: {
            padding: "1em",
            minHeight: "700px",
            maxWidth: "1280px",
            margin: "0 auto",
            textAlign: "start",
            justifyContent: "center",

            pagetitle: {
                fontSize: "24px",
                fondWeight: "bold"
            },

            maintext: {
                padding: "1em",
                paddingBottom: "1em",
                fontSize: "14px"
            }
        }

    };

    return (
        <MainLayout>
            <Content style={styles.content}>
                <div style={styles.content.pagetitle}>
                    {t("common.newCandidates-page.page-title")}
                </div>

                <div style={styles.content.hero}>
                    <Panel style={{ display: 'inline-block', width: "588px", height: "500px", margin: "1em", padding: "1em" }}>
                        <img src="https://c.wallhere.com/photos/74/7e/mer_france_marin_champs_terre_normandie_campagne_rocher-798292.jpg!d" width="500px" />
                        <Button appearance="primary" size="lg" href="/selected-candidates" color="blue" style={{ margin: "2em 0em 2em 0em" }}>For selected candidates click here</Button>
                    </Panel>
                    <Panel style={{ display: 'inline-block', width: 588, height: 500, margin: "1em" }}>
                        <div style={styles.content.maintext}>
                            {t("common.newCandidates-page.main-text")}
                        </div>
                    </Panel>
                </div>
            </Content>
        </MainLayout>
    );
};

NewCandidatesPage.propTypes = {};

export default NewCandidatesPage;