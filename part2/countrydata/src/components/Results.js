import React, { useState } from 'react';
import Country from './Country';

const Results = ({ resultCountries }) => {
  const [clicked, setClicked] = useState(false);
  const [clickedCountry, setClickedCountry] = useState([]);

  // console.log(searchedCountries());
  const handleCountryClick = (country) => {
    console.log('clickCountry', country);
    setClicked(true);
    setClickedCountry([country]);
  }

  return (
    <div> 
      {resultCountries.length === 1 
        ? <Country key={resultCountries.numericCode} countryData={resultCountries} clicked={clicked}setClicked={setClicked} />
        : clicked
          ? <Country key={clickedCountry.numericCode} countryData={clickedCountry} clicked={clicked}setClicked={setClicked}/> 
          : resultCountries.map(country => 
            <div key={country.numericCode}>
              <li key={country.numericCode}>
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