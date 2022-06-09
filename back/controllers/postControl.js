const { Post, User, Comment, sequelize } = require("../models");
const fs = require("fs");

//CRUD : créer un Post
exports.createPost = (req, res) => {
  // let postImage;

  // if (req.file) {
  //   postImage = `${req.protocol}://${req.get("host")}/images/${
  //     req.file.filename
  //   }`;
  // }

  const newPost = {
    // userId: req.body.userId,
    userId: req.token.userId,
    content: req.body.content,
    image: req.body.image,
  };

  console.log(newPost);

  Post.create(newPost)
    .then((post) => res.status(201).json(post))
    .catch((error) => {
      // console.log(error);
      res.status(500).json({ error });
    });
};

//CRUD : récupérer tous les Post
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
        attributes: ["username", "imageUrl"],
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

//CRUD : récupérer un seul Post
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

//CRUD : supprimer un Post
exports.deletePost = (req, res) => {
  Post.findOne({ where: { id: req.params.id } })
    .then((post) => {
      if (!post) {
        return res.status(404).json({ error: "Post non trouvé !" });
      }

      //soucis ici
      // if (Post.userId !== req.params.userId) {
      //   return res.status(403).json({ error: "Requête non authorisée !" });
      // }
      // if (Post.image != null) {
      //   const filename = Post.image.split("/images/")[1];
      //   fs.unlink(`images/${filename}`, (err) => {
      //     if (err) throw err;
      //   });
      // }

      if (post.userId == req.token.userId || req.token.isAdmin) {
        Post.destroy({ where: { id: req.params.id } })
          .then(() => {
            res.status(201).json({ message: "Post supprimé" });
          })
          .catch((error) => res.status(500).json({ error }));
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

//CRUD : modifier un Post
exports.updatePost = (req, res) => {
  Post.findOne({ where: { id: req.params.id } })
    .then((post) => {
      if (!post) {
        return res.status(404).json({ error: "Post non trouvé !" });
      }

      if (post.userId == req.token.userId || req.token.isAdmin) {
        Post.update(
          { content: req.body.content, image: req.body.image },
          { where: { id: req.params.id } }
        )
          .then(() => {
            // console.log(res);
            res.status(201).json({ message: "Post modifié" });
          })
          .catch((error) => res.status(500).json({ error }));
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

// exports.likePost = (req, res) => {
//   Like.findOne({
//     where: {
//       userId: req.body.userId,
//       postId: req.body.postId,
//     },
//   })
//     .then((response) => {
//       // Si l'utilisateur n'a jamais liké ou disliké le post
//       if (response == null) {
//         // S'il clique sur "like"
//         if (req.body.likeValue == 1) {
//           Like.create({
//             userId: req.body.userId,
//             postId: req.body.postId,
//             liked: req.body.likeValue,
//           });
//           Post.increment(
//             { likes: 1 },
//             { where: { id: req.body.postId } }
//           );
//           res.status(201).json({ message: "Like ajouté" });
//         }
//         // S'il clique sur "dislike"
//         else if (req.body.likeValue == -1) {
//           Like.create({
//             userId: req.body.userId,
//             postId: req.body.postIdId,
//             liked: req.body.likeValue,
//           });
//           Post.increment(
//             { dislikes: 1 },
//             { where: { id: req.body.postId } }
//           );
//           res.status(201).json({ message: "Dislike ajouté" });
//         }
//       }

//       // Si l'utilisateur a déjà liké la Post
//       else if (response.dataValues.liked == 1) {
//         // S'il clique sur "dislike"
//         if (req.body.likeValue == -1) {
//           Like.update(
//             { liked: -1 },
//             {
//               where: {
//                 [Op.and]: [
//                   { postId: req.body.postId },
//                   { userId: req.body.userId },
//                 ],
//               },
//             }
//           );
//           Post.increment(
//             { dislikes: 1 },
//             { where: { id: req.body.postId } }
//           );
//           Post.decrement(
//             { likes: 1 },
//             { where: { id: req.body.postId } }
//           );
//           res.status(201).json({ message: "Dislike ajouté & like retiré" });
//         }
//         // S'il clique sur "like"
//         else {
//           Like.destroy({
//             where: {
//               [Op.and]: [
//                 { postId: req.body.postId },
//                 { userId: req.body.userId },
//               ],
//             },
//           });
//           Post.decrement(
//             { likes: 1 },
//             { where: { id: req.body.postId } }
//           );
//           res.status(201).json({ message: "Like retiré" });
//         }
//       }

//       // Si l'utilisateur a déjà disliké la Post
//       else if (response.dataValues.liked == -1) {
//         // S'il clique sur "like"
//         if (req.body.likeValue == 1) {
//           Like.update(
//             { liked: 1 },
//             {
//               where: {
//                 [Op.and]: [
//                   { postId: req.body.postId },
//                   { userId: req.body.userId },
//                 ],
//               },
//             }
//           );
//           Post.increment(
//             { likes: 1 },
//             { where: { id: req.body.postId } }
//           );
//           Post.decrement(
//             { dislikes: 1 },
//             { where: { id: req.body.postId } }
//           );
//           res.status(201).json({ message: "Like ajouté & dislike retiré" });
//         }
//         // S'il clique sur "dislike"
//         else {
//           Like.destroy({
//             where: {
//               [Op.and]: [
//                 { postId: req.body.postId },
//                 { userId: req.body.userId },
//               ],
//             },
//           });
//           Post.decrement(
//             { dislikes: 1 },
//             { where: { id: req.body.postId } }
//           );
//           res.status(201).json({ message: "Dislike retiré" });
//         }
//       }
//     })
//     .catch((error) => res.status(500).json({ error }));
// };
