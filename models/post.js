
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post',{
    userId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    
  },{
    
    clasMethods: {
      associate: function(models){
        models.Post.hasMany(models.Comment);
        
        models.Post.belongsTo(models.User, {
          foreignKey: 'userId'
        })
        
    },

  } 
 })
  
  return Post;
};

