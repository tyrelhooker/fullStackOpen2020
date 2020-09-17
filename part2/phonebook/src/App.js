import React, { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Deputy Dewey'}
  ]);
  const [newName, setNewName] = useState([]);

  const handleAddPerson = (nameInput) => {
    let newPersons = [...persons, {name: nameInput}];
    console.log('persons', persons);
    
    setPersons(newPersons);
    
    
  }

  console.log('after setpersons', persons);
  

  return (
    <div>
      <div>{newName.map(value => value.name)}</div>
      
      <h2>Phonebook</h2>
      <Filter />
      <h3>Add a new</h3>
      <PersonForm handleAddPerson={handleAddPerson}/>
      <h3>Numbers</h3>
      <Persons />
      <div>{persons.map(val => val.name)}</div>
    </div>
  );
}

export default App;
