import React, {useState} from 'react'
import axios from 'axios'
import '../css/climaContainer.css'
import Formulario from './Formulario';
import ResultadosClima from './ResultadoClima';

const ClimaContainer = () => {
  const [location, setLocation] = useState('');
  const [country, setCountry] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const VITE_REACT_APP_API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

  const consultarClima = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},${country}&appid=${VITE_REACT_APP_API_KEY}&lang=es`);
      // const response = await axios.get(`api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${VITE_REACT_APP_API_KEY}&lang=es`)
      console.log(VITE_REACT_APP_API_KEY);
      console.log(response.data);
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError('No se encontraron datos para la ubicación ingresada.');
    }
  };

  return (
    <div className='clima-container'>
      <Formulario 
        location={location}
        country={country}
        onLocationChange={setLocation}
        onCountryChange={setCountry}
        onConsultarClima={consultarClima}
      />
      <ResultadosClima 
        error={error} 
        weatherData={weatherData} 
      />
    </div>
  )
}

export default ClimaContainer