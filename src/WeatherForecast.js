import React, { useState } from "react";
import "./WeatherForecast.css"
import axios from "axios";


export default function WeatherForecast(props) {
 let [ready, setReady]=useState(false);
 let [forecast, setForecast]=useState(null)

 function handleResponse(response){
setForecast(response.data.daily);
setReady(true);
  }
  if (ready){

    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{forecast[0].dt} </div>
            <img
              src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
              alt="weather icon"
              className="WeatherForecast-icon"
            />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">
                {forecast[0].temp.max}°
              </span>
              <span className="WeatherForecast-temperature-min">
                {" "}
                {forecast[0].temp.min}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );


 }else{
  
   let latitude = props.coord.lat;
   let longitude = props.coord.lon;
   const apiKey = "cecd230221b0d2dca5201b2f2ec509a6";
   let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);
  
   return null;
  }  
    
}
