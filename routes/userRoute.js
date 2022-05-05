// Importation express
const express = require("express");
const router = express.Router();

const userControl = require("../controllers/userControl");

//routes
router.post("/signup", userControl.signup);
router.post("/login", userControl.login);

module.exports = router;
