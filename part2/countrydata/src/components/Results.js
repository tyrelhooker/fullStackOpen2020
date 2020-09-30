import React, { useState } from 'react';
import Country from './Country';

const Results = ({ resultCountries, setCity, weather, handleCity }) => {
  const [clicked, setClicked] = useState(false);
  const [clickedCountry, setClickedCountry] = useState([]);

  // console.log(searchedCountries());
  const handleCountryClick = (country) => {

    setClicked(true);
    setClickedCountry([country]);
  }

  return (
    <div> 
      {resultCountries.length === 1 
        ? <Country 
            key={resultCountries.numericCode} countryData={resultCountries} 
            clicked={clicked} 
            setClicked={setClicked} 
            setCity={setCity}
            weather={weather}
            handleCity={handleCity}
          />
        : clicked
          ? <Country 
              key={clickedCountry.numericCode} countryData={clickedCountry} clicked={clicked}
              setClicked={setClicked}
            /> 
          : resultCountries.map(country => 
            <div key={country.numericCode}>
              <li>
                {country.name}
              </li>
              <button onClick={() => handleCountryClick(country)}>
                Click to reveal!
              </button>
            </div>
          )
      }
    </div>
  )
}

export default Results;