// const models = require("../models");
// const Post = models.Post;

// module.exports = async (req, res, next) => {
//     // console.log("le log:" + userId);
//   try {
//     // vérifier si l'id du post dans les params de la requete existe. Si le post existe vérifier que le userId correspond à au token enregistré
//     const post = await Post.findByPk(req.params.id);
//     if (!post) throw { message: "post non trouvé", status: 404 };
//     if (post.userId !== req.token.USER_ID)
//       throw { mesage: "Seul l'auteur peut supprimer ce post", status: 403 };

//     next();
//   } catch (err) {
//     return err.post && err.status
//       ? res.status(err.status).json({ post: err.post })
//       : res.status(400).json(err);
//   }
// };
