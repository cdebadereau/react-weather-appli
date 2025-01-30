import React, { useState } from "react";
import axios from "axios";
import "./Meteo.css";

export default function Meteo() {
  const [city, setCity] = useState(" ");
  const [loaded, setLoaded] = useState(false);

  function displayTemperature(response) {
    console.log(response.data.temperature.current);
    setLoaded(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Meteo">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Inserisci una città"
            className="input-formulario w-50"
            autoFocus="on"
            onChange={updateCity}
          />
          <input type="submit" value="Cerca" className="bottone-cerca" />
        </form>

        <h1>{city}</h1>
        <div className="meteo-info">
          <div className="row">
            <div className="col-7">
              <ul className="info-generali">
                <li>Martedì 28 Gennaio, 16:00</li>
                <li>Sereno</li>
              </ul>
            </div>
            <div className="col-5">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Sereno"
              />
              <span className="temperatura">10</span>{" "}
              <span className="unita">°C | °F</span>
            </div>
          </div>
          <ul className="dati-meteo d-flex flex-row justify-content-around">
            <div>
              <li>Precipitazioni</li>
              <li>Umidità</li>
              <li>Venti</li>
            </div>
            <div>
              <li>70%</li>
              <li>80%</li>
              <li>30km/h</li>
            </div>
          </ul>
        </div>
      </div>
    );
  } else {
    let apiKey = "96668c3bo8171924ab023b1atd05c04f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayTemperature);
    return "loaded";
  }
}
