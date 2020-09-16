import React, { useState } from 'react';
import Note from './components/Note';
import Form from './components/Form';

import './App.css';

function App(props) {

  const [notes, setNotes] = useState(props.notes);

  const addNote = (contentInput) => {

    const newNotes = [
      ...notes,
      {
        id: notes
          .map(note => {
            console.log('note', note.id);
            return note.id;
          })
          .reduce((a, b) => {
            console.log('a,b', a, b);
            return a + b;
          }),
        content: contentInput,
        date: new Date().toISOString()
      }
    ];
    console.log('newNoteAfterClick: ', newNotes);
    setNotes(newNotes)
  }

  return (
    <div className="App">
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <Form handleAddNote={addNote} />
    </div>
  );
}

export default App;
