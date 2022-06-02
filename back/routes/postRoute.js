// Importation express
const express = require("express");
const router = express.Router();

const postControl = require("../controllers/postControl");
const auth = require("../middleware/authMiddleware");
const multer = require("../middleware/multer-config");
// const idPostCompare = require("../middleware/idPostCompare");

//routes
router.post("/", auth, multer, postControl.createPost);

router.get("/", auth, postControl.getAllPosts);
router.get("/:id", auth, postControl.getOnePost);

router.put("/:id", auth, multer, postControl.updatePost);

router.delete("/:id", auth, /* idPostCompare, */ multer, postControl.deletePost);

module.exports = router;
