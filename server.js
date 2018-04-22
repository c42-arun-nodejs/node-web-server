const express = require('express');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

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
    res.render('about.hbs', {
        pageTitle: 'About page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorCode: 100,
        errorMessage: 'Bad request'
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});