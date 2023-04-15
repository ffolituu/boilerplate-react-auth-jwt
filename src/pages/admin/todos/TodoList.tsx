import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import TodoService from "@/services/Todo/TodoService";
import { TodoType } from "@/types/TodoType";
import { AxiosError, AxiosResponse } from "axios";

export const TodoListPage = () => {
  /* Hooks
   *******************************************************************************************/
  const [todos, setTodos] = React.useState<TodoType[]>([]);

  /* useEffect
   *******************************************************************************************/
  React.useEffect(() => {
    getTodos();
  }, []);

  /* Functions / Event
   *******************************************************************************************/
  const getTodos = () => {
    TodoService.getAllTodo()
      .then((response: AxiosResponse) => {
        setTodos(response.data);
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
          <h3>Tâches</h3>
          {todos?.map((todo: TodoType) => (
            <Card key={Math.random()} className="my-3">
              <Card.Body>{todo.name}</Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
