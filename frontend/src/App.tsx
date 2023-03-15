import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "react-bootstrap";
import NavBar from "./components/NavBar";
import ForecastCity from "./components/forecast/ForecastCity";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>Animation for loading...</div>
      <div>
        <input type="text"></input>
        <Button>Find weather</Button>
      </div>
      <ForecastCity />
    </div>
  );
}

export default App;
