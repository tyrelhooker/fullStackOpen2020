import React, {useState} from 'react';
import Country from './Country';

const CountryList = ({ resultCountries, setCity, weather, handleCity, city}) => {
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
          // weather={weather}
          // handleCity={handleCity}
          city={city}
        />
      : clicked
        ? <Country 
            key={clickedCountry.numericCode} countryData={clickedCountry} 
            clicked={clicked}
            setClicked={setClicked}
            setCity={setCity}
            city={city}
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

export default CountryList;