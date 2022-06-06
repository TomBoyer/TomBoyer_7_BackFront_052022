"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {

      Comment.belongsTo(models.Post, {
        foreignKey: "postId",
      });

      models.Comment.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }

  Comment.init(
    {
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      postId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
