import React, { useState } from 'react';
import CountryList from './CountryList';

const Results = ({ resultCountries, setCity, weather, handleCity }) => 
  <>
    {resultCountries.length < 10
      ? <CountryList
          resultCountries={resultCountries} 
          setCity={setCity} 
          weather={weather} 
          handleCity={handleCity}
        />
      : <p>Too Many Results. Please narrow your search</p>
    }
  </>


export default Results;