const mongoose = require("mongoose");
const axios = require("axios");
const News = require("../models/news");

exports.FetchNews = async (req, res) => {
  const request = await axios.get(
    "http://newsapi.org/v2/top-headlines?category=" +
      req.params.category +
      "&apiKey=bbd132456c5144159a4b55f4a71e5d94"
  );
  res.send(request.data.articles);
};

exports.GetVotes = async (req, res) => {
  const news = await News.findOne({ id: req.params.id });
  if (!news) {
    res.send({ votes: 0 });
  } else res.send({ votes: news.votes });
};

exports.UpVote = async (req, res) => {
  var news = await News.findOne({ id: req.params.id });
  if (!news) {
    news = new News({ id: req.params.id, votes: 0 });
  }
  news.votes++;
  await news.save();
  res.send({});
};

exports.DownVote = async (req, res) => {
  var news = await News.findOne({ id: req.params.id });
  if (!news) {
    news = new News({ id: req.params.id, votes: 0 });
  }
  news.votes--;
  await news.save();
  res.send({});
};
