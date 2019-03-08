var express = require('express');
var request = require('request');
var router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn');
var db = require('../models');


// ADD A FRIEND TO THE FRIENDS TABLE
router.post('/', function(req, res) {
    db.user.findById(req.user.id).then(function(user) {
        user.createFriend({
            name: req.body.name
        })
    }).then(function(friends) {
        res.redirect('/country/' + req.body.country)
    })
  })

  
// DELETE A FRIEND 
router.delete('/:id', function(req, res) {
    db.usersFriends.destroy({
        where: {userId: req.user.id, friendId: req.params.id}
            }).then(function() {
                res.redirect("/profile")
    })
})






  module.exports = router;