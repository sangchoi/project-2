var express = require('express');
var request = require('request');
var router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn');
var db = require('../models');


// ALL COUNTRIES
router.get('/', isLoggedIn, function(req, res) {
    let uri = 'https://restcountries.eu/rest/v2/all'
    request(uri, function (err, response, body) {
        let countries = JSON.parse(body)
        // console.log("These are the countries" + countries)
        console.log('countries length', countries.length)
        res.render('country/index', {countries});
    })
  });

// SHOW ONE COUNTRY
router.get('/:name', isLoggedIn, function(req, res) {
    let uri = `https://restcountries.eu/rest/v2/name/${req.params.name}`
    request(uri, function (err, response, body) {
        let country = JSON.parse(body)[0]
        // var country = req.params.name
        // res.json(country)
        db.profile.findAll({
            where: {
                language: country.languages[0].name 
                
            },
            include: [db.user]
        }).then(function(profiles) {
            // res.json(profiles)
            res.render('country/show', {profiles, country})
        })
    })
})

// ADD ONE COUNTRY TO DESTINATION TABLE
router.post('/:name', isLoggedIn, function(req, res) {
    db.user.findById(req.user.id).then(function(user) {
        user.createDestination({
            name: req.body.name
        })
    }).then(function(destination) {
        res.redirect('/country/' + req.body.name)
    })
})

// DELETE COUNTRY FROM DESTINATION TABLE
router.delete('/:id', isLoggedIn, function(req, res) {
    db.usersDestinations.destroy({
        where: {userId: req.user.id, destinationId: req.params.id}
    }).then(function() {
        res.redirect("/profile")
    })
})






  module.exports = router;