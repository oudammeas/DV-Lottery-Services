import React from "react";
import { Container, Content, Footer } from "rsuite";
import MainLayout from "../../layouts/MainLayout.js/MainLayout";

const FaqsPage = () => {

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
            <Content style={styles.content}>FAQs Page</Content>
        </MainLayout>
    );
};

FaqsPage.propTypes = {};

export default FaqsPage;