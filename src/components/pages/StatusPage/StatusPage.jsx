import React, { useState } from "react";
import PropTypes from "prop-types";
import { Content, Panel, Button, ButtonToolbar, Form, FormGroup, FormControl, ControlLabel, HelpBlock, Radio, RadioGroup, FlexboxGrid, Col, Divider, Icon, Timeline } from "rsuite";
import MainLayout from "../../layouts/MainLayout.js/MainLayout";
import { useTranslation } from "react-i18next";
import FlexboxGridItem from "rsuite/lib/FlexboxGrid/FlexboxGridItem";
import $ from "jquery";


const StatusPage = () => {
    const { t } = useTranslation();

    const styles = {
        content: {
            padding: "5em",
            margin: "0 auto",
            textAlign: "start",
            justifyContent: "center",

        },

        pagetitle: {
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "1em",
        },

        flexboxgrid: {
            root: {
                // padding: "1em 1em 1em 1em",
            },

            item: {

            },
        },

        customTimeline: {
            marginLeft: "20px",

            dot: {
                position: "absolute",
                background: "#fff",
                top: "0",
                left: "-2px",
                border: "2px solid #ddd",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                fontSize: "18px",
                paddingTop: "9px",
                color: "#999",
                marginLeft: "-13px"
            }

        }

    };


    return (
        <MainLayout>
            <Content style={styles.content}>

                <div style={styles.pagetitle}>{t("common.status-page.page-title")}</div>

                <Timeline className="custom-timeline" style={styles.customTimeline}>
                    <Timeline.Item dot={<Icon icon="credit-card" size="2x" style={styles.customTimeline.dot} />}>
                        <p>March 1, 10:20</p>
                        <p>Your order starts processing</p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <p>March 1, 11:34</p>
                        <p>The package really waits for the company to pick up the goods</p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <p>March 1, 16:20</p>
                        <p>[Packed]</p>
                        <p>Beijing company has received the shipment</p>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon icon="plane" size="2x" />}>
                        <p>March 2, 06:12</p>
                        <p>[In transit]</p>
                        <p>Order has been shipped from Beijing to Shanghai</p>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon icon="truck" size="2x" />}>
                        <p>March 2, 09:20</p>
                        <p>[In transit]</p>
                        <p>
                            Sended from the Shanghai Container Center to the distribution center</p>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon icon="user" size="2x" />}>
                        <p>March 3, 14:20</p>
                        <p>[Delivery]</p>
                        <p>
                            Shanghai Hongkou District Company Deliverer: Mr. Li, currently sending
                            you a shipment
                        </p>
                    </Timeline.Item>
                    <Timeline.Item
                        dot={
                            <Icon
                                icon="check"
                                size="2x"
                                style={{ background: '#15b215', color: '#fff' }}
                            />
                        }
                    >
                        <p>March 3, 17:50</p>
                        <p>[Received]]</p>
                        <p>Your courier has arrived and the signer is the front desk</p>
                    </Timeline.Item>
                </Timeline>

            </Content>
        </MainLayout >
    );
};

StatusPage.propTypes = {};

export default StatusPage;
