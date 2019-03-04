const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const passport = require('./config/passportConfig');
const session = require('express-session');
const flash = require('connect-flash');
const isLoggedIn = require('./middleware/isLoggedIn');
const helmet = require('helmet');
require('dotenv').config();
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./models')
const app = express();

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(helmet());

const sessionStore = new SequelizeStore({
  db: db.sequelize, 
  expiration: 30 * 60 * 1000
});

//session is just an object that lives in memory. can be whatever
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore
}));

//Use this line once to set up the store table
// sessionStore.sync();

// This must come after the sesson and before passport
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

// attaches flash messages to the response objects, an anonymous middleware function
//this will hit every route
app.use(function(req, res, next) {
  res.locals.alerts = req.flash(); //any kind of alert will show in res.locals.alerts
  res.locals.currentUser = req.user;
  next();
})

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile');
});

app.use('/auth', require('./controllers/auth'));

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
