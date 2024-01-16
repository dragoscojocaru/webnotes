const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  const Token = sequelize.define("Token", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
    token: {
      type: DataTypes.STRING,
      allowNull: false
    }},
    {
        classMethods:{
            associate:function(models){
                Token.belongsTo(models.User, { foreignKey:'userId'} );
            }
        }
 });

 return Token;
};




