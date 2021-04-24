This is the notes app in the full stack open 2021 tutorial. These notes are for my own recall. 

Uses JSON server to mimic an actual DB. 

JSON server saves data in db.json file. 

The services directory contains the fetch logic using axios to make API calls to the JSON server, which then gets, creates, or updates based on user input. 

The Note component uses the toggleImportanceOf

When the notes app loads, it uses the useEffect hook to make an API GET call to retrieve all of the notes (see notes.js getAll()) stored in the db.json file. The API request is made and the response data is returned by the getAll() which is passed in as an argument and initialized as the initNotes parameter in the chained promise. 
