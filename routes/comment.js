const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth");
const CommentController = require("../controllers/comment");

router.post("/new/:id", checkAuth, CommentController.comment_question);

router.put("/like/:id", checkAuth, CommentController.comment_like);

router.put("/dislike/:id", checkAuth, CommentController.comment_dislike);

module.exports = router;
