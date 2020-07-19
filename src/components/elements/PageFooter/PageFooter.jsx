import React, { useState } from "react";
import PropTypes from "prop-types";
import { FlexboxGrid } from "rsuite";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { observer, inject } from "mobx-react";


const menu = [
    { title: "common.navigation.home", route: "/" },
    { title: "common.navigation.process", route: "/" },
    { title: "common.navigation.register", route: "/register-page" },
    { title: "common.navigation.faq", route: "/" },
    { title: "common.navigation.contact-us", route: "/" },
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
        navbar: {
            root: {},
            header: {
                padding: "1em",
                height: "5em",
                width: "100%",
                alignContent: "center",
                padding: "2em",
                backgroundColor: "inherite",
                justifyContent: "left",
            },
            body: {
                paddingLeft: "3em",
            },
        },
    };

    return (
        <div className="show-grid">
            <FlexboxGrid>
                <FlexboxGrid.Item colspan={6}>
                    <ul>
                        <lh>Menu</lh>
                        {menu.map((m) => (
                            <li>
                                <a href={t(m.route)} >{t(m.title)}</a>
                            </li>
                        ))}
                    </ul>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={6}>
                    <ul>
                        <lh>External Links</lh>
                        {links.map((l) => (
                            <li>
                                <a href={t(l.link)} >{t(l.name)}</a>
                            </li>
                        ))}
                    </ul>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={6}>
                    <ul>
                        <lh>Contact Us</lh>
                        <li>{t("common.contact-us.name")}</li>
                        <li>{t("common.contact-us.street")}</li>
                        <li>{t("common.contact-us.city")}, {t("common.contact-us.province")}</li>
                        <li>{t("common.contact-us.phone")}</li>
                        <li>{t("common.contact-us.email")}</li>
                    </ul>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={6}>
                    <ul>
                        <lh>Disclaimer</lh>
                        <li>{t("common.disclaimer.text")}</li>
                    </ul>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </div>
    );

}

PageFooter.propTypes = {};

// export default PageFooter;

export default withRouter(inject("commonStore")(observer(PageFooter)));