import React from 'react';
import Weather from './Weather';

const Country = ({ countryData, setClicked, clicked, setCity, weather, handleCity}) => {
  
  console.log('weather results: ', weather)

  // const handleClick = () => 
  //   setClicked(false);


  // let weather2 = weather.JSON.parse();
  // console.log('filtered?', weather.filter(item => item["current"]));

 

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

          {/* <button onClick={() => handleClick()}>
            Click To return 
          </button> */}
          <Weather capital={item.capital} fetchWeather={handleCity} weather={weather} />
        </div>
      )}
      
    </>
  )
}

export default Country;