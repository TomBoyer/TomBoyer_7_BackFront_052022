const { Post, User, Comment } = require("../models");
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
    .catch((error) => res.status(500).json({ error }));
};

exports.getAllPosts = (req, res) => {
  Post.findAll({
    include: [
      // {
      //   model: User,
      //   // as: "Users",
      //   attributes: ["username"],
      // },
      {
        model: Comment,
        as : "Comment",
        // include: [
        //   { model: User,
        //     attributes: ["username"]
        //   }],
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
        as: "Comment"
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
