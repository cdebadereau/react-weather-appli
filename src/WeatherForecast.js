import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    //once we have the city, we set loaded to false so it can make the API call
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              //Because the index is showing the forecast for 7 days, we ask to display only 5 days
              return (
                <div className="col-sm-4" key={index}>
                  <div className="forecast-day-container">
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
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

//1. Design the forecast layout in this new component
//2. Get the API url and key, and make the API call with axios
//3. Create a new state when it is loading (false by default) and move the API call inside an if statement
//4. Create a new state to store the data
//5. Update the UI with the data (temperatures, time, icon)
//6.Create a new component that includes the forecast day (a lot easier to maintain)

//React loop using a map to duplicate the forecast for each day
//useEffect: if the city change, set loaded to false
