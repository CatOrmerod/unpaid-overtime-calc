const { Entry } = require('../models'); 

const entryData = [
    {
        industry: 'Education',
        salary: 70000,
        start: 8.5,
        end: 5.5,
        lunch: true,
        unpaidHours: 230,
        unpaidSalary: 8846,
        email: 'pierssandoval@gmail.com',
    },
    {
        industry: 'Construction',
        salary: 100000,
        start: 5.5,
        end: 15.5,
        lunch: true,
        unpaidHours: 460,
        unpaidSalary: 25274,
        email: 'mikecarroll@gmail.com',

    },
    {
        industry: 'Entertainment, arts & recreation',
        salary: 60000,
        start: 10,
        end: 20,
        lunch: false,
        unpaidHours: 460,
        unpaidSalary: 15164,
        email: 'elmerroffe@gmail.com',

    },
    {
        industry: 'Media & Communication',
        salary: 80000,
        start: 8.5,
        end: 17,
        lunch: true,
        unpaidHours: 115,
        unpaidSalary: 5054,
        email: 'rosemarycross@gmail.com',

    },
    {
        industry: 'Finance, banking & insurance',
        salary: 130000,
        start: 7.5,
        end: 18,
        lunch: true,
        unpaidHours: 575,
        unpaidSalary: 41071,
        email: 'chelseaslater@gmail.com',

    },
    {
        industry: 'Utilities',
        salary: 85000,
        start: 6.5,
        end: 15.5,
        lunch: true,
        unpaidHours: 230,
        unpaidSalary: 10751,
        email: 'ferdinandcarter@gmail.com',

    },
    {
        industry: 'Community & disability services',
        salary: 50000,
        start: 8.5,
        end: 17,
        lunch: false,
        unpaidHours: 230,
        unpaidSalary: 6318,
        email: 'sadielowe@gmail.com',

    },
    {
        industry: 'Agriculture, forestry & fishing',
        salary: 90000,
        start: 6.5,
        end: 15.5,
        lunch: true,
        unpaidHours: 115,
        unpaidSalary: 5686,
        email: 'garrickmccoy@gmail.com',

    },
    {
        industry: 'Manufacturing',
        salary: 75000,
        start: 8,
        end: 16.5,
        lunch: true,
        unpaidHours: 115,
        unpaidSalary: 4739,
        email: 'noellewatson@gmail.com',

    },
    {
        industry: 'Education',
        salary: 90000,
        start: 8.5,
        end: 17,
        lunch: true,
        unpaidHours: 115,
        unpaidSalary: 5686,
        email: 'julietdaniels@gmail.com',

    },
    {
        industry: 'Health',
        salary: 60000,
        start: 16,
        end: 1,
        lunch: true,
        unpaidHours: 230,
        unpaidSalary: 7582,
        email: 'ellenferon@gmail.com',

    },
    {
        industry: 'Health',
        salary: 95000,
        start: 8.5,
        end: 18,
        lunch: true,
        unpaidHours: 460,
        unpaidSalary: 24010,
        email: 'edtitterington@gmail.com',

    },
    {
        industry: 'Finance, banking & insurance',
        salary: 110000,
        start: 7,
        end: 17,
        lunch: true,
        unpaidHours: 460,
        unpaidSalary: 27802,
        email: 'lizzieclark@gmail.com',

    },
    {
        industry: 'Entertainment, arts & recreation',
        salary: 50000,
        start: 12,
        end: 20,
        lunch: false,
        unpaidHours: 115,
        unpaidSalary: 3159,
        email: 'danestokes@gmail.com',

    },
    {
        industry: 'Property & other services',
        salary: 130000,
        start: 8.5,
        end: 19,
        lunch: true,
        unpaidHours: 575,
        unpaidSalary: 41071,
        email: 'edadawson@gmail.com',

    },
    {
        industry: 'Community & disability services',
        salary: 95000,
        start: 7.5,
        end: 16.5,
        lunch: true,
        nunpaidHours: 230,
        unpaidSalary: 12005,
        email: 'gillianarnold@gmail.com',

    },
    {
        industry: 'Finance, banking & insurance',
        salary: 170000,
        start: 7.5,
        end: 18,
        lunch: true,
        unpaidHours: 575,
        unpaidSalary: 53708,
        email: 'eddiemcbride@gmail.com',

    },
    {
        industry: 'Transport',
        salary: 85000,
        start: 4.5,
        end: 13,
        lunch: true,
        unpaidHours: 230,
        unpaidSalary: 10741,
        email: 'monafrench@gmail.com',

    },
    {
        industry: 'Agriculture, forestry & fishing',
        salary: 70000,
        start: 7.5,
        end: 16.5,
        lunch: true,
        unpaidHours: 230,
        unpaidSalary: 8846,
        email: 'beatricewright@gmail.com',

    },
    {
        industry: 'Administration & professional services',
        salary: 90000,
        start: 8.5,
        end: 17,
        lunch: true,
        unpaidHours: 115,
        unpaidSalary: 5686,
        email: 'hannahgibbs@gmail.com',

    },
    {
        industry: 'Something else. None of above fit what I do',
        salary: 95000,
        start: 7.5,
        end: 16.5,
        lunch: true,
        unpaidHours: 230,
        unpaidSalary: 12005,
        email: 'tracyadkins@gmail.com',

    },
    {
        industry: 'Public services & Emergency Services',
        salary: 100000,
        start: 8.5,
        end: 17,
        lunch: true,
        unpaidHours: 115,
        unpaidSalary: 6318,
        email: 'benjaminskinner@gmail.com',

    },
    {
        industry: 'Warehousing logistics',
        salary: 65000,
        start: 8.5,
        end: 17,
        lunch: true,
        unpaidHours: 115,
        unpaidSalary: 4107,
        email: 'taylorcastillo@gmail.com',

    },
    {
        industry: 'Media & Communication',
        salary: 80000,
        start: 10,
        end: 19,
        lunch: true,
        unpaidHours: 230,
        unpaidSalary: 33488,
        email: 'neilhayward@gmail.com',

    },
    {
        industry: 'Retail',
        salary: 65000,
        start: 8.5,
        end: 17.5,
        lunch: true,
        unpaidHours: 230,
        unpaidSalary: 8214,
        email: 'caldwellwalker@gmail.com',

    },
    {
        industry: 'Retail',
        salary: 60000,
        start: 12,
        end: 20.5,
        lunch: true,
        unpaidHours: 115,
        unpaidSalary: 3791,
        email: 'ferncannon@gmail.com',

    },
    {
        industry: 'Education',
        salary: 60000,
        start: 7.5,
        end: 17.5,
        lunch: true,
        unpaidHours: 460,
        unpaidSalary: 15164,
        email: 'georgealvarez@gmail.com',

    },
    {
        industry: 'Entertainment, arts & recreation',
        salary: 50000,
        start: 9.5,
        end: 17.5,
        lunch: true,
        unpaidHours: 0,
        unpaidSalary: 0,
        email: 'elleryarnold@gmail.com',

    },
    {
        industry: 'Mining',
        salary: 130000,
        start: 5.5,
        end: 17,
        lunch: true,
        unpaidHours: 805,
        unpaidSalary: 57500,
        email: 'groverwalton@gmail.com',

    },
    {
        industry: 'Finance, banking & insurance',
        salary: 70000,
        start: 8.5,
        end: 17.5,
        lunch: true,
        unpaidHours: 230,
        unpaidSalary: 8846,
        email: 'angelicavasquez@gmail.com',

    },
    {
        industry: 'Entertainment, arts & recreation',
        salary: 58000,
        start: 9.5,
        end: 18.5,
        lunch: true,
        unpaidHours: 230,
        unpaidSalary: 7329,
        email: 'austinread@gmail.com',

    },
    {
        industry: 'Community & disability services',
        salary: 50000,
        start: 8.5,
        end: 15.5,
        lunch: true,
        unpaidHours: 230,
        unpaidSalary: 6318,
        email: 'cherylrose@gmail.com',

    },
    {
        industry: 'Entertainment, arts & recreation',
        salary: 82000,
        start: 8.5,
        end: 17,
        lunch: false,
        unpaidHours: 230,
        unpaidSalary: 10362,
        email: 'andreabyrd@gmail.com',

    },
    {
        industry: 'Manufacturing',
        salary: 45000,
        start: 8.5,
        end: 17,
        lunch: false,
        unpaidHours: 230,
        unpaidSalary: 5686,
        email: 'pamelacox@gmail.com',

    },
    {
        industry: 'Transport',
        salary: 92000,
        start: 4,
        end: 2,
        lunch: false,
        unpaidHours: 575,
        unpaidSalary: 29065,
        email: 'kelseymarsh@gmail.com',

    },
    {
        industry: 'Education',
        salary: 72000,
        start: 7.5,
        end: 16,
        lunch: true,
        unpaidHours: 115,
        unpaidSalary: 4549,
        email: 'alicestevens@gmail.com',

    },
    {
        industry: 'Trades & trades assistants',
        salary: 980000,
        start: 4.5,
        end: 14.5,
        lunch: true,
        unpaidHours: 460,
        unpaidSalary: 24769,
        email: 'ferrismadron@gmail.com',

    },
    {
        industry: 'Something else. None of above fit what I do',
        salary: 150000,
        start: 8.5,
        end: 17.5,
        lunch: true,
        unpaidHours: 230,
        unpaidSalary: 18956,
        email: 'ritasilva@gmail.com',

    },
    {
        industry: 'Administration & professional services',
        salary: 110000,
        start: 7.5,
        end:17,
        lunch: true,
        unpaidHours: 575,
        unpaidSalary: 34752,
        email: 'tomhurlbutt@gmail.com',

    },
    {
        industry: 'Health',
        salary: 70000,
        start: 8.5,
        end: 17,
        lunch: true,
        unpaidHours: 115,
        unpaidSalary: 4423,
        email: 'mattfriedman@gmail.com',

    }
    
]; 

const seedEntry =  () => Entry.bulkCreate(entryData); 

module.exports = seedEntry; 