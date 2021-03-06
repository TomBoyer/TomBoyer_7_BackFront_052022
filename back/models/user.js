"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageUrl: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
    },
    {
      clasMethods: {
        associate: function (models) {
          models.User.hasMany(models.Post, {
            sourceKey: "userId",
            foreignKey: "id"
          });
          models.User.hasMany(models.Comment, {
            sourceKey: "userId",
            foreignKey: "id"
          });
        },
      },
    }
  );

  return User;
};

