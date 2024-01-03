import React, { useState } from "react";
import "./wheatherApp.scss";
import CloudIcon from "./cloud.png";
import Humidity from "./humidity.png"
import Wind from "./wind.png"
import SearchBtn from "./search.png";

const WheatherApp = () => {
  const [temp, setTemp] = useState({
    celsius: "0° C",
    Name: "City Name",
    humidityCity: "0 %",
    windspeed: "0 km/h"
  });
  const [city, setCity] = useState("");
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=5861a22ea9a9ba04ace39e954aabdf76`;
  const Search = () => {
    fetch(url).then((res) => {
      return res.json();
    }).then((result) => {
      setTemp({
        celsius: result.main.temp + "° C",
        Name: result.name,
        humidityCity: result.main.humidity + " %",
        windspeed: result.wind.speed + " km/h",
      })
      console.log(result)
    })
  }
  return (

    <div className="whetherApp-container">
      <h3>Wheather APP</h3>
      <div className="search-container">
        <input className="search-box" type="text" value={city} placeholder="Enter the Name of city" onChange={(event) => {
          setCity(event.target.value)
        }} />
        <img className="search-icon" src={SearchBtn} alt="" onClick={Search} />
      </div>

      <div className="wheather-content">
        <div className="cloud-icon">
          <img src={CloudIcon} alt="" width={130} />
        </div>
        <div className="degree-celcius">{temp.celsius}</div>
        <div className="city-name">{temp.Name}</div>
      </div>

      <div className="humidity-windSpeed">
        <div className="left">
          <img src={Humidity} width={30} height={30} alt="" />
          <div className="humidity">
            <div className="percent"> {temp.humidityCity}</div>
            <div className="humidity-degree">Humidity</div>
          </div>
        </div>
        <div className="right">
          <img src={Wind} width={30} height={30} alt="" />
          <div className="wind-speed">
            <div className="km-per-hour"> {temp.windspeed}</div>
            <div className="speed">wind Speed</div>
          </div>
        </div>

      </div>
    </div>
  )
}


export default WheatherApp;