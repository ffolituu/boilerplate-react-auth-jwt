import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import AuthService from "../../services/Auth/AuthService";
import { Link, Navigate } from "react-router-dom";

export const LoginComponent: React.FC<any> = () => {
  /* States
   *************************************************************/
  const [redirect, SetRedirect] = React.useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* useEffect
   *******************************************************************************************/
  React.useEffect(() => {}, []);

  /* Function / Events
   *******************************************************************************************/
  const onSubmit = (data: any) => {
    // Validation Control by field

    // API LOGIN
    login(data.email, data.password);
  };

  const login = (email: string, password: string) => {
    try {
      AuthService.login(email, password).then((response: any) => {
        // Check response that's correct
        // is True, Redirect to HomePage (PageProtected)
        SetRedirect(true);
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  /* Render
   *******************************************************************************************/
  return (
    <>
      {redirect ? (
        <Navigate to="/" replace />
      ) : (
        <Row>
          <Col className="col-6 offset-3">
            <h2>Connexion</h2>
            <small>React Auth JWT</small>
            <br />
            <br />
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Votre adresse email"
                  {...register("email")}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Votre mot de passe"
                  {...register("password")}
                />
              </Form.Group>
              <Button
                variant="outline-primary"
                type="submit"
                className="btn btn-sm"
              >
                Se connecter
              </Button>
              <br />
              <br />
              <Link to="/enregistrement">S'enregistrer</Link>
            </Form>
          </Col>
        </Row>
      )}
    </>
  );
};
