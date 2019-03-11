var express = require('express');
var router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn');
var db = require('../models');

// GET EDIT PAGE WITH CURRENT USER AND PROFILE
router.get("/:id/edit", isLoggedIn, function(req, res) {
  db.user.findById(req.user.id).then(function(user) {
    user.getProfile().then(function(profile) {
      res.render("profile/edit", {user, profile})
    })
  })
})

// POSTS THE EDITS TO THE PROFILE DATABASE
router.put("/:id", isLoggedIn, function(req, res) {
  db.user.findById(req.user.id).then(function(user) {
    user.getProfile().then(function(profile) {
      db.profile.update({
        birthYear: parseInt(req.body.birthYear),
        gender: req.body.gender,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        language: req.body.language
      }, {
        where: {id: parseInt(req.params.id)}
      }).then(function(data) {
        res.redirect('/profile')
      })
    })
  })
})

// GETS user, profile, destination, and friend info from database
router.get('/', isLoggedIn, function(req, res) {
  db.user.findById(req.user.id).then( function(user) {
    user.getProfile().then(function(profile) {
      user.getDestinations().then( function(destinations){
        user.getFriends().then(function(friends) {
          res.render('profile/index', {user, profile, destinations, friends})
          })
      })
    })
  })
})

// GETS create profile page
router.get('/new', function(req, res) {
  res.render('profile/new');
});

// POSTS users input into profile table in database
router.post('/', isLoggedIn, function(req, res) {
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


module.exports = router;