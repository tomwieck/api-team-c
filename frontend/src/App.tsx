import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import {
  Container,
  Row,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { CitySearch } from "./components/city_search/city_search";
import { CityTable } from "./components/city_table/city_table";
import { useEffect, useState } from "react";
import { IForecastCity } from "./types/forecast_frontend.types";

import { API_CITY_FORECAST_FOR_5_DAYS } from "./config/config";
import { get_city_data } from "./helpers/get_city_data";

function App() {
  const [cityForecasts, setCityForecasts] = useState<IForecastCity[]>([]);
  const [cityId, setCityId] = useState<string>();
  //for testing
  const [cityIndex, setCityIndex] = useState(0);
  const cityIds = ["Lon-151", "Lis-1038", "Bru450", "Mad-440", "Ams452"];

  const handleTestButtonClick = () => {
    setCityIndex(cityIndex + 1);
    if (cityIndex < 5) {
      setCityId(cityIds[cityIndex]);
    }
    console.log("cityIndex", cityIndex, cityIds);
    console.log("cityId", cityId);
  };
  // const { data, error, isFetching, status } = useFetchData<IForecastCity>(
  //   url,
  //   cityId
  // );

  useEffect(() => {
    const fetchData = async () => {
      const url = `${API_CITY_FORECAST_FOR_5_DAYS}?id=${cityId}`;

      try {
        const response = await fetch(url);
        // console.log("response", response);
        // setIsFetching(false);
        if (response.status === 200) {
          const json = await response.json();
          // TODO refactor
          const res = get_city_data(json);
          if (res) setCityForecasts([...cityForecasts, res]);
        }
        // setStatus(response.status);
      } catch (e: unknown) {
        // setIsFetching(false);
        // if (isError(e)) {
        //   setError(e.message);
      }
    };
    if (cityId) {
      fetchData();
    }
  }, [cityId]);

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
        <Button onClick={e => handleTestButtonClick()}>
          Test Fetching Forecast
        </Button>
        <p>Current id "{cityId}"</p>
        <p>Using hardcoded cityIds "{cityIds.join(", ")}"</p>

        <Row>
          <CityTable cityForecasts={cityForecasts} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
