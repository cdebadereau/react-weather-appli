import React from "react";
import Meteo from "./Meteo";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Meteo />
        <small>
          Questo progetto è stato sviluppato da Cyrielle de Badereau de Saint
          Martin ed è disponibile su{" "}
          <a
            href="https://github.com/cdebadereau/react-weather-appli"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github.
          </a>
        </small>
      </div>
    </div>
  );
}
