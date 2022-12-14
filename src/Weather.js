import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast"
import "./Weather.css";
export default function Weather(props) {

  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity]= useState(props.defaultCity)
  
  function handleResponse(response) {
    setWeatherData({
      ready:true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      coord: response.data.coord,
    });
  }
function search(){
 const apiKey = "a2dda52dce059eb8a14e95aaa0db6ab7";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse);
}

  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  function handleCityChange(event){
setCity(event.target.value)
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn w-100 button"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coord={weatherData.coord}/>
      </div>
    );
  } else {
   search();
    return "Loading data...";
  }
}
