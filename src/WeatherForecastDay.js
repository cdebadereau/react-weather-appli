import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemperature = Math.round(props.data.temperature.maximum);
    return `${maxTemperature}°`;
  }

  function minTemperature() {
    let minTemperature = Math.round(props.data.temperature.minimum);
    return `${minTemperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={30} />
      <div className="forecast-temperatures mt-3">
        <span className="forecast-temperature-max">{maxTemperature()}</span>{" "}
        <span className="forecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}

//1. Import the UI in this new component
//2. The response of the API call is no longer in the forecast state, but in the props.data (data is the props given to the component in WeatherForecast.js) DON'T FORGET TO IMPORT ALSO THE WEATHERICON COMPONENT IN THIS NEW COMPONENT. Change every data with props.data
//3. Create a new function for each temperature to rounded it and call the fonction inside the UI
//4. Create a new function to take care of the date and indicate the days

//5. React loop using a map to duplicate the forecast for each day in WeatherForecast.js
