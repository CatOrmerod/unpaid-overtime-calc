const express = require('express');
const session = require('express-session');
const sess = require('./session');
const routes = require('./controllers');
const exphbs  = require('express-handlebars');
const sequelize = require('./config/connection');

// Init Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Handlebars engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Public static files
app.use(express.static('public'));

// Sessions
app.use(session(sess));

// req body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});