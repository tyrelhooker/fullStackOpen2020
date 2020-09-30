import React from 'react';
// import Weather from './Weather';

const Country = ({ countryData, setClicked, clicked, setCity, weather, handleCity}) => {

  const handleClick = () => 
    setClicked(false);


  // let weather2 = weather.JSON.parse();
  console.log(weather.filter(item => console.log(item.current)));

 

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

          <button onClick={() => handleClick()}>
            Click To return 
          </button>
          {handleCity(item.capital)}


        </div>
      )}
      {/* <div>
        {weather
          .filter(status => status.sub
          .filter(another => another.current)
          .map((item, index) => 
            <div key={index}>
              {item.temperature}
            </div>
          )
        }
      </div> */}
    </>
  )
}

export default Country;