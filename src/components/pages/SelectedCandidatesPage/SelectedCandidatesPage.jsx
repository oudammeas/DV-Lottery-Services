import React from "react";
import { Container, Content, Footer } from "rsuite";
import MainLayout from "../../layouts/MainLayout.js/MainLayout";

const SelectedCandidatesPage = () => {

    const styles = {
        content: {
            padding: "1em",
            minHeight: "700px",
            maxWidth: "1280px",
            margin: "0 auto",
            textAlign: "start",
            justifyContent: "center",

        }
    };

    return (
        <MainLayout>
            <Content style={styles.content}>Selected Candidates Page</Content>
        </MainLayout>
    );
};

SelectedCandidatesPage.propTypes = {};

export default SelectedCandidatesPage;