const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

// function to add User
const createUser = async ({ firstName, lastName, email, password }) => {
  return await User.create({ firstName, lastName, email, password });
};

//function to get User
const getUser = async (obj) => {
  return await User.findOne(obj);
};

exports.user_signup = async (req, res) => {
  try {
    const user = await getUser({ email: req.body.email });
    if (user) {
      return res.status(409).json({ message: "user already exists" });
    } else {
      bcrypt.hash(req.body.password, null, null, (err, hash) => {
        createUser({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: hash,
        })
          .then((user) =>
            res.status(200).json({ user, msg: "account created successfully" })
          )
          .catch((err) => {
            return res.status(500).json({ error: err.message });
          });
      });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.user_login = async (req, res) => {
  try {
    user = await getUser({ email: req.body.email });

    if (!user) {
      return res.status(401).json({ message: "No such user found" });
    }
    const password = req.body.password;

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        res.status(401).json({ message: "incorrect password" });
      } else {
        const token = jwt.sign(
          {
            userId: user._id,
          },
          process.env.JWT,
          {
            expiresIn: "8h",
          }
        );
        return res.status(200).json({ message: "ok", token });
      }
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
