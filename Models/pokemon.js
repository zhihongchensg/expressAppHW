var mongoose = require('mongoose')

//create schema for movie model

var pokemonSchema = new mongoose.Schema({
  //data type
  name: String,
  type: String,
  power: Number,
  trainerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trainer'
  }
})

var Pokemon = mongoose.model('Pokemon', pokemonSchema)

module.exports = Pokemon
