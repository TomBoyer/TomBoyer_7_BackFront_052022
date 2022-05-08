// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here 1:
//       models.User.hasMany(models.Post, {onDelete: 'CASCADE'})
//       models.User.hasMany(models.Comment, {onDelete: 'CASCADE'})
//     }
//   }
//   User.init({
//     email: DataTypes.STRING,
//     username: DataTypes.STRING,
//     password: DataTypes.STRING,
//     isAdmin: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };

'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',{
    username:{
      type: DataTypes.STRING,
      allowNull: false
    }, 
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false
    },
    isAdmin:{ 
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
    }
  },{
    clasMethods: {
      associate: function(models){
        models.User.hasMany(models.Post);
      models.User.hasMany(models.Comment);
    },

  } 
 })
  
  return User;
};
