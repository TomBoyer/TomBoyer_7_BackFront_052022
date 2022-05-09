"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert("Posts", [
      {
        userId: "1",
        content: "Premier Post de l'admin Groupomania",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "2",
        content: "Premier Post de l'utilisateur Test de Groupomania",
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
    await queryInterface.bulkDelete("Posts", null);
  },
};
