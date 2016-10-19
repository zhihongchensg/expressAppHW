var express = require('express')
var router = express.Router()
var trainers = require('../models/trainer')

router.get('/', function (req, res) {
  trainers.find({}, function(err, findAllTrainers) {
  if (err) throw new Error(err)

  res.render('trainerShowAll', {
    findAllTrainers: findAllTrainers,  // 1st find user goes to index ejs, the 2nd finduser refers to the user.find
    // name: 'zhihong1 testing header'
  })
  })
  // res.send('all users details')
})

router.get('/add', function (req, res) {
  res.render('trainerAdd')
  // res.send('new new user')
})


router.get('/:id', function (req, res) {
  trainers.findOne({}, function(err, findOneTrainer) {
    if (err) return res.send(err);

    res.render('findOneTrainer',{
      findOneTrainer: findOneTrainer
    });
  })
})


router.post('/', function (req, res) {
  // res.send(req.body)
  // res.send(req.body.userName)
  var newTrainer = new trainers({
    name: req.body.newuser.name,
    region: req.body.newuser.region,
    Power: req.body.newuser.Power,
  })
  console.log(newTrainer)
  newTrainer.save(function(err){
    if(err) throw new Error(err)
  })
  res.send('new trainer - ' + req.body.newuser.name + ' ..... WELCOME TO INDIGO!')
})


module.exports = router
