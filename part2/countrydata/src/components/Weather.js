import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Weather = ({ capital, setCity, city }) => {
  console.log('capital', capital)
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY;
    let API_URL = '';

    const resetURL = (api_key, capital) => `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`;

    API_URL = resetURL(api_key, capital);

    console.log('USE EFFECT TRIGGERED')

    axios
    .get(API_URL)
    .then(response => {
      // console.log([response.data]);
      setWeather([response.data.current]);
    })
  }, [capital]);
  
  // console.log(fetchWeather);

  useEffect(() => {
    setCity(capital)
    console.log('is city set?', city)
  }, [capital, city]);

  // handleCity(capital);
  

  return (
    <>
      The weather in {capital}:
      {weather.map(item => <p>{item.temperature}</p>)}
    </>
  )
}

export default Weather;