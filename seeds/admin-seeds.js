const { Admin } = require('../models'); 

const adminData = [ 
    { 
        name: 'Michelle_Watts',
        email: '1234@gmail.com', 
        password: ********, 
    },
    {
        name: 'Cat_Ormerod', 
        email: '2345@gmail.com', 
        password: ******, 
    }, 
    {
        name: 'Josep Gaspar',
        email: '3456@gmail.com', 
        password: *******, 
    }, 
    { 
        name: 'Jason Bolton', 
        email: '4567@gmail.com', 
        password: *******, 
    },
];

const seedAdmin = () => Admin.bulkCreate(adminData); 

module. exports = seedAdmin; 