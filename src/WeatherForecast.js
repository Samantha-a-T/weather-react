import React from "react";
import "./WeatherForecast.css"

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu </div>
          <img
            src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
            alt="weather icon"
          />
          <div className="WeatherForecast-temperature">
            {" "}
            <span className="WeatherForecast-temperature-max">19° </span>
            <span className="WeatherForecast-temperature-min"> 10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}