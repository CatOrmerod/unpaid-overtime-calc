const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Admin extends Model {}

Admin.init (
    { 
        id: { 
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true,
        },
        name: { 
            type: DataTypes.STRING, 
            allowNull: false, 
        }, 
        email: { 
            type: DataTypes.EMAIL, 
            allowNull: false, 
            unique: true, 
            validate: { 
                isEmail: true
            }
        },
        password: { 
            type: DataTypes. STRING, 
            allowNull: false, 
            field: 'password',
            validate: { 
                len: [6,10],
                isUppercase: true, 
                isLowerCase: true, 
                isInt: true,
                // validate: {
                //     checkPassword(value) {
                //       if (
                //         !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/.test(
                //           value
                //         )
                //       ) {
                //         throw new CustomError(400, 'Provide a valid password!');
                //       }
                //     },
          
                //     is: {
                //       args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/,
                //       msg:
                //         'The password must contain atleast 8 characters including at least 1 uppercase, 1 lowercase and one digit.'
                //     }
                //   }
                // }
            },
        }
        
    },
    {
        sequelize, 
        timestamps: false, 
        freezeTableName: true, 
        enderscored: true, 
        modelName: 'admin'
    }
    
);

module.exports = Admin;