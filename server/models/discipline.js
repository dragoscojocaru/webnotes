const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Discipline = sequelize.define("Discipline", {
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
    year: {
        type: DataTypes.INTEGER
    }
 });

 return Discipline;
};


