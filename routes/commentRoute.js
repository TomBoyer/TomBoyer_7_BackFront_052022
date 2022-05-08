// Importation express
const express = require("express");
const router = express.Router();

const commentControl = require("../controllers/commentControl");
const auth = require("../middleware/authMiddleware");
const multer = require("../middleware/multer-config");

//routes
router.post("/", auth, /* multer, */ commentControl.createComment)
// router.get("/:id", auth,  commentControl.getAllComments)
router.delete("/:id", auth, commentControl.deleteComment)

module.exports = router;