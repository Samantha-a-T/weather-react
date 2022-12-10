import "./App.css";
import Weather2 from "./Weather2"
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Search</h1>
        <Weather2 defaultCity="Calgary" />
        <footer>
          <a href="https://github.com/Samantha-a-T/weather-react">
            Open-source code by{" "}
          </a>{" "}
          Samantha Thibault
        </footer>
      </div>
    </div>
  );
}
