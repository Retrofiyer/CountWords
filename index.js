const express = require('express');
const app = express();
const port = 8082;

// Servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Ruta para contar palabras
app.get('/wordcount', (req, res) => {
    const text = req.query.text;

    if (!text) {
        return res.status(400).json({ error: 'Please provide a valid text.' });
    }

    const wordCount = text.trim().split(/\s+/).length;
    res.json({ wordCount: wordCount });
});

app.listen(port, () => {
    console.log(`Server running`);
});