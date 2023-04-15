import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RegisterComponent } from "@/components/auth/Register";

export const RegisterPage = () => {
  /* Render
   *******************************************************************************************/
  return (
    <Container>
      <Row>
        <Col>
          <RegisterComponent />
        </Col>
      </Row>
    </Container>
  );
};
