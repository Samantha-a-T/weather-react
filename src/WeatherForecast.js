import React, { useState } from "react";
import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

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
            <WeatherForecastDay data={forecast[0]} icon ={props.icon}/>
          </div>
        </div>
      </div>
    );


 }else{
  
   let latitude = props.coord.lat;
   let longitude = props.coord.lon;
   const apiKey = "a2dda52dce059eb8a14e95aaa0db6ab7";
   let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);
  
   return null;
  }  
    
}
