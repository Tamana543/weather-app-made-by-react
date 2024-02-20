import React from "react";
import Weather from "./weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="container">
        <header className="App-header">
          <h1>Weather App </h1>
          <Weather />
          <p id="text">
            Cooded by <a href="https://github.com/Tamana543">Tamana Farzami </a>
            published in{" "}
            <a href="https://github.com/Tamana543/weather-app-made-by-react/settings">
              Get Hub
            </a>
            And is hosted in{" "}
            <a href="https://app.netlify.com/sites/endearing-hotteok-a63f6d/overview">
              Netlify
            </a>
          </p>
        </header>
      </div>
    </div>
  );
}

export default App;
