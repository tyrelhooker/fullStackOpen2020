import React from 'react';
import Weather from './Weather';

const Country = ({ countryData, setClicked, clicked, setCity, weather, handleCity, city }) => {
  
  console.log('weather results: ', weather)

  const handleClick = () => 
    setClicked(false);

  return (
    <>
      {countryData.map(item => 
        <div key={item.numericCode}>

          <h3>{item.name}</h3>
          <p>Capital: {item.capital}</p>
          <p>Population: {item.population}</p>

          <div key={item.numericCode}> Languages: 
            {item.languages.map(lang =>
              <li key={lang.name}>{lang.name}</li>)}
          </div>

          <img src={item.flag} alt={`${item.name}'s flag`} width="100" height="100"/>

          <br></br>
          <br></br>

          <Weather 
            capital={item.capital} 
            // fetchWeather={handleCity} 
            // weather={weather} 
            setCity={setCity}
            city={city} 
          / >
          
          {clicked 
          ?
          <button onClick={() => handleClick()}>
            Click To return 
          </button>
          : <p></p>}
        </div>
      )}
      
    </>
  )
}

export default Country;