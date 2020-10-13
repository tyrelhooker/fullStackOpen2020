import React, { useState, useEffect } from 'react';
import './App.css';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsService from './services/persons';

const convertToCamelCase = (string) => {
  return string.split(' ')
    .map(spaces => spaces.trim())
    .map(letter => letter[0].toUpperCase() + letter.substring(1))
    .join(' ');
}

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  

  useEffect(() => {
    
    personsService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
      .catch(error => console.log(`${error}: Failed to retrieve persons.`))
      
  }, []);


  const handleAddPerson = (nameInput, phoneNumInput) => {

    const addPerson = () => {
      const newPersons =  
        {
          name: convertToCamelCase(nameInput),
          //TODO: add checks to normalize phoneNumInput
          number: phoneNumInput
        };

      personsService
        .create(newPersons)
        .then(returnedPersons => {
          setPersons(persons.concat(returnedPersons))
        })
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
