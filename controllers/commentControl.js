const {Comment} = require('../models')
//si up pour permettre img dans dans comment : 
// const fs = require('fs')

exports.createComment = (req, res) => {
    const newComment = {
        userId: req.body.id,
        postId: req.body.postId,
        content: req.body.content
    };
    Comment.create(newComment)
        .then(() => res.status(201).json({ message: `Nouveau commentaire créé sous le post ${req.body.postId} !` }))
        .catch(error => res.status(500).json({ error }));
};

// exports.getAllComments = (req, res) => {
//     Post.findAll({
//       order: [["updatedAt", "DESC"]],
//       include: {
//         model: Post,
//         attributes: ["id"],
//       },
//     })
//       .then((comments) => {
//         res.status(200).json(comments);
//       })
//       .catch((error) => {
//         res.status(400).json({ message: error.message });
//       });
//   };

exports.deleteComment = (req, res) => {
    Comment.destroy(
        { where: { id: req.params.id } }
    )
    .then(() => res.status(200).json({ message: 'Le commentaire à bien été supprimé !' }))
    .catch(error => res.status(500).json({ error }));
};
