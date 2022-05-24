// 'use strict';
// const { Model } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   const Comment = sequelize.define('Comment',{
//     postId: DataTypes.INTEGER,
//     userId: DataTypes.INTEGER,
//     content: DataTypes.STRING
    
//   },{
//     clasMethods: {
//       associate: function(models){
//         models.Comment.belongsTo(models.User, {
//           foreignKey: 'userId'
//         })
//         models.Comment.belongsTo(models.Post, {
//           foreignKey: 'postId'
//         })
//     },
//   } 
//  })
  
//   return Comment;
// };

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {

  static associate(models) {
    // define association here
    Comment.belongsTo(models.Post, {
      foreignKey: "postId",
    });

    //test
    models.Comment.belongsTo(models.User, {
      foreignKey:"userId",
    });
  }
}
  
  Comment.init({
    content: DataTypes.STRING,
    userId : DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};