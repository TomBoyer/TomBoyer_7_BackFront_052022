const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");

exports.signup = (req, res) => {
//   console.log(req.body);
  bcrypt
    .hash(req.body.password, 17)
    .then((hash) => {
      const newUser = {
        email: req.body.email,
        username: req.body.username,
        password: hash,
      };

      User.create(newUser)
        .then(() =>
          res
            .status(201)
            .json({ message: `Nouvel utilisateur ${req.body.username} créé` })
        )
        .catch(() =>
          res.status(400).json({ message: "Utilisateur déjà créé" })
        );
    })
    .catch((err) => res.status(500).json({ err }));
};

exports.login = (req, res) => {
  User.findOne({
    where: { email: req.body.email },
  })
    .then((user) => {
    //   console.log(req);
      if (!user) {
        return res
          .status(401)
          .json({ message: `${req.body.email} n'existe pas !` });
      }
      bcrypt.compare(req.body.password, user.password)
      .then((valid) => {
        if (!valid) {
          return res
            .status(401)
            .json({ message: "Vérifiez votre mot de passe !" });
        }
        // console.log(user.dataValues);
        res.status(200).json({
            userId : user.id,
            token: jwt.sign(
                {
                    userId:user.id
                },process.env.SECRET_TOKEN,
                {expiresIn : "24h"}
            )
        })
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

