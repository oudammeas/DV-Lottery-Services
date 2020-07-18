import React, { memo } from "react";
import { Container, Footer } from "rsuite";
import Header from "../../elements/navbar";
const MainLayout = memo((props) => {
  return (
    <Container>
      <Header />
      {props.children}
      <Footer />
    </Container>
  );
});

export default MainLayout;
