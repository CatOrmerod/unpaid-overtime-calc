const { Entry } = require('../models'); 

const entryData = [
    {
        industry: 'IT',
        salary: 50000,
        start_time: new Date(),
        created_at: new Date(),
        created_at2: new Date(),
        name: 'First entry',
        email: 'email@gmail.com'
    }
]; 

const seedEntry =  () => Entry.bulkCreate(entryData); 

module.exports = seedEntry; 