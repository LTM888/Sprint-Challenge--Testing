const express = require('express');
const games = require('./data/db');


const app = express();
app.use(express.json());


app.get('/' , (req, res, next) => {
    res.status(200).json({
        message: 'I see you'
    });
});

app.get('/games', (req, res) => {
    res.status(200).send(games);
});

app.post('/games', (req, res) => {
    if (!req.body.title) {
        return res.status(422).send({
            message: 'title is missing'
        });
    } else if (!req.body.genre) {
        return res.status(422).send({
            message: 'genre is missing'
        });
    }
    const game = {
        title: req.body.title,
        genre: req.body.genre,
        
    }
    games.push(game);
    return res.status(201).send({
        message: 'game added ',
        games
    });
});


module.exports = app;