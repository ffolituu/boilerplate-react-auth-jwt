import React from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import AuthService from "../../services/Auth/AuthService";
import { Link, Navigate } from "react-router-dom";
import { getError } from "../../utils/errors/AxiosError";

export const LoginComponent: React.FC<any> = () => {
  /* Hooks
   *************************************************************/
  const [redirect, setRedirect] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [msgFlash, setMsgFlash] = React.useState<any>("");

  const { register, handleSubmit } = useForm();

  /* Functions / Events
   *************************************************************/
  const onSubmit = (data: any) => {
    AuthService.login(data.email, data.password)
      .then(() => {
        setRedirect(true);
      })
      .catch((error: any) => {
        setIsError(true);
        setMsgFlash(getError(error));
      });
  };

  /* Render
   *************************************************************/
  return (
    <>
      {redirect ? (
        <Navigate to="/" replace />
      ) : (
        <Row>
          <Col className="col-6 offset-3">
            <h2>Connexion</h2>
            <small>Veuillez vous inscrire avant de vous connecter</small>
            <br />
            <br />
            {isError && (
              <Alert variant="danger">
                <small>
                  <b>{msgFlash}</b>
                </small>
              </Alert>
            )}
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Votre adresse email"
                  {...register("email", { required: true })}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Votre mot de passe"
                  {...register("password", { required: true })}
                  required
                />
              </Form.Group>
              <Button
                variant="outline-primary"
                type="submit"
                className="btn w-100 mb-3"
              >
                Se connecter
              </Button>
              <Link to="/enregistrement" className="btn btn-outline-dark w-100">
                S'inscrire
              </Link>
            </Form>
          </Col>
        </Row>
      )}
    </>
  );
};
