import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LoginComponent } from "@/components/auth/Login";

export const LoginPage: React.FC<any> = () => {
  /* Render
   *******************************************************************************************/
  return (
    <Container>
      <Row>
        <Col>
          <LoginComponent />
        </Col>
      </Row>
    </Container>
  );
};
