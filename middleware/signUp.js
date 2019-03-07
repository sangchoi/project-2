// Middleware to verify that a user is authenticated
//this is checking for the presence of request.user
module.exports = function(req, res, next) {
    if (req.user) {
        res.redirect('/profile/new');
    } else {
        next();
    }
};