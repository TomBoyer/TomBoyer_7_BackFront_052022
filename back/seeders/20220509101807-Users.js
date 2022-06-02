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
        imageUrl: "https://cdn2.iconfinder.com/data/icons/blocked-out/29/guest-512.png",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 2,
        email: "test1@test1.fr",
        isAdmin: 0,
        password: hash,
        username: "test1",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS6_xWPTBB18OImdVZpbtnOprAHdnBLQgxXg&usqp=CAU",
        createdAt: date,
        updatedAt: date,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null);
  },
};
