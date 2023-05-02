const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../db/fsUtils.js');
// /api/notes  GET ROUTE need to retun all the notes onto the html
notes.get("/notes", (req, res)=> {
    console.info(`${req.method} request for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));

})

// POST route to /api/notes needs to allow the user to add a new note
notes.post("/notes", (req, res)=> {
    
})

module.exports = router