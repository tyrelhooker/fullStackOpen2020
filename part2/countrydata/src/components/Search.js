import React from 'react';

const Search = ({ search, onSearch }) => {
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={onSearch} 
      />
    </>
  )
}

export default Search;