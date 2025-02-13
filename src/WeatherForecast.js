import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  console.log(props);

  let apiKey = "96668c3bo8171924ab023b1atd05c04f";
  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day-container">
            <div className="forecast-day">Tue</div>

            <WeatherIcon code="rain-day" size={30} />
            <div className="forecast-temperatures mt-3">
              <span className="forecast-temperature-max">19°</span>{" "}
              <span className="forecast-temperature-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
