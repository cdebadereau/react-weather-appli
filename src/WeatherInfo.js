import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.name}</h1>
      <div className="weather-info">
        <div className="row">
          <div className="col-7">
            <ul className="general-info">
              <li>
                <FormattedDate data={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </div>
          <div className="col-5">
            <img src={props.data.icon} alt={props.data.description} />
            <span className="temperature">
              {Math.round(props.data.temperature)}
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
            <li>{props.data.humidity} %</li>
            <li>{props.data.wind} km/h</li>
            <li>{props.data.pressure} mbar</li>
          </div>
        </ul>
      </div>
    </div>
  );
}
