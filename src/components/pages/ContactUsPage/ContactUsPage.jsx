import React from "react";
import { Container, Content, Footer, FlexboxGrid, Button, IconButton, ButtonGroup, ButtonToolbar, Icon, Col } from "rsuite";
import MainLayout from "../../layouts/MainLayout.js/MainLayout";
import { useTranslation } from "react-i18next";

const ContactUsPage = () => {
    const { t } = useTranslation();

    const styles = {
        content: {
            padding: "1em",
            minHeight: "700px",
            // maxWidth: "1280px",
            // margin: "0 auto",
            // textAlign: "center",
            // justifyContent: "center"

        },

        flexboxgrid: {
            root: {
                minHeight: "200px",
                backgroundColor: "inherite",
                color: "inherite",
                padding: "1em 1em 1em 1em",
                justifyContent: "center",
            },
            item: {
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
        },

        a: {
            color: "#E5E5E5",
        }

    };
    return (
        <MainLayout>
            <Content style={styles.content}>
                <FlexboxGrid style={styles.flexboxgrid.root}>
                    <FlexboxGrid.Item colspan={24} componentClass={Col} md={6} style={styles.flexboxgrid.item}>
                        <ul style={styles.flexboxgrid.item.ul}>
                            <lh style={styles.flexboxgrid.item.ul.lh}>Contact Us</lh>
                            <li style={styles.flexboxgrid.item.ul.li}>{t("common.contact-us.name")}</li>
                            <li style={styles.flexboxgrid.item.ul.li}>{t("common.contact-us.street")}</li>
                            <li style={styles.flexboxgrid.item.ul.li}>{t("common.contact-us.city")}, {t("common.contact-us.province")}</li>
                            <li style={styles.flexboxgrid.item.ul.li}>{t("common.contact-us.phone")}</li>
                            <li style={styles.flexboxgrid.item.ul.li}>{t("common.contact-us.email")}</li>
                            <li style={styles.flexboxgrid.item.ul.li}>
                                <ButtonToolbar>
                                    <IconButton icon={<Icon icon="facebook-official" />} color="blue" circle href={t("common.contact-us.facebook")} />
                                    <IconButton icon={<Icon icon="twitter" />} color="cyan" circle href={t("common.contact-us.twitter")} />
                                </ButtonToolbar>
                            </li>
                        </ul>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Content>
        </MainLayout>
    );
};

ContactUsPage.propTypes = {};

export default ContactUsPage;