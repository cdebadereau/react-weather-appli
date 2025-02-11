import React, { useState } from "react";
import axios from "axios";
import MoonLoader from "react-spinners/MoonLoader";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./MoonLoader.css";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayTemperature(response) {
    setWeatherData({
      ready: true,
      name: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.temperature.pressure,
    });
  }

  function search() {
    let apiKey = "96668c3bo8171924ab023b1atd05c04f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayTemperature);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            className="form-input w-50"
            autoFocus="on"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast />
      </div>
    );
  } else {
    search();
    return (
      <div className="loader-container">
        <MoonLoader color="#f4b700" loading size={80} speedMultiplier={1} />
      </div>
    );
  }
}
