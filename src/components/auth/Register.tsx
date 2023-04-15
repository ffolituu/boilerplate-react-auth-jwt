import React from "react";
import { Form, Button, Alert, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AuthService from "@/services/Auth/AuthService";
import { getError } from "@/utils/errors/json-server-auth";
import { AxiosError } from "axios";

type FormData = {
  email: string;
  password: string;
};

export const RegisterComponent = () => {
  /* Hooks
   *************************************************************/
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [msgFlash, setMsgFlash] = React.useState<string | any>();
  const { register, handleSubmit } = useForm<FormData>();

  /* Functions / Events
   *************************************************************/
  const onSubmit = (data: FormData) => {
    AuthService.register(data.email, data.password)
      .then(() => {
        setIsSuccess(true);
      })
      .catch((error: AxiosError) => {
        setIsError(true);
        setMsgFlash(getError(error));
      });
  };

  /* Render
   *************************************************************/
  return (
    <>
      {isSuccess ? (
        <Row>
          <Col className="col-6 offset-3">
            <Alert variant={"success"}>
              Vous êtes bien enregistré ! <br />
              Veuillez désormais vous connecter en cliquant sur le lien
              ci-dessous
              <br />
              <Link to="/connexion">Se connecter</Link>
            </Alert>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col className="col-6 offset-3">
            <h2>S'enregistrer</h2>
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
                  placeholder="Entrez votre adresse email"
                  {...register("email", { required: true })}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Entrez votre mot de passe"
                  {...register("password", { required: true })}
                  required
                />
              </Form.Group>
              <Button
                variant="outline-primary"
                type="submit"
                className="btn btn-sm"
              >
                Enregistrer
              </Button>
            </Form>
          </Col>
        </Row>
      )}
    </>
  );
};
