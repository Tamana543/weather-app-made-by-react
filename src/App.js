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
            Cooded by <a href="https://github.com/">Tamana Farzami </a>
            published in{" "}
            <a href="https://github.com/Tamana543/Weather-app-with-React/upload">
              Get Hub
            </a>
            And is hosted in <a href="/">Netlify</a>
          </p>
        </header>
      </div>
    </div>
  );
}

export default App;
