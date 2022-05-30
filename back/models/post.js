// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   const Post = sequelize.define(
//     "Post",
//     {
//       userId: DataTypes.INTEGER,
//       content: DataTypes.STRING,
//     },
//     {
//       clasMethods: {
//         associate: function (models) {
//           //models.Post.hasMany(models.Comment);
//           models.Post.hasMany(models.Comment, {
//             foreignKey: "postId",
//             as: "Comment",
//           });

//           models.Post.belongsTo(models.User, {
//             foreignKey: "userId",
//           });
//         },
//       },
//     }
//   );

//   return Post;
// };

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // define association here
      Post.hasMany(models.Comment, {
        //sourceKey: "postId",
        foreignKey: "postId",
        as: "Comment",
      });

      //test
      models.Post.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  Post.init(
    {
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
