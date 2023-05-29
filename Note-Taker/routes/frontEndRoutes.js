// const app = require('express')();
const router = require('express').Router();
const path = require('path');

// create GET route to /notes should return the notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))   
});

// create GET route to * should return the index.html file
router.get('*', (req, res) => {
res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router