const express = require('express');
const film = require('./models/film.js');
const app = express();


app.use(express.json());

app.set('view engine', 'pug');

app.get('/list/:id?',
    function (req, res, next) {
        const id = req.params.id
        if (id !== '123')
            next('VOUS ETES NON AUTORISER');
        else
            next();
    },
    function (req, res) {


        res.render('index', { title: 'Liste Film', liste:'liste de films', movies: film });

    }

);

/*const creatMovie=('/add/:id?/:new',
    function (req, res, next) {
        const id = req.params.id
        if (id !== '123')
            next('VOUS ETES NON AUTORISER');
        else
            next();
    },
    function (req, res) {
        const new_movie = req.params.new;
        
        //return new_movie;
        
        console.log(new_movie);
        res.redirect('/list');


    }

);*/
app.listen(3000);

//module.exports = new_movie;