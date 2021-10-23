const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Function to create a new note
function newNote(body, notesArray) {
    const note = body;

    note.id = uuidv4();

    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ db: notesArray }, null, 2)
    );

    return note;
};

// function to validate if the note is a string
function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
};

module.exports = {
    newNote,
    validateNote
};