import React from 'react';
import CountryList from './CountryList';

const Results = ({ resultCountries, setCity, city }) => 
  <>
    {resultCountries.length < 10
      ? <CountryList
          resultCountries={resultCountries} 
          setCity={setCity} 
          city={city}
        />
      : <p>Too Many Results. Please narrow your search</p>
    }
  </>


export default Results;