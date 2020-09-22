import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchResult, setSearchResult] = useState('');
  const [foundCountry, setFoundCountry] = useState();

  const URL = 'https://restcountries.eu/rest/v2/all';

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
    console.log(event.target.value);
    setSearchResult(event.target.value);
  }
    
  // const searchedCountries = () => {
  let resultCountries = countries.filter(country => country.name.toLowerCase().includes(searchResult.toLowerCase()));

  console.log(resultCountries);
  // }
  
  let passResults = resultCountries.length < 10 
    ? <Results resultCountries={resultCountries} />
    : <p>Too many results. Refine your search</p>
  

  return (
    <div>
      <Search search={searchResult} onSearch={handleSearch} />
      {passResults}
    </div>
  )

  // console.log('countries', countries);

}

export default App;
