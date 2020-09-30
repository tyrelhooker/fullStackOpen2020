import React from 'react';





const Weather = ({ capital, fetchWeather }) => {
  let returnedWeather = fetchWeather(capital);
  console.log('returnedWeather', returnedWeather);

  return (
    <>
      The weather in {capital}:
      
    </>
  )
}

export default Weather;