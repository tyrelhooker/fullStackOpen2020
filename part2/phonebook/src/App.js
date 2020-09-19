import React, { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const convertToCamelCase = (string) => {
  return string.split(' ')
    .map(spaces => spaces.trim())
    .map(letter => letter[0].toUpperCase() + letter.substring(1))
    .join(' ');
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Deputy Dewey', number: '111-222-3333' },
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
    { name: 'Jo Jo', number: '222-222-2222' },
  ]);
  const [searchResult, setSearchResult] = useState([]);


  const handleAddPerson = (nameInput, phoneNumInput) => {
    let newPersons = [];

    const addPerson = () => {
      newPersons = [
        ...persons, 
        {
          name: convertToCamelCase(nameInput),
          //TODO: add checks to normalize phoneNumInput
          number: phoneNumInput
        }
      ];

      setPersons(newPersons);
    }

    let foundPerson = persons.find(person => person.name.toLowerCase() === nameInput.toLowerCase());

    foundPerson 
      ? alert(`${nameInput} already exists`)
      : addPerson();
  }

  const handleSearch = (searchInput) => {
    let foundPersons = [];

    const addSearchResult = (result) => {
      foundPersons = result();
      setSearchResult(foundPersons);      
    }

    const findPersons = () => {
      searchInput = searchInput.toUpperCase();
      
      return persons.filter((person) => person.name.toUpperCase().includes(searchInput));
    }

    const noPersonsFound = () => 'No person found';

    findPersons 
      ? addSearchResult(findPersons)
      : noPersonsFound(); 
  }


  


  return (
    <div className="App">
      {/* <div>{newName.map(value => value.name)}</div> */}
      
      <h2>Phonebook</h2>
      <h3>Name Search</h3>
      <Filter handleSearch={handleSearch} />
      <h3>Results</h3>
      <Persons searchResult={searchResult}/>
      <h3>Add Person to Phonebook</h3>
      <PersonForm handleAddPerson={handleAddPerson}/>

      
      
    </div>
  );
}

export default App;
