import React from "react";
import { Container, Content, Footer, Panel, Button } from "rsuite";
import MainLayout from "../../layouts/MainLayout.js/MainLayout";
import { useTranslation } from "react-i18next";

const SelectedCandidatesPage = () => {
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
                fontWeight: "bold"
            },

            maintext_heading: {
                paddingBottom: "1em",
                fontSize: "24px",
                fontWeight: "bold"
            },

            maintext: {
                paddingBottom: "1em",
                fontSize: "14px"
            }
        }

    };

    return (
        <MainLayout>
            <Content style={styles.content}>
                <div style={styles.content.pagetitle}>
                    {t("common.selectedCandidates-page.page-title")}
                </div>

                <div style={styles.content.hero}>
                    <Panel style={{ display: 'inline-block', width: "588px", height: "500px", margin: "1em", padding: "1em" }}>
                        <img src="https://photoartinc.com/wp-content/uploads/2018/12/free-non-copyright-photos-4.jpg" width="500px" />
                        <Button appearance="primary" size="lg" href="/new-candidates" color="blue" style={{ margin: "2em 0em 2em 0em" }}>For new candidates click here</Button>
                    </Panel>
                    <Panel style={{ display: 'inline-block', width: 588, height: 500, margin: "1em" }}>
                        <div style={styles.content.maintext_heading}>Introduction</div>
                        <div style={styles.content.maintext}>
                            {t("common.selectedCandidates-page.main-text")}
                        </div>
                    </Panel>
                </div>
            </Content>
        </MainLayout>
    );
};

SelectedCandidatesPage.propTypes = {};

export default SelectedCandidatesPage;