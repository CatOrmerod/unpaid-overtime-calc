const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');

// Init Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Sessions
app.use(session(sess));

// Handlebars engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// req body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Public static files
app.use(express.static(__dirname + '/public'));

// Routes
app.use(routes);

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
