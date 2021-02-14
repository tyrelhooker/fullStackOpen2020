/* ***********************************************
 HOW TO CREATE AN EXPRESS SERVER
*********************************************** */
const { response } = require('express');
const express = require('express');

const app = express();

// Express json parser allows access to post req.body data. It parses incoming requests with JSON payloads and is based on body-parser. 
app.use(express.json());

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17",
    important: true,
  },
  {  
    id: 2,
    content: "Browser can execute JS",
    date: "2019-05-30T18",
    important: false,
  },
  {    
    id: 3,
    content: "GET and POST are the most important methods of the HTTP Protocol",
    date: "2019-05-30T19",
    important: true
  }
];

const generateId = (arr) => {
  const maxId = arr.length > 0
    ? Math.max(...arr.map(n => n.id))
    : 0
  return maxId + 1;
}

// Pass in the resource root URL and, if applicable, the resource type and unique identifier. The event handler accepts two parameters. The request param contains all of the information of the HTTP request. So when the route path is hit, the request is what the server receives from the browser. The response param defines how the request is responded to. 
app.get('/', (request, response) => {
  // console.log(request);
  response.send('<h1>You have accessed the root</h1>');
});

app.get('/api/notes', (request, response) => {
  response.json(notes);
});

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  // console.log(id)
  const note = notes.find(note => {
    // console.log(note.id, typeof note.id, id, typeof id, note.id === id);
    
    return note.id === id
  });
  // console.log(note);
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
  
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter(note => note.id !== id)
  
  response.status(204).end();
})



app.post('/api/notes', (request, response) => {
  const body = request.body;
  // console.log(note);

  if(!body.content) {
    return response.status(400).json({ error: 'content missing'})
  }

  const note = {
    id: generateId(notes),
    content: body.content,
    date: new Date(),
    important: body.important || false
  }

  notes = notes.concat(note);
  console.log(notes);

  response.json(note);
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})



/* ***********************************************
HOW TO CREATE A NODE WEB SERVER
*********************************************** */

// Import node web server module, http
// const http = require('http');

// let notes = [
//   {
//     id: 1,
//     content: "HTML is easy",
//     date: "2019-05-30T17",
//     important: true,
//   },
//   {  
//     id:2,
//     content: "Browser can execute JS",
//     date: "2019-05-30T18",
//     important: false,
//   },
//   {    
//     id:3,
//     content: "GET and POST are the most important methods of the HTTP Protocol",
//     date: "2019-05-30T19",
//     important: true
//   }
// ]

// // Uses http module method, createServer, to register EH to the sever that is called everytime a HTTP request is made to the server's address, ie 3001. The content type header informs the received that the data is json and the array is transformed into json with stringify. 
// const app = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'application/json' });
//   response.end(JSON.stringify(notes));
// })


// const PORT = 3001;

// // Binds the http server assigned to app to listen to HTTP requests sent to the server Port. 
// app.listen(PORT);
// console.log(`Server running on port ${PORT}`)