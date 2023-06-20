import React, { useState } from "react";
import "./ConsultarClima.css";
import Header from "../../componentes/header/Header";
import Footer from "../../componentes/footer/Footer";
const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "e964e0ff018a6a962fd172fa8702d351";

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=es`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <Header />
    <div className="weather-app">
      <h1>Buscar Clima</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Ingrese Ciudad"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>Temperatura: {((weatherData.main.temp - 273.15).toFixed(2))} °C</p>
          <p>Humedad: {weatherData.main.humidity} %</p>
          <p> Velocidad del viento: {weatherData.wind.speed} m/s</p>
          <p>Descripcion: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default WeatherApp;