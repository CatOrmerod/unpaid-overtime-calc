const sequelize = require('../config/connection');
const { Contributor, Entry, Admin } = require('../models');

const contributorData = require('./contributorData.json');
const entryData = require('./entryData.json');
const adminData = require('./adminData.json');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const admin = await Admin.bulkCreate(adminData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const entry of entryData) {
//     await Entry.create({
//       ...entry,
//       user_id: contributors[Math.floor(Math.random() * contributors.length)].id,
//     });
//   }

//   for (const contributor of contributorData) {
//     await Contributor.create({
//       ...contributor,
//       user_id: contributors[Math.floor(Math.random() * contributors.length)].id,
//     });
//   }

//   process.exit(0);
// };

seedDatabase();