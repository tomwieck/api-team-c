import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Container, Row, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { CityTable } from "./components/city_table/city_table";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">API Team C</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h1>
        Compare the weather for the next 5 days
      </h1>
      <Container>
        <Row>
          <CityTable />
        </Row>
      </Container>
    </div>
  );
}

export default App;
