"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

    const date = new Date();
    const hash = bcrypt.hashSync("123Soleil", 13);

    await queryInterface.bulkInsert("Users", [
      {
        id: 1,
        email: "admin@groupomania.fr",
        isAdmin: 1,
        password: hash,
        username: "Admin",
        /* imageUrl: null, */
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 2,
        email: "test1@test1.fr",
        isAdmin: 0,
        password: hash,
        username: "test1",
        /* imageUrl: null, */
        createdAt: date,
        updatedAt: date,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("Users", null);
  },
};
