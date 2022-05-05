const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");

exports.signup = (req, res) => {
    console.log(req.body);
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

