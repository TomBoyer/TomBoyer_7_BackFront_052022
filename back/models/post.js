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

      Post.hasMany(models.like, {
        foreignKey: "postId",
        as: "Like",
      })

      models.Post.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  Post.init(
    {
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      image:DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
