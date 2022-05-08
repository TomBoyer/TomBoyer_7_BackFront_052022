// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Post extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       models.Post.belongsTo(models.User, {
//         onDelete: "cascade",
//             foreignKey: { 
//                allowNull: false }
//       })
//       models.Post.hasMany(models.Comment)
//     }
//   }
//   Post.init({
//     userId: DataTypes.INTEGER,
//     content: DataTypes.TEXT,
//     image: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Post',
//   });
//   return Post;
// };

'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post',{
    userId: DataTypes.INTEGER,
    // name: DataTypes.STRING,
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

