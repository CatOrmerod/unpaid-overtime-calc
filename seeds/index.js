const sequelize = require('../config/connection');
const { Entry, Admin } = require('../models');

const entryData = require('./entry-seeds');
const adminData = require('./admin-seeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await adminData();
  await entryData();

  process.exit(0);
};

seedDatabase();
