import React from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { getError } from "@/utils/errors/json-server-auth";
import AuthService from "@/services/Auth/AuthService";
import { AxiosError } from "axios";

type FormData = {
  email: string;
  password: string;
};

export const LoginComponent = () => {
  /* Hooks / States
   *************************************************************/
  const [isError, setIsError] = React.useState<boolean>(false);
  const [msgFlash, setMsgFlash] = React.useState<string | any>();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormData>();

  /* Functions / Events
   *************************************************************/
  const onSubmit = (data: FormData) => {
    AuthService.login(data.email, data.password)
      .then(() => {
        navigate("/");
      })
      .catch((error: AxiosError) => {
        setIsError(true);
        setMsgFlash(getError(error));
      });
  };

  /* Render
   *************************************************************/
  return (
    <Row>
      <Col className="col-6 offset-3">
        <h2>Connexion</h2>
        <small>Veuillez vous inscrire avant de vous connecter</small>
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
  );
};
