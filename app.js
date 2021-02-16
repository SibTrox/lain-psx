var express = require('express');
var path = require('path');
const Handlebars = require('hbs');

var indexRoutes = require('./routes/index.js');
var gameRoutes = require('./routes/game.js');

var app = express();

//View engine config
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'hbs');

//Helpers 
Handlebars.registerHelper('for', function(from, to, incr, block) {
    var accum = '';
    for(var i = from; i >= to; i -= incr){
        i < 10 ? accum += block.fn("0" + i.toString()) : accum += block.fn(i)
    }
    return accum;
});

//Routes config
app.use('/', indexRoutes);
app.use('/game', gameRoutes);

app.listen(3000);
