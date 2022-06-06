"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      Like.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
        },
      });

      Like.belongsTo(models.Post, {
        foreignKey: "postId",
        as: "Post",
      });
    }
  }
  Like.init(
    {
      idUsers: DataTypes.INTEGER,
      idPosts: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "like",
    }
  );
  return Like;
};
