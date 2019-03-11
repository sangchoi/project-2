const express = require('express');
const methodOverride = require('method-override');
const ejsLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const passport = require('./config/passportConfig');
const session = require('express-session');
const flash = require('connect-flash');
const isLoggedIn = require('./middleware/isLoggedIn');
const helmet = require('helmet');
require('dotenv').config();
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const request = require('request');
const db = require('./models')
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"))
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(helmet());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));


const sessionStore = new SequelizeStore({
  db: db.sequelize, 
  expiration: 30 * 60 * 1000
});

// Session 
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore
}));

// Session Table
// sessionStore.sync();

// Flash Alert Middleware
app.use(flash());

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Flash
app.use(function(req, res, next) {
  res.locals.alerts = req.flash(); 
  res.locals.currentUser = req.user;
  next();
})

// Rendering index to root 
app.get('/', function(req, res) {
  res.render('index');
});

// Router
app.use('/auth', require('./controllers/auth'));
app.use('/profile', require('./controllers/profile'));
app.use('/country', require('./controllers/country'));
app.use('/friend', require('./controllers/friend'));

// Port setup
var server = app.listen(process.env.PORT || 3000);

module.exports = server;
