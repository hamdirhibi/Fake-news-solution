const Question = require("../models/question");
const User = require("../models/user");
const Comment = require("../models/comment");
const getQuestion = async (obj) => {
  return await Question.findOne(obj);
};

const createComment = async (obj) => {
  return await Comment.create(obj);
};

const getComment = async (obj) => {
  return await Comment.findOne(obj);
};

exports.comment_question = async (req, res) => {
  try {
    const comment = await createComment({
      title: req.body.title,
      author: req.userData.userId,
    });

    const question = await getQuestion({ _id: req.params.id });
    question.comments.push(comment);
    question.save().then((question) => {
      return res.status(200).json(question);
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

exports.comment_like = async (req, res) => {
  try {
    const comment = await getComment({ _id: req.params.id });
    const isLikedBefore = comment.likes.find(
      (element) => element._id == req.userData.userId
    );
    if (isLikedBefore) {
      return res
        .status(409)
        .json({ message: "user liked this comment before" });
    } else {
      comment.likes.push({ _id: req.userData.userId });

      // remove if disliked
      comment.dislikes.pull({ _id: req.userData.userId });
      comment
        .save()
        .then(() => res.status(200).json({ message: "comment liked" }))
        .catch((err) => res.status(500).json(err.message));
    }
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

exports.comment_dislike = async (req, res) => {
  try {
    const comment = await getComment({ _id: req.params.id });
    console.log(comment);
    const isDisLikedBefore = comment.dislikes.find(
      (element) => element._id == req.userData.userId
    );
    if (isDisLikedBefore) {
      return res
        .status(409)
        .json({ message: "user disliked this comment before" });
    } else {
      comment.dislikes.push({ _id: req.userData.userId });

      // remove if liked
      comment.likes.pull({ _id: req.userData.userId });
      comment
        .save()
        .then(() => res.status(200).json({ message: "comment disliked" }))
        .catch((err) => res.status(500).json(err.message));
    }
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
