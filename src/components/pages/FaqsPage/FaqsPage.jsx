import React from "react";
import { Container, Content, Footer, Panel, PanelGroup } from "rsuite";
import MainLayout from "../../layouts/MainLayout.js/MainLayout";

const FaqsPage = () => {

    const styles = {
        content: {
            padding: "1em",
            minHeight: "700px",
            maxWidth: "70%",
            // margin: "0 auto",
            alignContet: "center",
            textAlign: "start",
            justifyContent: "center",

        },

        panelGroup: {
            root: {
                display: 'inline-block',
                width: "100%",
                height: "auto",
                margin: "1em",
                padding: "1em"
            }

        },
    };

    return (
        <MainLayout>
            <Content style={styles.content}>
                <PanelGroup accordion bordered style={styles.panelGroup.root}>
                    <Panel header="Q: What is the Diversity Lottery or DV Lottery program?" defaultExpanded>
                        <p>A: What is the Diversity Lottery or DV Lottery program?</p>
                    </Panel>
                    <Panel header="Q: Who is eligible for the DV Lottery program?">
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