import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const HomePage: React.FC<any> = () => {
  /* Render
   *******************************************************************************************/
  return (
    <Container className="py-4">
      <Row>
        <Col>
          <h3>Tableau de bord</h3>
        </Col>
      </Row>
    </Container>
  );
};
