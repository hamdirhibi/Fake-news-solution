const Question = require("../models/question");
const User = require("../models/user");

const createQuestion = (obj) => {
  return Question.create(obj);
};

const getUser = async (obj) => {
  return await User.findOne(obj);
};

const getQuestion = async (obj) => {
  return await Question.findOne(obj);
};

const updateQuestion = async (obj) => {
  return await Question.updateOne({ obj });
};

exports.question_new = async (req, res) => {
  try {
    const user = await getUser({ _id: req.userData.userId });
    createQuestion({
      title: req.body.title,
      author: user._id,
    }).then((question) => {
      return res.status(200).json(question);
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

exports.question_like = async (req, res) => {
  try {
    question = await getQuestion({ _id: req.params.id });
    const isLikedBefore = question.likes.find(
      (element) => element._id == req.userData.userId
    );
    if (isLikedBefore) {
      return res
        .status(409)
        .json({ message: "user liked this question before" });
    } else {
      question.likes.push({ _id: req.userData.userId });

      // remove if disliked
      question.dislikes.pull({ _id: req.userData.userId });
      question
        .save()
        .then(() => res.status(200).json({ message: "question liked" }))
        .catch((err) => res.status(500).json(err.message));
    }
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

exports.question_dislike = async (req, res) => {
  try {
    question = await getQuestion({ _id: req.params.id });
    const isDisLikedBefore = question.dislikes.find(
      (element) => element._id == req.userData.userId
    );
    if (isDisLikedBefore) {
      return res
        .status(409)
        .json({ message: "user disliked this question before" });
    } else {
      question.dislikes.push({ _id: req.userData.userId });

      question.likes.pull({ _id: req.userData.userId });

      question
        .save()
        .then(() => res.status(200).json({ message: "question disliked" }))
        .catch((err) => res.status(500).json(err.message));
    }
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
