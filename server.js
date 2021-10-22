const PORT = process.env.PORT || 3001;

const express = require('express');
const app = express();
const { db } = require('./db/db');

app.get('/api/notes', (req, res) => {
    res.json(db);
});





app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});