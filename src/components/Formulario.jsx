import React from 'react'
import '../css/formulario.css'

const Formulario = ({location,country,onLocationChange,onCountryChange, onConsultarClima}) => {
  return (
    <div className='formulario-container'>
      <div className='label-container'>
        <div>
          <label htmlFor="location">Ubicación:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
            />
        </div>
        <div>
          <label htmlFor="country">País:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => onCountryChange(e.target.value)}
            />
        </div>
      </div>
      <button onClick={onConsultarClima}>Consultar Clima</button>
    </div>
  )
}

export default Formulario