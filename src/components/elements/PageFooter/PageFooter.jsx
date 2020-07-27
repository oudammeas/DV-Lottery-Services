import React, { useState } from "react";
import PropTypes from "prop-types";
import { Divider } from "rsuite";
import {
    Footer,
    FlexboxGrid,
    Button,
    IconButton,
    ButtonGroup,
    ButtonToolbar,
    Icon,
    Col,
} from "rsuite";
import { useTranslation } from "react-i18next";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { external_link } from "../../../constant";

const menu = [
    { title: "common.navigation.home", route: "/" },
    { title: "common.navigation.register", route: "/register" },
    { title: "common.navigation.faqs", route: "/faqs" },
    { title: "common.navigation.contact-us", route: "/contact-us" },
];

const links = [
    {
        name: "common.external-link.us-embassy",
        link: external_link.US_CAMBODIA_EMBBASY,
    },
    { name: "common.external-link.usaid", link: external_link.USAID },
    {
        name: "common.external-link.advanced-op",
        link: external_link.ADVANCED_OP,
    },
    {
        name: "common.external-link.khmer-doctors",
        link: external_link.KHMER_DOCTOR,
    },
    { name: "common.external-link.cwcc", link: external_link.CWCC },
    {
        name: "common.external-link.us-dv-visa",
        link: external_link.US_DV_SERVICE,
    },
];

const PageFooter = () => {
    const { t } = useTranslation();

    const styles = {
        flexboxgrid: {
            root: {
                minHeight: "200px",
                color: "#E5E5E5",
                padding: "1em 1em 1em 1em",
            },
            item: {
                ul: {
                    textAlign: "left",
                    lh: {
                        fontWeight: "bold",
                    },
                    li: {
                        listStyleType: "none",
                        marginTop: "0.5em",
                        marginBottom: "0.5em",
                    },
                },
            },
        },

        a: {
            color: "#E5E5E5",
        },
        footer: {
            backgroundColor: " #03438c",
        },
    };

    return (
        <Footer style={styles.footer}>
            <FlexboxGrid style={styles.flexboxgrid.root}>
                <FlexboxGrid.Item
                    colspan={24}
                    componentClass={Col}
                    md={6}
                    style={styles.flexboxgrid.item}
                >
                    <ul style={styles.flexboxgrid.item.ul}>
                        <lh style={styles.flexboxgrid.item.ul.lh}>Menu</lh>
                        <Divider />
                        {menu.map((m) => (
                            <li style={styles.flexboxgrid.item.ul.li}>
                                <a href={t(m.route)} style={styles.a}>
                                    {t(m.title)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item
                    colspan={24}
                    componentClass={Col}
                    md={6}
                    style={styles.flexboxgrid.item}
                >
                    <ul style={styles.flexboxgrid.item.ul}>
                        <lh style={styles.flexboxgrid.item.ul.lh}>External Links</lh>
                        <Divider />
                        {links.map((l) => (
                            <li style={styles.flexboxgrid.item.ul.li}>
                                <a href={t(l.link)} style={styles.a}>
                                    {t(l.name)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item
                    colspan={24}
                    componentClass={Col}
                    md={6}
                    style={styles.flexboxgrid.item}
                >
                    <ul style={styles.flexboxgrid.item.ul}>
                        <lh style={styles.flexboxgrid.item.ul.lh}>Contact Us</lh>
                        <Divider />
                        <li style={styles.flexboxgrid.item.ul.li}>
                            {t("common.contact-us.name")}
                        </li>
                        <li style={styles.flexboxgrid.item.ul.li}>
                            {t("common.contact-us.street")}
                        </li>
                        <li style={styles.flexboxgrid.item.ul.li}>
                            {t("common.contact-us.city")}, {t("common.contact-us.province")}
                        </li>
                        <li style={styles.flexboxgrid.item.ul.li}>
                            {t("common.contact-us.phone")}
                        </li>
                        <li style={styles.flexboxgrid.item.ul.li}>
                            {t("common.contact-us.email")}
                        </li>
                        <li style={styles.flexboxgrid.item.ul.li}>
                            <ButtonToolbar>
                                <IconButton
                                    icon={<Icon icon="facebook-official" />}
                                    color="blue"
                                    circle
                                    href={t("common.contact-us.facebook")}
                                />
                                <IconButton
                                    icon={<Icon icon="twitter" />}
                                    color="cyan"
                                    circle
                                    href={t("common.contact-us.twitter")}
                                />
                            </ButtonToolbar>
                        </li>
                    </ul>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item
                    colspan={24}
                    componentClass={Col}
                    md={6}
                    style={styles.flexboxgrid.item}
                >
                    <ul style={styles.flexboxgrid.item.ul}>
                        <lh style={styles.flexboxgrid.item.ul.lh}>Disclaimer</lh>
                        <Divider />
                        <li style={styles.flexboxgrid.item.ul.li}>
                            {t("common.disclaimer.text")}
                        </li>
                    </ul>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </Footer>
    );
};

PageFooter.propTypes = {};

// export default PageFooter;

export default withRouter(PageFooter);
