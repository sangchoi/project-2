var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require('../config/passportConfig');

// GET sign up
router.get('/signup', function(req, res) {
  res.render('auth/signup');
});

// POST sign up
router.post('/signup', function(req, res) {
  db.user.findOrCreate({
    where: {
      email: req.body.email
    },
    defaults: {
      name: req.body.name,
      password: req.body.password
    }
  }).spread(function(user, created) {
    if (created) {
      console.log("User created");
      passport.authenticate('local', {
        successRedirect: '/profile/new', 
        successFlash: 'Account created and logged in'
      })(req, res);
    } else {
      console.log('Email already exists');
      req.flash('error', 'Email already exists');
      res.redirect('/auth/signup');
    }
  }).catch(function(error) {
    res.redirect('/auth/signup');
  })
});

// GET log in
router.get('/login', function(req, res) {
  res.render('auth/login');
});

// POST log in
router.post('/login', passport.authenticate('local', {
  successRedirect: '/', 
  successFlash: 'You have logged in!', 
  failureRedirect: '/auth/login', 
  failureFlash: 'Invalid username and/or password'
}));

// GET log out
router.get('/logout', function(req, res) {
  req.logout();
  req.flash('success', 'You have logged out!')
  res.redirect('/');
  
});

module.exports = router;
