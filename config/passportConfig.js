const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');

//serializing(into string) and deserializing(into object) user. not all data types are serializable.
passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});


passport.deserializeUser(function(id, cb) {
    db.user.findById(id).then(function(user) {
        cb(null, user);
    }).catch(cb);
});

//constructor for local strategy(?)
//just checking to see if there's a user with this email addy, and then finding
passport.use(new LocalStrategy({
    usernameField: 'email', //unique identifier for user
    passwordField: 'password'
}, function(email, password, cb) {
    db.user.findOne({
        where: {email: email} //first refers to column, second is the input
    }).then(function(user) {
        if (!user || !user.validPassword(password)) {//pass in the password that they typed
    cb(null, false); //denotes failure, "no, you can't log in"
        } else {
            cb(null, user); //denotes success, "yes, you can log in"
        }
    }).catch(cb); 
}));


module.exports = passport;