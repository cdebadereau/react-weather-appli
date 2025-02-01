import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Florence" />
        <small>
          This project was coded by Cyrielle de Badereau de Saint Martin and is
          open-sourced on{" "}
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
