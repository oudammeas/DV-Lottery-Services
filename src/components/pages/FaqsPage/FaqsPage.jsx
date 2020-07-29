import React from "react";
import { Container, Content, Footer, Panel, PanelGroup } from "rsuite";
import MainLayout from "../../layouts/MainLayout.js/MainLayout";

const FaqsPage = () => {

    const styles = {
        content: {
            padding: "5em",
            minHeight: "40em",
            maxWidth: "100%",
            margin: "0 auto",
            textAlign: "start",

        },

        panelGroup: {
            root: {
                minWidth: "10em",

            }

        },
    };

    return (
        <MainLayout>
            <Content style={styles.content}>
                <PanelGroup accordion bordered style={styles.panelGroup.root}>
                    <Panel header="Q: What is the Diversity Lottery or DV Lottery program?">
                        <p>A: What is the Diversity Lottery or DV Lottery program?</p>
                    </Panel>
                    <Panel header="Q: Who is eligible for the DV Lottery program?" >
                        <p>A: Who is eligible for the DV Lottery program? Who is eligible for the DV Lottery program? Who is eligible for the DV Lottery program?</p>
                    </Panel>
                    <Panel header="Q: What is the cost for participating in the DV Lottery program?">
                        <p>A: What is the cost for participating in the DV Lottery program?</p>
                    </Panel>
                </PanelGroup>
            </Content>
        </MainLayout>
    );
};

FaqsPage.propTypes = {};

export default FaqsPage;