import React from 'react';

const Country = ({ countryData, setClicked, clicked}) => {

  const handleClick = () => 
    setClicked(false);

  return (
  
    countryData.map(item => 
      <div key={item.alpha3code}>
        
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

      </div>
    )
      
   
  )
}

export default Country;