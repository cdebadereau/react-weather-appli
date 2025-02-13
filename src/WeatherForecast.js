import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data.daily);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="forecast-day-container">
              <WeatherForecastDay data={forecast[0]} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "96668c3bo8171924ab023b1atd05c04f";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}

//1. Design the forecast layout
//2. Make the API call
//3. Create a new state when it is loading (false by default) and move the API call inside an if statement
//4. Create a new state to store the data
//5. Update the UI with the data (temperatures, time, icon)
//6.Create a new component that includes the forecast day (a lot easier to maintain)
