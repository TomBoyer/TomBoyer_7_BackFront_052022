// Importation express
const express = require("express");
const router = express.Router();

const postControl = require("../controllers/postControl");
const auth = require("../middleware/authMiddleware");
const multer = require("../middleware/multer-config");

//routes
router.post("/", /* auth, */ multer, postControl.createPost);

// router.get("/", auth, postControl.getAllPosts);

// router.put("/post/:id", auth, multer, postControl.updatePost);

// router.delete("/post/:id", auth, postControl.deletePost);

module.exports = router;
