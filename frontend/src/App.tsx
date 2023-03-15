import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Container, Row, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { CitySearch } from "./components/city_search/city_search";
import { CityTable } from "./components/city_table/city_table";

import Search from './components/Search'

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
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h3>Compare the weather for the next 5 days</h3>
      <Container>
        <Row>
          <CitySearch />
        </Row>
        <Row>
          <CityTable />
        </Row>
      </Container>
      {/* <Search></Search> */}
    </div>
  )
}

export default App;
