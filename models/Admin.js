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
            type: FataTypes.STRING, 
            allowNull: false, 
            unique: true, 
            validate: { 
                isEmail: true
            }
        },
        password: { 
            type: DataTypes. STRING, 
            allowNull: false, 

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