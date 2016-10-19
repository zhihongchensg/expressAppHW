var express = require ('express')
var app = express ()
var port = 4000

var layout = require('express-ejs-layouts')
var bodyParser = require('body-parser')

var mongoose = require('mongoose')
mongoose.Promise = global.Promise // before connect need to set promise first
mongoose.connect('mongodb://localhost/PokemonIndigo')

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')
app.use(layout)
app.use(bodyParser.urlencoded({ // something like this .. the app.use(views) means .. all get requests will render this
  extended: true
}))

var pokemon_routes = require('./routes/pokemons')
var trainer_routes = require('./routes/trainers')
var pokemon_api_routes = require('./routes/pokemons_api')

app.use('/pokemons', pokemon_routes)
app.use('/trainers', trainer_routes)
app.use('/api/pokemons', pokemon_api_routes)


app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
