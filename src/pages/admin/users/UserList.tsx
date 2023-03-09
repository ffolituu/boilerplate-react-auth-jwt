import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import UserService from "../../../services/User/UserService";

export const UserListPage: React.FC<any> = () => {
  /* Hooks
   *******************************************************************************************/
  const [users, setUsers] = React.useState<any[]>([]);

  /* useEffect
   *******************************************************************************************/
  React.useEffect(() => {
    getUsers();
  }, []);

  /* Functions / Event
   *******************************************************************************************/
  const getUsers = () => {
    UserService.getAllUser()
      .then((response: any) => {
        setUsers(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  /* Render
   *******************************************************************************************/

  return (
    <Container className="py-4">
      <Row>
        <Col className="col-6 offset-3">
          <h3>Utilisateurs</h3>
          {users?.map((d: any) => (
            <Card key={Math.random()} className="my-3">
              <Card.Body>{d.email}</Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
