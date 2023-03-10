import "./App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div>Animation for loading...</div>
      <div>
        <input type="text"></input>
        <Button>Find weather</Button>
      </div>
      <div>Weather for today, for tomorrow, day after tomorrow ...</div>
    </div>
  );
}

export default App;
