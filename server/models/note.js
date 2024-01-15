const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Note = sequelize.define("Note", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
        type: DataTypes.TEXT
    },
    created_by: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id"
        }
    },
    discipline_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "disciplines",
          key: "id"
        }
    }
 });

 return Note;
};


