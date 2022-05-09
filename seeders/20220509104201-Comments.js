"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert("Comments", [
      {
        userId: "1",
        postId: "2",
        content: "Admin comment post de Test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "2",
        postId: "1",
        content: "Test comment post de Admin",
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
    await queryInterface.bulkDelete("Comments", null);
  },
};
