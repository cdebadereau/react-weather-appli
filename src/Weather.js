import React, { useState } from "react";
import axios from "axios";
import MoonLoader from "react-spinners/MoonLoader";
import FormattedDate from "./FormattedDate";
import "./MoonLoader.css";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayTemperature(response) {
    setWeatherData({
      ready: true,
      name: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.temperature.pressure,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <input
            type="search"
            placeholder="Enter a city"
            className="form-input w-50"
            autoFocus="on"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>

        <h1>{weatherData.name}</h1>
        <div className="weather-info">
          <div className="row">
            <div className="col-7">
              <ul className="general-info">
                <li>
                  <FormattedDate data={weatherData.date} />
                </li>
                <li className="text-capitalize">{weatherData.description}</li>
              </ul>
            </div>
            <div className="col-5">
              <img src={weatherData.icon} alt={weatherData.description} />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>{" "}
              <span className="unit">°C | °F</span>
            </div>
          </div>
          <ul className="weather-data d-flex flex-row justify-content-around">
            <div>
              <li>Humidity</li>
              <li>Wind</li>
              <li>Pressure</li>
            </div>
            <div>
              <li>{weatherData.humidity} %</li>
              <li>{weatherData.wind} km/h</li>
              <li>{weatherData.pressure} mbar</li>
            </div>
          </ul>
        </div>
      </div>
    );
  } else {
    let apiKey = "96668c3bo8171924ab023b1atd05c04f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(displayTemperature);
    return <MoonLoader color="#f4b700" loading size={80} speedMultiplier={1} />;
  }
}
