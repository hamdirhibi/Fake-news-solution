const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth");
const SubCommentController = require("../controllers/subcomment");

router.post("/new/:id", checkAuth, SubCommentController.subcomment_comment);
router.put("/like/:id", checkAuth, SubCommentController.subcomment_like);

router.put("/dislike/:id", checkAuth, SubCommentController.subcomment_dislike);

module.exports = router;
