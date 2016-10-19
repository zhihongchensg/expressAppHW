var mongoose = require('mongoose')

//create schema for movie model

var trainerSchema = new mongoose.Schema({
  //data type
  name: String,
  region: String,
  Power: Number

})

var Trainer = mongoose.model('Trainer', trainerSchema)

module.exports = Trainer
