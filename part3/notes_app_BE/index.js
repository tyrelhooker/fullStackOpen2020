const express = require('express');
const JSONnotes = require('./notes.json');

const app = express();

const mappedNotes = JSONnotes.notes.map(note => note);
console.log(mappedNotes);

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
})
app.get('/api/notes', (req, res) => {
  res.json(mappedNotes);
})

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});