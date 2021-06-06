const { Entry } = require('../models'); 

const entryData = [
    {
        industry: ,
        salary: ,
        start_time: ,
        end_time: ,
        name: ,
        email: ,

    }
]; 

const seedEntry =  () => Entry.bulkCreate(entryData); 

module.exports = seedEntry; 