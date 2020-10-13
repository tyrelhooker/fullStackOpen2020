const App = () => {
  // ...

  useEffect(() => {
    noteService      
      .getAll()      
      .then(intialNotes => {        
        setNotes(intialNotes)      
      })  
  }, [])

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService      
      .update(id, changedNote)      
      .then(response => {        
        setNotes(notes.map(note => note.id !== id ? note : response.data))      
      })  
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5
    }

    noteService      
      .create(noteObject)      
      .then(response => {        
        setNotes(notes.concat(response.data))        
        setNewNote('')      
      })  
  }

  // ...
}

export default App