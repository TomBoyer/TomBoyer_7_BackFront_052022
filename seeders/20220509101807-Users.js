"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert("Users", [
      {
        username: "Admin",
        email: "admin@groupomania.fr",
        password: "123Soleil",
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "test",
        email: "test@test.fr",
        password: "123Soleil",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
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
