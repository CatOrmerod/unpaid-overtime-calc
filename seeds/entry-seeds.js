const { Entry } = require('../models'); 

const entryData = [
    {
        industry: 'Education',
        salary: 70000,
        start: 8.5,
        end: 4.5,
        lunch: true,
        unpaidHours: 90,
        unpaidSalary: 2345,
        email: 'pierssandoval@gmail.com',
    },
    {
        industry: 'Construction',
        salary: 100000,
        start: 5.5,
        end: 3.5,
        lunch: true,
        unpaidHours: 90,
        unpaidSalary: 2345,
        email: 'mikecarroll@gmail.com',

    },
    {
        industry: 'Entertainment, arts & recreation',
        salary: 50000,
        start: 10,
        end: 3,
        lunch: false,
        unpaidHours: 90,
        unpaidSalary: 2345,
        email: 'elmerroffe@gmail.com',

    },
    {
        industry: 'Media & Communication',
        salary: 80000,
        start: 8.5,
        end: 5,
        lunch: true,
        unpaidHours: 90,
        unpaidSalary: 2345,
        email: 'rosemarycross@gmail.com',

    },
    {
        industry: 'Finance, banking & insurance',
        salary: 130000,
        start: 7.5,
        end: 6,
        lunch: true,
        unpaidHours: 90,
        unpaidSalary: 2345,
        email: 'chelseaslater@gmail.com',

    },
    {
        industry: 'Utilities',
        salary: 85000,
        start: 6.5,
        end: 3.5,
        lunch: true,
        unpaidHours: 90,
        unpaidSalary: 2345,
        email: 'ferdinandcarter@gmail.com',

    },
    {
        industry: 'Community & disability services',
        salary: 50000,
        start: 8.5,
        end: 2,
        lunch: false,
       unpaidHours: 90,
        unpaidSalary: 2345,
        email: 'sadielowe@gmail.com',

    },
    {
        industry: 'Agriculture, forestry & fishing',
        salary: 90000,
        start: 6.5,
        end: 3.5,
        lunch: true,
        unpaidHours: 90,
        unpaidSalary: 2345,
        email: 'garrickmccoy@gmail.com',

    },
    {
        industry: 'Manufacturing',
        salary: 75000,
        start: 8.5,
        end: 4,
        lunch: true,
        unpaidHours: 90,
        unpaidSalary: 2345,
        email: 'noellewatson@gmail.com',

    },
    
]; 

const seedEntry =  () => Entry.bulkCreate(entryData); 

module.exports = seedEntry; 