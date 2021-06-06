const { Entry } = require('../models'); 

const entryData = [
    {
        industry: Education,
        salary: 70000,
        start_time: 8.5,
        end_time: 4.5,
        name: 'Piers Sandoval',
        email: 'pierssandoval@gmail.com',

    },
    {
        industry: Construction,
        salary: 100000,
        start_time: 5.5,
        end_time: 3.5,
        name: 'Mike Carrol',
        email: 'mikecarroll@gmail.com',

    },
    {
        industry: Entertainment, arts & recreation,
        salary: 50000,
        start_time: 10,
        end_time: 3,
        name: 'Elmer Roffe',
        email: 'elmerroffe@gmail.com',

    },
    {
        industry: Media & Communication,
        salary: 80000,
        start_time: 8.5,
        end_time: 5,
        name: 'Rosemary Cross',
        email: 'rosemarycross@gmail.com',

    },
    {
        industry: Finance, banking & insurance,
        salary: 130000,
        start_time: 7.5,
        end_time: 6,
        name: 'Chelsea Slater',
        email: 'chelseaslater@gmail.com',

    },
    {
        industry: Utilities,
        salary: 85000,
        start_time: 6.5,
        end_time: 3.5,
        name: 'Ferdinand Carter',
        email: 'ferdinandcarter@gmail.com',

    },
    {
        industry: Community & disability services,
        salary: 50000,
        start_time: 8.5,
        end_time: 2,
        name: 'Sadie Lowe',
        email: 'sadielowe@gmail.com',

    },
    {
        industry: Agriculture, forestry & fishing,
        salary: 90000,
        start_time: 6.5,
        end_time: 3.5,
        name: 'Garrick Mccoy',
        email: 'garrickmccoy@gmail.com',

    },
    {
        industry: Manufacturing,
        salary: 75000,
        start_time: 8.5,
        end_time: 4,
        name: 'Noelle Watson',
        email: 'noellewatson@gmail.com',

    },
    {
        industry: Education,
        salary: 90000,
        start_time: 8.5,
        end_time: 5,
        name: 'Juliet Daniels',
        email: 'julietdaniels@gmail.com',

    },
    {
        industry: Education,
        salary: 70000,
        start_time: 8.5,
        end_time: 4.5,
        name: 'Piers Sandoval',
        email: 'pierssandoval@gmail.com',

    },
    {
        industry: Education,
        salary: 70000,
        start_time: 8.5,
        end_time: 4.5,
        name: 'Piers Sandoval',
        email: 'pierssandoval@gmail.com',

    },
    {
        industry: Education,
        salary: 70000,
        start_time: 8.5,
        end_time: 4.5,
        name: 'Piers Sandoval',
        email: 'pierssandoval@gmail.com',

    },
    {
        industry: Education,
        salary: 70000,
        start_time: 8.5,
        end_time: 4.5,
        name: 'Piers Sandoval',
        email: 'pierssandoval@gmail.com',

    },
    {
        industry: Education,
        salary: 70000,
        start_time: 8.5,
        end_time: 4.5,
        name: 'Piers Sandoval',
        email: 'pierssandoval@gmail.com',

    },
]; 

const seedEntry =  () => Entry.bulkCreate(entryData); 

module.exports = seedEntry; 