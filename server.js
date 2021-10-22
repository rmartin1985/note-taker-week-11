const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const { db } = require('./db/db');
const { application } = require('express');

const id = generateUniqueId({
    length: 2,
    useLetters: false
   });

// Middleware functions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    res.json(db);
});

// Function to create a new note
function newNote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    body.id = id;

    fs.writeFileSync(
        path.join(__dirname, './db.db.json'),
        JSON.stringify({ db: notesArray }, null, 2)
    );

    return note;
};

app.post('/api/notes', (req, res) => {
    const note = newNote(req.body, db);
    res.json(note);
});



// HTML routes
// Default HTML route for server
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// route for the notes.html page per the assignment 
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// route for the index.html page per the assignment
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});