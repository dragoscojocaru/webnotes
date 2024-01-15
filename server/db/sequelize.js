const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  'webnotes',
  'root',
  'secret',
   {
     host: 'webnotes-mysql',
     dialect: 'mysql'
   }
 );

 const models = [
    // Add here all of your models
    require('../models/user'),
    require('../models/discipline'),    
    require('../models/note'),  
   ].map(m=>m(sequelize));


 sequelize.sync().then(() => {
    console.log('Users table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
 

module.exports = sequelize;