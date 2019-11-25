import React from "react";
import "./App.scss";
import "weather-icons/css/weather-icons.css";
import WeatherWidget from "./components/WeatherWidget";

const App: React.FC = () => {
  return (
    <div className="App">
      <WeatherWidget />
    </div>
  );
};

export default App;
