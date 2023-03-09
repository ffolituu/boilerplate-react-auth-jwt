import React from "react";
import { Form, Button, Alert, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AuthService from "../../services/Auth/AuthService";

export const RegisterComponent: React.FC<any> = () => {
  /* States
   *************************************************************/
  const [isSave, setIsSave] = React.useState<boolean>(false);
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
      AuthService.register(email, password).then((response: any) => {
        setIsSave(true);
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  /* Render
   *******************************************************************************************/
  return (
    <>
      {isSave ? (
        <Alert variant={"success"}>
          Vous êtes bien enregistré ! <br />
          <Link to="/connexion">Se connecter</Link>
        </Alert>
      ) : (
        <Row>
          <Col className="col-6 offset-3">
            <h2>S'enregistrer</h2>
            <br />
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Entrez votre adresse email"
                  {...register("email")}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Entrez votre mot de passe"
                  {...register("password")}
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
