"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {

    const date = new Date();
    const hash = bcrypt.hashSync("123Soleil!", 13);

    await queryInterface.bulkInsert("Users", [
      {
        id: 1,
        email: "admin@groupomania.fr",
        isAdmin: 1,
        password: hash,
        username: "Admin",
        imageUrl: "http://localhost:8080/images/Pic2.jpg",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 2,
        email: "test1@test1.fr",
        isAdmin: 0,
        password: hash,
        username: "test1",
        imageUrl: "http://localhost:8080/images/Pic3.jpg",
        createdAt: date,
        updatedAt: date,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null);
  },
};
