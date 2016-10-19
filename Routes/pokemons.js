var express = require('express')
var router = express.Router()
var pokemon = require('../models/pokemon')
var Trainer = require('../models/trainer')

// setting the route to homepage
// app.get('/path-name', callback(request, response)) NO
// use router.get instead

// READ ROUTES

// read all movies' details
router.get('/', function (req, res) {
  pokemon.find({}, function(err, findAllPokemon) {
  if (err) throw new Error(err)

  res.render('pokemonShowAll', {
    findAllPokemon: findAllPokemon,  // 1st find user goes to index ejs, the 2nd finduser refers to the user.find
    // name: 'zhihong1 testing header'
  })
  })
  // res.send('all users details')
})

router.get('/add', function (req, res) {
  res.render('pokemonAdd')
  // res.send('new new user')
})


router.get('/:id', function (req, res) {

  pokemon.findOne({name: req.params.id})
  .populate('trainerID')
  .exec(function (err,findOnePokemon){
    if (err) return err;
    console.log(findOnePokemon)

    res.render('aPokemon',{
      findOnePokemon: findOnePokemon
    });

  })


// MY ORIGINAL WORKING
  // pokemon.findOne({name: req.params.id}, function(err, findOnePokemon) {
  //   if (err) return res.send(err);
  //   res.render('aPokemon',{
  //     findOnePokemon: findOnePokemon
  //   });
  // })
})


router.post('/', function (req, res) {
  // res.send(req.body)
  // res.send(req.body.userName)
  Trainer.findOne({name: req.body.newuser.trainerid}, function (err, trainer) {
    console.log(trainer)
    // trainer_id: trainer.id

    var newPokemon = new pokemon({
      name: req.body.newuser.name,
      type: req.body.newuser.type,
      power: req.body.newuser.power,
      trainerID: trainer.id
    })

    newPokemon.save(function(err){
      if(err) throw new Error(err)
    })
  })

  res.send('new pokemon - ' + req.body.newuser.name + 'trainer: '+ req.body.newuser.trainerid + '..... CAPTURED!')
})


module.exports = router
