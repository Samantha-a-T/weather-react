import React from "react";

export default function WeatherForecastDay(props){

    return (
        <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">
        {props.data.dt} </div>
        <img
          src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt="weather icon"
          className="WeatherForecast-icon"
        />
        <div className="WeatherForecast-temperature">
          <span className="WeatherForecast-temperature-max">
            {props.data.temp.max}°
          </span>
          <span className="WeatherForecast-temperature-min">
            {" "}
            {props.data.temp.min}°
          </span>
        </div>
      </div>
    );
}