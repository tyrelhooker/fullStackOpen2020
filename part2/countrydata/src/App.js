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
  const [weather, setWeather] = useState([]);
  
  

  const URL = 'https://restcountries.eu/rest/v2/all';
  const api_key = process.env.REACT_APP_API_KEY;

    
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


  const handleCity= (capital) => {
    console.log('fetching weather');
    setCity(capital)
    
    console.log('is city set?', city)
  }
  
  useEffect(() => {
    let API_URL = `http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`;

    console.log('USE EFFECT TRIGGERED')
    axios
    .get(API_URL)
    .then(response => {
      // console.log([response.data]);
      setWeather([response.data]);
    })
  }, [city, api_key]);





  const handleSearch = (event) => {
    setSearchResult(event.target.value)
      
    let resultCountries = countries
      .filter(country => country.name.toLowerCase()
      .includes(event.target.value.toLowerCase())
      );
    
    setFoundCountry(resultCountries)
  }



  const determineDisplay = () => {

    if (searchResult === '') {
      return <p>Enter a country's name</p>
    } 
    else if (foundCountry.length < 10 ) { 
      return <Results 
        resultCountries={foundCountry} 
        setCity={setCity} 
        weather={weather} 
        handleCity={handleCity}/> 
    } 
    else { 
      return <p>Too many results. Refine your search</p>
    }
  }

  return (
    <>
      <Search search={searchResult} onSearch={handleSearch} />
      {determineDisplay()}
    </>
  )

}

export default App;
