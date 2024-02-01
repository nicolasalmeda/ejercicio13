import React from 'react';
import '../css/resultadoClima.css';

const ResultadosClima = ({ error, weatherData }) => {
  return (
    <div className='wather-container'>
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div className="weather-info">
          <h2>Clima en {weatherData.name}, {weatherData.sys.country}</h2>
          <p><strong>Temperatura:</strong> {weatherData.main.temp} °K</p>
          <p><strong>Descripción:</strong> {weatherData.weather[0].description}</p>
          <div className='temp-container'>
            <p><strong>Temperatura minima:</strong>{weatherData.main.temp_min}</p>
            <p><strong>Temperatura máxima:</strong>{weatherData.main.temp_max}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultadosClima;