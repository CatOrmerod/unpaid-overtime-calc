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
        Industry: { 
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        salary: { 
            type: DataTypes. INTEGER,
            allowNull: false
        },
        start_time: { 
            type: DataTypes.DECIMAL(4,2), 
            allowNull: false, 
        },
        finish_time: {
            type: DataTypes.DECIMAL(4,2), 
            allowNull:false
        },
        had_lunch: {
            type: DataTypes.BOOLEAN,
            allowNull: false, 
            defaultValue: false   
        },
        name: { 
            type: DataTypes.STRING, 
            allowNull: false, 
        },
        email: { 
            type: DataTypes.STRING, 
            allowNull:false, 
            unique: true, 
            validate: { 
                isEmail: true
            }
        },
        created_at: { 
            type: DataTypes.DATEONLY, 
            allowNull: false, 
            defaultValue: sequelize.fn('NOW') 
        },
        created_at2: { 
            type: Sequelize.DATE, 
            defaultValue: Sequelize.NOW
        },
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