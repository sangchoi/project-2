var express = require('express');
var router = express.Router();
var db = require('../models');


// Gets Edit Profile Page
router.get('/new', function(req, res) {
  res.render('profile/new');
});

// Inserts users profile input into profile database
router.post('/', function(req, res) {
  db.user.findById(req.user.id).then( function(user) {
    user.createProfile({
      birthYear: req.body.birthYear,
      gender: req.body.gender,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      language: req.body.language,
      userId: user.id
    })
  }).then(function(profile){
    res.redirect('/');
  })
})

// Gets info from database
router.get('/', function(req, res) {
  db.user.findById(req.user.id).then( function(user) {
    user.getProfile().then(function(profile) {
      res.render('profile/index', {profile})
    })
  })
})


  module.exports = router;