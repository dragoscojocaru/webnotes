const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    }
 });

 return User;
};


