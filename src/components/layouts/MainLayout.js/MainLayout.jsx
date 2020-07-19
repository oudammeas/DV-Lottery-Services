import React, { memo } from "react";
import { Container } from "rsuite";
import PageHeader from "../../elements/PageHeader";
import PageFooter from "../../elements/PageFooter";
const MainLayout = memo((props) => {
  return (
    <Container>
      <PageHeader />
      {props.children}
      <PageFooter />
    </Container>
  );
});

export default MainLayout;
