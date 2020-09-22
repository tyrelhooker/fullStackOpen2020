import React from 'react';

const Results = ({ resultCountries }) => {
  // console.log(searchedCountries());
  return (
    <>
      {resultCountries.map(country => 
        <li>{country.name}</li>)}
    </>
  )
}

export default Results;