import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day-container">
            <div className="forecast-day">Tue</div>

            <WeatherIcon code="rain-day" size={30} />
            <div className="forecast-temperatures">
              <span className="forecast-temperature-max">19°</span>{" "}
              <span className="forecast-temperature-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
