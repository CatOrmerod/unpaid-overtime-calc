const { Admin } = require('../models');

const adminData = [
  {
    name: 'Michelle Watts',
    email: '1234@gmail.com',
    password: '123456',
  },
  {
    name: 'Cat Ormerod',
    email: 'catormerod@gmail.com',
    password: '123456',
  },
  {
    name: 'Josep Gaspar',
    email: '3456@gmail.com',
    password: '123456',
  },
  {
    name: 'Jason Bolton',
    email: '4567@gmail.com',
    password: '123456',
  },
  {
    name: 'David Impey',
    email: 'david@gmail.com',
    password: '123456',
  },
  {
    name: 'Tom Haigh',
    email: 'tom@gmail.com',
    password: '123456',
  },
  {
    name: 'Sandes',
    email: 'sandes@gmail.com',
    password: '123456',
  },
  {
    name: 'Kevin',
    email: 'kevin@gmail.com',
    password: '123456',
  },
];

const seedAdmin = () =>
  Admin.bulkCreate(adminData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedAdmin;
