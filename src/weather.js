import React, { useState } from "react";
import "./App.css";
import axios from "axios";
export default function WeatherSearch(props) {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState("false");
  const [temperature, setTemperature] = useState({});
  function updateCity(event) {
    setCity(event.target.value);
  }
  function takeSubmit(event) {
    event.preventDefault();
    let apiKey = "bd3bb6534458ba51b48c49f5155745b6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }
  function displayTemperature(response) {
    setLoaded(true);
    setTemperature({
      degree: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  const form = (
    <form onSubmit={takeSubmit}>
      <input
        type="search"
        placeholder="Search Your City.."
        onChange={updateCity}
        id="text-box"
      />
      <input type="Submit" value="Search" id="search-btn" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div id="main">
          <div id="first">
            <h3>{city}</h3>
            <p>
              it is {temperature.description}
              <br />
              Humidity is: {temperature.humidity}% <br />
              Wind is :{temperature.wind}Km/H
            </p>
          </div>
          <div id="sec">
            <span>
              <img
                src={temperature.icon}
                alt={temperature.description}
                id="icon"
              />
            </span>
            <span id="two-degree">{Math.round(temperature.degree)} </span>
            <span id="two-links">
              <a href="/" alt="Faranhite Degree " id="btn">
                F
              </a>{" "}
              <a href="/" alt="Celsious Degree" id="btn">
                C
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
