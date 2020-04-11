const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");


const questionRoutes = require("./routes/question");
const commentRoutes = require("./routes/comment");

const newsRoutes = require("./routes/news");
const subcommentRoutes = require("./routes/subcomment");
require("dotenv").config();

mongoose.connect("mongodb://test:C123456@ds217099.mlab.com:17099/fakenews", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.Promise = global.Promise;

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/news", newsRoutes);

app.use("/question", questionRoutes);

app.use("/comment", commentRoutes);

app.use("/subcomment", subcommentRoutes);

app.use("/", (req, res) => {
  res.status(200).json({ message: "hello world" });
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
