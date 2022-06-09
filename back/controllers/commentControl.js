const { Comment } = require("../models");

//CRUD : créer un commentaire
exports.createComment = (req, res) => {
  const newComment = {
    userId: req.token.userId,
    postId: req.body.postId,
    content: req.body.content,
  };
  Comment.create(newComment)
    .then(() =>
      res.status(201).json({
        message: `Nouveau commentaire créé sous le post ${req.body.postId} !`,
      })
    )
    .catch((error) => res.status(500).json({ error }));
};

//CRUD : supprimer un commentaire
exports.deleteComment = (req, res) => {
  Comment.findOne({ where: { id: req.params.id } })
    .then((comment) => {
      if (!comment) {
        return res.status(404).json({ error: "Comment non trouvé !" });
      }

      // //soucis ici
      // if (Comment.userId !== req.params.userId) {
      //   return res.status(403).json({ error: "Requête non authorisée !" });
      // }
      if (comment.userId == req.token.userId || req.token.isAdmin) {
        Comment.destroy({ where: { id: req.params.id } })
          .then(() =>
            res
              .status(200)
              .json({ message: "Le commentaire à bien été supprimé !" })
          )
          .catch((error) => res.status(500).json({ error }));
      }
    })
    .catch((error) => res.status(500).json({ error }));
};
