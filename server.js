const PORT = process.env.PORT || 3001;

const express = require('express');
const app = express();

const { db } = require('./db/db');

// Middleware functions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/notes', (req, res) => {
    res.json(db);
});





app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});