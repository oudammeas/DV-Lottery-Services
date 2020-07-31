import React from "react";
import { Container, Content, Footer, FlexboxGrid, Button, IconButton, ButtonGroup, ButtonToolbar, Icon, Col, Panel, Divider } from "rsuite";
import MainLayout from "../../layouts/MainLayout.js/MainLayout";
import { useTranslation } from "react-i18next";

const ContactUsPage = () => {
    const { t } = useTranslation();

    const styles = {
        content: {
            padding: "5em",
            minHeight: "40em",
            maxWidth: "100%",
            margin: "0 auto",
            textAlign: "start",

        },

        pagetitle: {
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "1em",
        },

        panel: {
            root: {
                display: 'inline-block',
                width: "auto",
                height: "auto",
            },


            ul: {
                textAlign: "left",
                lh: {
                    fontWeight: "bold",
                },
                li: {
                    listStyleType: "none",
                },
            }

        },

        a: {
            color: "#E5E5E5",
        }

    };
    return (
        <MainLayout>
            <Content style={styles.content}>
                <div style={styles.pagetitle}>{t("common.contact-us-page.page-title")}</div>
                <Panel bordered style={styles.panel.root}>
                    <ul style={styles.panel.ul}>
                        <li style={styles.panel.ul.li}>{t("common.contact-us-page.name")}</li>
                        <li style={styles.panel.ul.li}>{t("common.contact-us-page.street")}</li>
                        <li style={styles.panel.ul.li}>{t("common.contact-us-page.city")}, {t("common.contact-us-page.province")}</li>
                        <li style={styles.panel.ul.li}>{t("common.contact-us-page.phone")}</li>
                        <li style={styles.panel.ul.li}>{t("common.contact-us-page.email")}</li>
                        <li style={styles.panel.ul.li}>
                            <ButtonToolbar>
                                <IconButton icon={<Icon icon="facebook-official" />} color="blue" circle href={t("common.contact-us.facebook")} />
                                <IconButton icon={<Icon icon="twitter" />} color="cyan" circle href={t("common.contact-us.twitter")} />
                            </ButtonToolbar>
                        </li>
                    </ul>
                </Panel>
            </Content>
        </MainLayout>
    );
};

ContactUsPage.propTypes = {};

export default ContactUsPage;