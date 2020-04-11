const express = require("express");
const router = express.Router();

const NewsController = require("../controllers/news");

router.get("/:category", NewsController.FetchNews);
router.get("/vote/:id", NewsController.GetVotes);
router.post("/vote/downvote/:id", NewsController.DownVote);
router.post("/vote/upvote/:id", NewsController.UpVote);

module.exports = router;
