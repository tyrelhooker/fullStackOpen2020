import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Note from './components/Note';
import Form from './components/Form';

import './App.css';

const App = () => {

  const [notes, setNotes] = useState([]);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log('effect');
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled');
        console.log(response.data);
        setNotes(response.data);
      })
  }, []);
  console.log('render', notes.length, 'notes');

  const addNote = (contentInput) => {
    // TODO: Another way to do this is to use notes.concat(newNotes). Of course you need to refactor newNotes into a single object. 
    const newNotes = [
      ...notes,
      {
        // TODO: Note that you can also just use notes.length + 1 for the id!
        id: notes
          .map(note => {
            console.log('note', note.id);
            return note.id;
          })
          .reduce((a, b) => {
            console.log('a,b', a, b);
            return b + 1;
          }),
        content: contentInput,
        date: new Date().toISOString(),
        // TODO: Keep this snippit. It is very interesting way to determine random True or False. 
        important: Math.random() < 0.5
      }
    ];

    setNotes(newNotes);
  }

  // This conditional either provides the entire notes array or only the notes array containing notes tagged important to the Note Component below
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important);

  return (
    <div className="App">
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <Form handleAddNote={addNote} />
    </div>
  );
}

export default App;
