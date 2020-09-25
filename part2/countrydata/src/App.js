import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchResult, setSearchResult] = useState('');
  const [foundCountry, setFoundCountry] = useState([]);

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
    // const result = event.target.value;

    setSearchResult(event.target.value)
      
        let resultCountries = countries.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase()));
        
        setFoundCountry(resultCountries)
      

  }
    
  // const searchedCountries = () => {
  

  console.log(foundCountry);
  // }
  
  const determineDisplay = () => {
    console.log('searchResult', searchResult);
    if (searchResult === '') {
      return <p>Enter a country's name</p>
    } else if (foundCountry.length < 10 ){ 
      return <Results resultCountries={foundCountry} /> 
    } else { 
      return <p>Too many results. Refine your search</p>
    }
  }

  return (
    <>
      <Search search={searchResult} onSearch={handleSearch} />
      {determineDisplay()}
    </>
  )

  // console.log('countries', countries);

}

export default App;
