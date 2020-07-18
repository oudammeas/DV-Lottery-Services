import React, { memo } from "react";
import { Container } from "rsuite";
import PageHeader from "../../elements/PageHeader";
const MainLayout = memo((props) => {
  return (
    <Container>
      <PageHeader />
      {props.children}
      {/* <PageFooter /> */}
    </Container>
  );
});

export default MainLayout;
