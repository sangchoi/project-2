var express = require('express');
var request = require('request');
var router = express.Router();
var db = require('../models');


// ALL COUNTRIES
router.get('/', function(req, res) {
    let uri = 'https://restcountries.eu/rest/v2/all'
    request(uri, function (err, response, body) {
        let countries = JSON.parse(body)
        // console.log("These are the countries" + countries)
        console.log('countries length', countries.length)
        res.render('country/index', {countries});
    })
  });

// SHOW ONE COUNTRY
router.get('/:name', function(req, res) {
    let uri = 'https://restcountries.eu/rest/v2/all'
    request(uri, function (err, response, body) {
        let countries = JSON.parse(body)
        var country = req.params.name
        res.render('country/show', {countries, country})
    })
})






  module.exports = router;