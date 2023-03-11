import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import TodoService from "@/services/Todo/TodoService";

export const TodoListPage: React.FC<any> = () => {
  /* Hooks
   *******************************************************************************************/
  const [todos, setTodos] = React.useState<any[]>([]);

  /* useEffect
   *******************************************************************************************/
  React.useEffect(() => {
    getTodos();
  }, []);

  /* Functions / Event
   *******************************************************************************************/
  const getTodos = () => {
    TodoService.getAllTodo()
      .then((response: any) => {
        setTodos(response.data);
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
          <h3>Tâches</h3>
          {todos?.map((d: any) => (
            <Card key={Math.random()} className="my-3">
              <Card.Body>{d.name}</Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
