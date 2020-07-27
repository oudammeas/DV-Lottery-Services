import React from "react";
import { Container, Content, Footer } from "rsuite";
import MainLayout from "../../layouts/MainLayout.js/MainLayout";

const NewCandidatesPage = () => {

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
            <Content style={styles.content}>New Candidates Page</Content>
        </MainLayout>
    );
};

NewCandidatesPage.propTypes = {};

export default NewCandidatesPage;