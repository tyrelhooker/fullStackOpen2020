import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Weather = ({ capital, fetchWeather, weather }) => {
  console.log('capital', capital)
  const [weather, setWeather] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;
  let API_URL = '';

  const resetURL = (api_key, city) => `http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`;

  useEffect(() => {
    API_URL = resetURL(api_key, city);

    console.log('USE EFFECT TRIGGERED')
    axios
    .get(API_URL)
    .then(response => {
      // console.log([response.data]);
      setWeather([response.data.current]);
    })
  }, [api_key]);
  
  // console.log(fetchWeather);

  const handleCity= (capital) => {
    console.log('fetching weather');
    setCity(capital)
    
    console.log('is city set?', city)
  }
  const fetchedWeather = ;
  

  return (
    <>
      The weather in {capital}:
      {weather.map(item => <p>{item.temperature}</p>)}
    </>
  )
}

export default Weather;