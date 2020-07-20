import React, { useState } from "react";
import PropTypes from "prop-types";
import { Footer, FlexboxGrid, Button, IconButton, ButtonGroup, ButtonToolbar, Icon, Col } from "rsuite";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { observer, inject } from "mobx-react";


const menu = [
    { title: "common.navigation.home", route: "/home" },
    { title: "common.navigation.process", route: "/process" },
    { title: "common.navigation.register", route: "/register-page" },
    { title: "common.navigation.faqs", route: "/faqs" },
    { title: "common.navigation.contact-us", route: "/contact-us" },
];

const links = [
    { name: "common.external-link.us-embassy", link: "https://kh.usembassy.gov/" },
    { name: "common.external-link.usaid", link: "https://kh.usembassy.gov/" },
    { name: "common.external-link.advanced-op", link: "https://kh.usembassy.gov/" },
    { name: "common.external-link.khmer-doctors", link: "https://kh.usembassy.gov/" },
    { name: "common.external-link.cwcc", link: "https://kh.usembassy.gov/" },
    { name: "common.external-link.us-dv-visa", link: "https://kh.usembassy.gov/" },
];

const PageFooter = ({ commonStore }) => {

    const { t } = useTranslation();

    const styles = {
        flexboxgrid: {
            root: {
                backgroundColor: "#003875",
                color: "#E5E5E5",
                padding: "1em"
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
        <Footer>
            <FlexboxGrid style={styles.flexboxgrid.root}>
                <FlexboxGrid.Item colspan={24} componentClass={Col} md={6} style={styles.flexboxgrid.item}>
                    <ul style={styles.flexboxgrid.item.ul}>
                        <lh style={styles.flexboxgrid.item.ul.lh}>Menu</lh>
                        {menu.map((m) => (
                            <li style={styles.flexboxgrid.item.ul.li}>
                                <a href={t(m.route)} style={styles.a}>{t(m.title)}</a>
                            </li>
                        ))}
                    </ul>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={24} componentClass={Col} md={6} style={styles.flexboxgrid.item}>
                    <ul style={styles.flexboxgrid.item.ul}>
                        <lh style={styles.flexboxgrid.item.ul.lh}>External Links</lh>
                        {links.map((l) => (
                            <li style={styles.flexboxgrid.item.ul.li}>
                                <a href={t(l.link)} style={styles.a}>{t(l.name)}</a>
                            </li>
                        ))}
                    </ul>
                </FlexboxGrid.Item>
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
                <FlexboxGrid.Item colspan={24} componentClass={Col} md={6} style={styles.flexboxgrid.item}>
                    <ul style={styles.flexboxgrid.item.ul}>
                        <lh style={styles.flexboxgrid.item.ul.lh}>Disclaimer</lh>
                        <li style={styles.flexboxgrid.item.ul.li}>{t("common.disclaimer.text")}</li>
                    </ul>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </Footer>
    );
}

PageFooter.propTypes = {};

// export default PageFooter;

export default withRouter(inject("commonStore")(observer(PageFooter)));