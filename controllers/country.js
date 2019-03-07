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
    let uri = 'https://restcountries.eu/rest/v2/all'
    request(uri, function (err, response, body) {
        let countries = JSON.parse(body)
        var country = req.params.name
        res.render('country/show', {countries, country})
    })
})






  module.exports = router;