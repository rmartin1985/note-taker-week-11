const router = require('express').Router();
const { newNote, validateNote, deleteNote } = require('../../lib/notes');

const { db } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(db);
});

router.post('/notes', (req, res) => {
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = newNote(req.body, db);
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, db);
    res.json(true);
});

module.exports = router;