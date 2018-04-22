const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send({
        name: 'Arun',
        likes: [
            'Hiking',
            'Biking'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('<h2>About me</h2>');
});

app.listen(3000);