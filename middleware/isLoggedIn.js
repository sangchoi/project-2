// Middleware to verify that a user is authenticated
//this is checking for the presence of request.user
module.exports = function(req, res, next) {
    if (!req.user) {
        req.flash('error', 'You must be logged in to access that page');
        res.redirect('/auth/login');
    } else {
        next();
    }
};