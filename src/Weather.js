import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [description, setDescription] = useState();
  let [temperature, setTemperature] = useState();
  let [humidity, setHumidity] = useState();
  let [wind, setWind] = useState();
  let [icon, setIcon] = useState();
  let [city, setCity] = useState();
  let [loaded, setLoaded] = useState(false);

  function weatherSearch(response) {
    setLoaded(true);
    setDescription(response.data.weather[0].description);
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  function axiosSearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cecd230221b0d2dca5201b2f2ec509a6&units=metric`;
    axios.get(apiUrl).then(weatherSearch);
  }

  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  let form = (
    <form className="Search" onSubmit={axiosSearch}>
      <input type="search" placeholder="Type a city..." onChange={changeCity} />
      <input type="submit" />
    </form>
  );

  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <ul>
          <li> {description} </li>
          <li> The temperature is currently {Math.round(temperature)}°C </li>
          <li> The humidity is currently {Math.round(humidity)}% </li>
          <li> The wind is currently {Math.round(wind)}km/h </li>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
          />
        </ul>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
