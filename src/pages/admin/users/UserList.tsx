import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import UserService from "@/services/User/UserService";
import { UserType } from "@/types/UserType";
import { AxiosError, AxiosResponse } from "axios";

export const UserListPage = () => {
  /* Hooks
   *******************************************************************************************/
  const [users, setUsers] = React.useState<UserType[]>([]);

  /* useEffect
   *******************************************************************************************/
  React.useEffect(() => {
    getUsers();
  }, []);

  /* Functions / Event
   *******************************************************************************************/
  const getUsers = () => {
    UserService.getAllUser()
      .then((response: AxiosResponse) => {
        setUsers(response.data);
      })
      .catch((error: AxiosError) => {
        console.log(error.message);
      });
  };

  /* Render
   *******************************************************************************************/
  return (
    <Container className="py-4">
      <Row>
        <Col className="col-6 offset-3">
          <h3>Utilisateurs</h3>
          {users?.map((user: UserType) => (
            <Card key={Math.random()} className="my-3">
              <Card.Body>{user?.email}</Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
