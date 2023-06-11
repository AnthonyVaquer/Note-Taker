const router = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../db/fsUtils.js');
// /api/notes  GET ROUTE need to retun all the notes onto the html
router.get("/notes", (req, res)=> {
    console.info(`${req.method} request for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));

})

// POST route to /api/notes needs to allow the user to add a new note
router.post("/notes", (req, res) => {
    const note = req.body;
    const noteArray = [note];
    writeToFile('./db/db.json', noteArray)
      .then(() => res.json(note))
      .catch((err) => res.status(500).json(err));
  });
  module.exports = router;