import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import {
    Button,
    Container,
    Row,
    Nav,
    Navbar,
    NavDropdown,
} from "react-bootstrap";
import { CitySearch } from "./components/city_search/city_search";
import { CityTable, ICityTableProps } from "./components/city_table/city_table";
import { ICityRowProps } from "./components/city_row/city_row";

function App() {
    const cities: ICityRowProps[] = [
        {
            cityName: "London",
            weatherIcons: [
                { imgUrl: "01d" },
                { imgUrl: "02d" },
                { imgUrl: "03d" },
                { imgUrl: "04d" },
                { imgUrl: "01d" },
            ],
        },
        {
            cityName: "New York",
            weatherIcons: [
                { imgUrl: "03d" },
                { imgUrl: "04d" },
                { imgUrl: "03d" },
                { imgUrl: "02d" },
                { imgUrl: "04d" },
            ],
        },
        {
            cityName: "Paris",
            weatherIcons: [
                { imgUrl: "09d" },
                { imgUrl: "10d" },
                { imgUrl: "03d" },
                { imgUrl: "01d" },
                { imgUrl: "10d" },
            ],
        },
        {
            cityName: "Sydney",
            weatherIcons: [
                { imgUrl: "11d" },
                { imgUrl: "13d" },
                { imgUrl: "03d" },
                { imgUrl: "10d" },
                { imgUrl: "13d" },
            ],
        },
        {
            cityName: "Moscow",
            weatherIcons: [
                { imgUrl: "50d" },
                { imgUrl: "13d" },
                { imgUrl: "03d" },
                { imgUrl: "11d" },
                { imgUrl: "13d" },
            ],
        },
    ];

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
                            <NavDropdown
                                title="Dropdown"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Action
                                </NavDropdown.Item>
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
                    <CityTable cities={cities} />
                </Row>
            </Container>
        </div>
    );
}

export default App;
