const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Entry extends Model {}

Entry.init( 
    { 
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true
        },  
        industry: { 
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        salary: { 
            type: DataTypes. INTEGER,
            allowNull: false
        },
        start: { 
            type: DataTypes.DECIMAL(4,2), 
            allowNull: false, 
        },
        end: {
            type: DataTypes.DECIMAL(4,2), 
            allowNull:false
        },
        lunch: {
            type: DataTypes.BOOLEAN,
            allowNull: false, 
            defaultValue: false   
        },
        unpaidHours: {
            type: DataTypes.INTEGER,  
            
        },
         unpaidSalary: {
           type: DataTypes.INTEGER, 
         
        },
        email: { 
            type: DataTypes.STRING, 
            allowNull:false, 
            validate: { 
                isEmail: true
            }
        },
        created_at: { 
            type: DataTypes.DATE, 
            allowNull: false, 
            defaultValue: Sequelize.NOW
        }
    }, 
    { 
        sequelize, 
        timestamps: false, 
        freezeTableName: true, 
        underscored: true, 
        modelName: 'entry'
    }
); 

module.exports = Entry; 