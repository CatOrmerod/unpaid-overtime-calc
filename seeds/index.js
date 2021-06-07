const seedAdmin = require('./admin-seeds.js');
const seedEntry = require('./entry-seeds.js');

const sequelize = require('../config/connection');
const {
    Entry,
    Admin
} = require('../models');

// const contributorData = require('./contributorData.json');
const entryData = require('./entry-seeds');
const adminData = require('./admin-seeds');

const seedDatabase = async () => {
    await sequelize.sync({
        force: true
    });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedAdmin();
    console.log('\n----- ADMIN SEEDED -----\n');

    await seedEntry();
    console.log('\n----- ENTRIES SEEDED -----\n');

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

    process.exit(0);
};

seedDatabase();