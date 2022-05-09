"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

    const date = new Date();

    await queryInterface.bulkInsert("Comments", [
      {
        id: 1,
        userId: 1,
        postId: 2,
        content: "Premier Comment de Admin sous le post 1 de test1",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 2,
        userId: 2,
        postId: 1,
        content: "Premier Comment de test1 sous le post 1 de admin",
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
    await queryInterface.bulkDelete("Comments", null);
  },
};
