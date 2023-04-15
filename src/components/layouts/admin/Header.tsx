import AuthService from "@/services/Auth/AuthService";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export const HeaderComponent = () => {
  /* Hooks
   *******************************************************************************************/
  let navigate = useNavigate();

  /* Functions / Events
   *******************************************************************************************/
  const handleLogout = () => {
    AuthService.logout();
    return navigate("/connexion");
  };

  /* Render
   *******************************************************************************************/
  return (
    <Navbar bg="primary" variant="dark">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand>{import.meta.env.VITE_APP_TITLE}</Navbar.Brand>
        </Link>
        <Nav className="ms-auto">
          <Link className="nav-link" to="/utilisateurs">
            Utilisateurs
          </Link>
          <Link className="nav-link" to="/taches">
            Tâches
          </Link>
          <Nav.Link href="#" onClick={handleLogout}>
            Déconnexion
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
