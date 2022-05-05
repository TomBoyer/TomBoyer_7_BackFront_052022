const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const { restart } = require("nodemon");

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
      bcrypt.compare(req.body.password, user.password).then((valid) => {
        if (!valid) {
          return res
            .status(401)
            .json({ message: "Vérifiez votre mot de passe !" });
        }
        // console.log(user.dataValues);
        res.status(200).json({
          userId: user.id,
          token: jwt.sign(
            {
              userId: user.id,
            },
            process.env.SECRET_TOKEN,
            { expiresIn: "24h" }
          ),
        });
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.getOneUser = (req, res) => {
  //   console.log(req.params);
  User.findOne({ where: { id: req.params.id } })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json({ err }));
};

// exports.getAllUsers = (req, res) => {
//     User.scope('noPassword').findAll({
//         order: [
//             ['username', 'ASC']
//         ]
//     })
//         .then(user => res.status(200).json(user))
//         .catch(error => res.status(500).json({ error }))
// };

exports.updateOneUser = (req, res) => {
  User.findOne({ where: { id: req.body.id } })

    .then((user) => {
      if (req.body.oldPassword && req.body.newPassword) {
        bcrypt
          .compare(req.body.oldPassword, user.dataValues.password)
          .then((valid) => {
            if (!valid) {
              return res
                .status(401)
                .json({ error: "c'est pas le bon mdp chef" });
            } else {
              bcrypt
                .hash(req.body.newPassword, 10)
                .then((newHash) => {
                  User.update(
                    { password: newHash },
                    { where: { id: req.body.id } }
                  );
                  res.status(201).json({ message: "Nouveau mdp enregistré" });
                })
                .catch((error) => res.status(500).json({ error }));
            }
          })
          .catch((error) => res.status(500).json({ error }));
      }

      if (req.body.username && req.body.username != user.username) {
        User.update(
          { username: req.body.username },
          { where: { id: req.body.id } }
        );
        res.status(201).json({ message: "Nouveau username enregistré" });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};
