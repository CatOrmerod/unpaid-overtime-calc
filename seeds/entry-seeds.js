const { Entry } = require('../models'); 

const entryData = [
    {
        industry: 'Education',
        salary: 70000,
        start_time: 8.5,
        end_time: 4.5,
        has_lunch: true,
        name: 'Piers Sandoval',
        email: 'pierssandoval@gmail.com',
    },
    {
        industry: 'Construction',
        salary: 100000,
        start_time: 5.5,
        end_time: 3.5,
        has_lunch: true,
        name: 'Mike Carrol',
        email: 'mikecarroll@gmail.com',

    },
    {
        industry: 'Entertainment, arts & recreation',
        salary: 50000,
        start_time: 10,
        end_time: 3,
        has_lunch: false,
        name: 'Elmer Roffe',
        email: 'elmerroffe@gmail.com',

    },
    {
        industry: 'Media & Communication',
        salary: 80000,
        start_time: 8.5,
        end_time: 5,
        has_lunch: true,
        name: 'Rosemary Cross',
        email: 'rosemarycross@gmail.com',

    },
    {
        industry: 'Finance, banking & insurance',
        salary: 130000,
        start_time: 7.5,
        end_time: 6,
        has_lunch: true,
        name: 'Chelsea Slater',
        email: 'chelseaslater@gmail.com',

    },
    {
        industry: 'Utilities',
        salary: 85000,
        start_time: 6.5,
        end_time: 3.5,
        has_lunch: true,
        name: 'Ferdinand Carter',
        email: 'ferdinandcarter@gmail.com',

    },
    {
        industry: 'Community & disability services',
        salary: 50000,
        start_time: 8.5,
        end_time: 2,
        has_lunch: false,
        name: 'Sadie Lowe',
        email: 'sadielowe@gmail.com',

    },
    {
        industry: 'Agriculture, forestry & fishing',
        salary: 90000,
        start_time: 6.5,
        end_time: 3.5,
        has_lunch: true,
        name: 'Garrick Mccoy',
        email: 'garrickmccoy@gmail.com',

    },
    {
        industry: 'Manufacturing',
        salary: 75000,
        start_time: 8.5,
        end_time: 4,
        has_lunch: true,
        name: 'Noelle Watson',
        email: 'noellewatson@gmail.com',

    },
    {
        industry: 'Education',
        salary: 90000,
        start_time: 8.5,
        end_time: 5,
        has_lunch: true,
        name: 'Juliet Daniels',
        email: 'julietdaniels@gmail.com',

    },
    {
        industry: 'Health',
        salary: 60000,
        start_time: 16,
        end_time: 24,
        has_lunch: true,
        name: 'Ellen Feron',
        email: 'ellenferon@gmail.com',

    },
    {
        industry: 'Health',
        salary: 95000,
        start_time: 8.5,
        end_time: 5,
        has_lunch: true,
        name: 'Ed Titterington',
        email: 'edtitterington@gmail.com',

    },
    {
        industry: 'Finance, banking & insurance',
        salary: 110000,
        start_time: 7,
        end_time: 5,
        has_lunch: true,
        name: 'Lizzie Clarke',
        email: 'lizzieclark@gmail.com',

    },
    {
        industry: 'Entertainment, arts & recreation',
        salary: 50000,
        start_time: 12,
        end_time: 6,
        has_lunch: false,
        name: 'Dane Stokes',
        email: 'danestokes@gmail.com',

    },
    {
        industry: 'Property & other services',
        salary: 130000,
        start_time: 8.5,
        end_time: 3.5,
        has_lunch: true,
        name: 'Eda Dawson',
        email: 'edadawson@gmail.com',

    },
    {
        industry: 'Community & disability services',
        salary: 95000,
        start_time: 7.5,
        end_time: 4.5,
        has_lunch: true,
        name: 'Gillian Arnold',
        email: 'gillianarnold@gmail.com',

    },
    {
        industry: 'Finance, banking & insurance',
        salary: 170000,
        start_time: 7.5,
        end_time: 6,
        has_lunch: true,
        name: 'Eddie Mcbride',
        email: 'eddiemcbride@gmail.com',

    },
    {
        industry: 'Transport',
        salary: 85000,
        start_time: 4.5,
        end_time: 12.5,
        has_lunch: true,
        name: 'Mona French',
        email: 'monafrench@gmail.com',

    },
    {
        industry: 'Agriculture, forestry & fishing',
        salary: 70000,
        start_time: 7.5,
        end_time: 4.5,
        has_lunch: true,
        name: 'Beatrice Wright',
        email: 'beatricewright@gmail.com',

    },
    {
        industry: 'Administration & professional services',
        salary: 90000,
        start_time: 8.5,
        end_time: 5,
        has_lunch: true,
        name: 'Hannah Gibbs',
        email: 'hannahgibbs@gmail.com',

    },
    {
        industry: 'Something else. None of above fit what I do',
        salary: 95000,
        start_time: 7.5,
        end_time: 4.5,
        has_lunch: true,
        name: 'Tracy Adkins',
        email: 'tracyadkins@gmail.com',

    },
    {
        industry: 'Public services & Emergency Services',
        salary: 100000,
        start_time: 8.5,
        end_time: 5,
        has_lunch: true,
        name: 'Benjamin Skinner',
        email: 'benjaminskinner@gmail.com',

    },
    {
        industry: 'Warehousing logistics',
        salary: 65000,
        start_time: 8.5,
        end_time: 5,
        has_lunch: true,
        name: 'Taylor Castillo',
        email: 'taylorcastillo@gmail.com',

    },
    {
        industry: 'Media & Communication',
        salary: 80000,
        start_time: 10,
        end_time: 5,
        has_lunch: true,
        name: 'Neil Hayward',
        email: 'neilhayward@gmail.com',

    },
    {
        industry: 'Retail',
        salary: 65000,
        start_time: 8.5,
        end_time: 5.5,
        has_lunch: true,
        name: 'Caldwell Walker',
        email: 'caldwellwalker@gmail.com',

    },
    {
        industry: 'Retail',
        salary: 60000,
        start_time: 12,
        end_time: 20,
        has_lunch: true,
        name: 'Fern Cannon',
        email: 'ferncannon@gmail.com',

    },
    {
        industry: 'Education',
        salary: 60000,
        start_time: 8.5,
        end_time: 3.5,
        has_lunch: true,
        name: 'George Alvarez',
        email: 'georgealvarez@gmail.com',

    },
    {
        industry: 'Entertainment, arts & recreation',
        salary: 50000,
        start_time: 9.5,
        end_time: 4.5,
        has_lunch: true,
        name: 'Ellery Arnold',
        email: 'elleryarnold@gmail.com',

    },
    {
        industry: 'Mining',
        salary: 130000,
        start_time: 5.5,
        end_time: 3.5,
        has_lunch: true,
        name: 'Grover Walton',
        email: 'groverwalton@gmail.com',

    },
    {
        industry: 'Finance, banking & insurance',
        salary: 70000,
        start_time: 8.5,
        end_time: 5.5,
        has_lunch: true,
        name: 'Angelica Vasquez',
        email: 'angelicavasquez@gmail.com',

    },
    {
        industry: 'Entertainment, arts & recreation',
        salary: 58000,
        start_time: 9.5,
        end_time: 4.5,
        has_lunch: true,
        name: 'Austin Read',
        email: 'austinread@gmail.com',

    },
    {
        industry: 'Community & disability service',
        salary: 50000,
        start_time: 8.5,
        end_time: 4.5,
        has_lunch: true,
        name: 'Cheryl Rose',
        email: 'cherylrose@gmail.com',

    },
    {
        industry: 'Entertainment, arts & recreation',
        salary: 82000,
        start_time: 8.5,
        end_time: 5,
        has_lunch: true,
        name: 'Andrea Byrd',
        email: 'andreabyrd@gmail.com',

    },
    {
        industry: 'Manufacturing',
        salary: 45000,
        start_time: 8.5,
        end_time: 1,
        has_lunch: false,
        name: 'Pamela Cox',
        email: 'pamelacox@gmail.com',

    },
    {
        industry: 'Transport',
        salary: 92000,
        start_time: 4,
        end_time: 12,
        has_lunch: true,
        name: 'Kelsey Marsh',
        email: 'kelseymarsh@gmail.com',

    },
    {
        industry: 'Education',
        salary: 72000,
        start_time: 7.5,
        end_time: 3.5,
        has_lunch: true,
        name: 'Alice Stevens',
        email: 'alicestevens@gmail.com',

    },
    {
        industry: 'Trades & trades assistants',
        salary: 980000,
        start_time: 4.5,
        end_time: 14.5,
        has_lunch: true,
        name: 'Ferris Madron',
        email: 'ferrismadron@gmail.com',

    },
    {
        industry: 'Something else. None of above fit what I do',
        salary: 150000,
        start_time: 8.5,
        end_time: 5.5,
        has_lunch: true,
        name: 'Rita Silva',
        email: 'ritasilva@gmail.com',

    },
    {
        industry: 'Administration & professional services',
        salary: 110000,
        start_time: 7.5,
        end_time: 5,
        has_lunch: true,
        name: 'Tom Hurlbutt',
        email: 'tomhurlbutt@gmail.com',

    },
    {
        industry: 'Health',
        salary: 70000,
        start_time: 8.5,
        end_time: 4.5,
        has_lunch: true,
        name: 'Matt Friedman',
        email: 'mattfriedman@gmail.com',

    },
>>>>>>> 37089dbd5c2707f7e48da0d0234aad92a4a261f3
]; 

const seedEntry =  () => Entry.bulkCreate(entryData); 

module.exports = seedEntry; 