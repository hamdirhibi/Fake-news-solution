const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth");
const QuestionController = require("../controllers/question");

router.post("/new", checkAuth, QuestionController.question_new);

router.put("/like/:id", checkAuth, QuestionController.question_like);

router.put("/dislike/:id", checkAuth, QuestionController.question_dislike);

module.exports = router;
