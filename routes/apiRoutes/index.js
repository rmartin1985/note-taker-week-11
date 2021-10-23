const router = require('express').Router();
const { newNote, validateNote } = require('../../lib/notes');

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

module.exports = router;