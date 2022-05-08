"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Comments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      postId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Posts",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      image: { allowNull: true, type: Sequelize.STRING },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    // queryInterface.addConstraint("Comments", {
    //   type: "foreign key",
    //   name: "fk_comments_users",
    //   fields: ["userId"],
    //   references: {
    //     table: "Users",
    //     field: "id",
    //   },
    //   onDelete: "cascade",
    //   onUpdate: "cascade",
    // });

    // queryInterface.addConstraint("Comments", {
    //   type: "foreign key",
    //   name: "fk_posts_users",
    //   fields: ["postId"],
    //   references: {
    //     table: "Posts",
    //     field: "id",
    //   },
    //   onDelete: "cascade",
    //   onUpdate: "cascade",
    // });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Comments");
    // queryInterface.removeConstraint("Comments", "fk_comments_users");
    // queryInterface.removeConstraint("Comments", "fk_posts_users");
  },
};
