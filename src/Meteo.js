import React from "react";
import "./Meteo.css";

export default function Meteo() {
  return (
    <div className="Meteo">
      <form>
        <input
          type="search"
          placeholder="Inserisci una città"
          className="input-formulario w-50"
          autoFocus="on"
        />
        <input type="submit" value="Cerca" className="bottone-cerca" />
      </form>

      <h1>Firenze</h1>
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
        <ul>
          <li>Precipitazioni: 70% </li>
          <li>Umidità: 80%</li>
          <li>Venti: 30km/h</li>
        </ul>
      </div>
    </div>
  );
}
