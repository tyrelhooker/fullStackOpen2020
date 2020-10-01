import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 } from 'uuid';


const Weather = ({ capital, setCity, city }) => {
  const [weather, setWeather] = useState([]);

  console.log('weather', weather)

  useEffect(() => {
    console.log('setCity running...')
    setCity(capital)
  }, [capital, setCity]);


  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY;
    let API_URL = '';
    const resetURL = (api_key, capital) => `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`;
    API_URL = resetURL(api_key, capital);

    axios
      .get(API_URL)
      .then(response => {
        setWeather([response.data.current]);
      })
  }, [capital]);

  return (
    <>
      <h2>The weather in {capital}:</h2>
      {weather.map(item => 
        <div key={v4()}>
          {/* <p>Time: {item.observation_time}</p> */}
          <p>Temperature: {item.temperature}</p>
          <img src={item.weather_icons} alt={item.weather_descriptions} width="100" height="100"/>
          <p>Wind: {`${item.wind_speed} mph ${item.wind_dir}`}</p>
          <p>Precipitation: {item.precip}</p>
        </div>
      )}
    </>
  )
}


export default Weather;