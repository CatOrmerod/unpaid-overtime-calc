const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Admin extends Model {
  checkPassword(loginPw) {
    return bcrypt.compare(loginPw, this.password);
  }
}

Admin.init(
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
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password',
      validate: {
        len: [8],
        isUppercase: true,
        isLowerCase: true,
        isInt: true,
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newAdminData) => {
        newAdminData.password = await bcrypt.hash(newAdminData.password, 10);
        return newAdminData;
      },
      beforeUpdate: async (updatedAdminData) => {
        updatedAdminData.password = await bcrypt.hash(
          updatedAdminData.password,
          10
        );
        return updatedAdminData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    enderscored: true,
    modelName: 'admin',
  }
);

module.exports = Admin;