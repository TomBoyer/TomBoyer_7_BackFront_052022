// Importation express
const express = require("express");
const router = express.Router();

const userControl = require("../controllers/userControl");
const auth = require("../middleware/authMiddleware");
const password = require("../middleware/passwordMiddleware");
const multer = require('../middleware/multer-config');

//routes
router.post("/signup", password, userControl.signup);
router.post("/login", userControl.login);

router.get("/:id", auth, userControl.getOneUser);

router.put("/", auth, userControl.updateOneUser);

router.delete('/:id', auth, userControl.deleteUser);

module.exports = router;
