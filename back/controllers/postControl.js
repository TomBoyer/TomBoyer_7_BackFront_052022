const { Post, User, Comment, sequelize } = require("../models");
const fs = require("fs");

exports.createPost = (req, res) => {
  let postImage;

  if (req.file) {
    postImage = `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`;
  }

  const newPost = {
    userId: req.body.userId,
    content: req.body.content,
    // image: postImage,
  };

  Post.create(newPost)
    .then((post) => res.status(201).json(post))
    .catch((error) => {
      // console.log(error);
      res.status(500).json({ error });
    });
};

exports.getAllPosts = (req, res) => {
  Post.findAll({
    attributes: {
      include: [
        [
          sequelize.fn(
            "DATE_FORMAT",
            sequelize.col("post.createdAt"),
            "%d/%m/%y %H:%i"
          ),
          "createdAt",
        ],
      ],
    },
    include: [
      {
        model: User,
        // as: "Users",
        attributes: ["username"],
      },
      {
        model: Comment,
        as: "Comment",
        include: [{ model: User, attributes: ["username"] }],
        attributes: {
          include: [
            [
              sequelize.fn(
                "DATE_FORMAT",
                sequelize.col("Comment.createdAt"),
                "%d/%m/%y %H:%i"
              ),
              "createdAt",
            ],
          ],
        },
      },
    ],

    order: [
      ["createdAt", "DESC"],
      [Comment, "createdAt", "DESC"],
    ],
  })
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      res.status(400).json({ message: error.message });
    });
};

exports.getOnePost = (req, res) => {
  Post.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Comment,
        as: "Comment",
      },
    ],
  })
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      res.status(400).json({ message: error.message });
    });
};

exports.deletePost = (req, res) => {
  Post.findOne({ where: { id: req.params.id } })
    .then((Post) => {
      // console.log("1 : " + Post.userId);
      // console.log("2 : " + req.params.userId);

      if (!Post) {
        return res.status(404).json({ error: "Post non trouvé !" });
      }

      //soucis ici
      if (Post.userId !== req.params.userId) {
        return res.status(403).json({ error: "Requête non authorisée !" });
      }

      if (Post.image != null) {
        const filename = Post.image.split("/images/")[1];
        fs.unlink(`images/${filename}`, (err) => {
          if (err) throw err;
        });
      }

      Post.destroy({ where: { id: req.params.id } })
        .then(() => res.status(201).json({ message: "Post supprimée" }))
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
