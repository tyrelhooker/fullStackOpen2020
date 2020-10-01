import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchResult, setSearchResult] = useState('');
  const [foundCountry, setFoundCountry] = useState([]);
  const [city, setCity] = useState('');

  
  

  const URL = 'https://restcountries.eu/rest/v2/all';
 

    
  // const resetAPI_URL = (capitalCity) => API_URL = `http://api.weatherstack.com/current?access_key=${api_key}&query=${capitalCity}`;

  useEffect(() => {
    console.log('effect');
    axios
      .get(URL)
      .then(response => {
        console.log('promise fulfilled');
        console.log(response);
        setCountries(response.data);
      })
  }, []);



  



  const handleSearch = (event) => {
    setSearchResult(event.target.value)
      
    let resultCountries = countries
      .filter(country => country.name.toLowerCase()
      .includes(event.target.value.toLowerCase())
      );
    
    setFoundCountry(resultCountries)
  }


  return (
    <>
      <Search search={searchResult} onSearch={handleSearch} />
      
      {searchResult === ''
        ? <p>Enter a country's name</p>
        : <Results 
            resultCountries={foundCountry}
            setCity={setCity}
            // weather={weather}
            // handleCity={handleCity}
            city={city}
          />
      }
    </>
  )

}

export default App;
