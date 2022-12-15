import "./App.css";
import Weather from "./Weather"
export default function App() {
  return (
    <div className="App">
      <div className="container">
   
        <Weather defaultCity="Calgary" />
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
