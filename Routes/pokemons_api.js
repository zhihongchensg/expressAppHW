var express = require('express')
var router = express.Router()

var Pokemon = require('../models/pokemon')

router.get('/', function (req, res) {
  Pokemon.find({}, function (err, allPokemons) {
    res.json(allPokemons)
  })
})

router.post('/', function (req, res) {
  Pokemon.create(req.body.user, function (err, newPokemons) {
    res.json(newPokemons)
  })
})

module.exports = router
