const User = require("../models/user");
const Comment = require("../models/comment");
const SubComment = require("../models/subcomment");

const getComment = async (obj) => {
  return Comment.getComment(obj);
};

const createSubComment = async (obj) => {
  return SubComment.create(obj);
};

exports.subcomment_comment = async (req, res) => {
  try {
    const subComment = await createSubComment({
      title: req.body.title,
      author: req.userData.userId,
    });

    const comment = await getComment({
      _id: req.params.id,
    });

    comment.subcomments.push({ _id: subComment._id });

    comment.save().then((result) => {
      return res.status(200).json(result);
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

exports.subcomment_like = async (req, res) => {
  const subcomment = await getComment({ _id: req.params.id });
  const isLikedBefore = subcomment.likes.find(
    (element) => element._id == req.userData.userId
  );
  if (isLikedBefore) {
    return res.status(409).json({ message: "user liked this comment before" });
  } else {
    subcomment.likes.push({ _id: req.userData.userId });

    // remove if disliked
    subcomment.dislikes.pull({ _id: req.userData.userId });
    subcomment
      .save()
      .then(() => res.status(200).json({ message: "comment liked" }))
      .catch((err) => res.status(500).json(err.message));
  }
};
exports.subcomment_dislike = async (req, res) => {
  try {
    const subcomment = await getComment({ _id: req.params.id });

    const isDisLikedBefore = subcomment.dislikes.find(
      (element) => element._id == req.userData.userId
    );
    if (isDisLikedBefore) {
      return res
        .status(409)
        .json({ message: "user disliked this comment before" });
    } else {
      subcomment.dislikes.push({ _id: req.userData.userId });

      // remove if liked
      subcomment.likes.pull({ _id: req.userData.userId });
      subcomment
        .save()
        .then(() => res.status(200).json({ message: "comment disliked" }))
        .catch((err) => res.status(500).json(err.message));
    }
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
