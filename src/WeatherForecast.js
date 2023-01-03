import React, { useState, useEffect } from "react";
import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
 let [ready, setReady]=useState(false);
 let [forecast, setForecast]=useState(null)

useEffect(() => {
    setReady(false);
}, [props.coord]);

 function handleResponse(response){
setForecast(response.data.daily);
setReady(true);
  }

  if (ready){ 

    return (
      <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function (dailyForecast, index){
              if (index < 5){
                return(
                <div className="col" key ={index}>
            <WeatherForecastDay data={dailyForecast}/>
          </div>
              );

            }else{
                return null;
            }
        })}
          
        </div>
      </div>
    );


 }else{
  
   let latitude = props.coord.lat;
   let longitude = props.coord.lon;
   const apiKey = "667d9f573c8af4c33457be5d561a9148";
   let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);
  
   return null;
  }  
    
}
