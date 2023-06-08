const express = require("express");
const router = express.Router();
const Users = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const checkAuth = require("../utils/checkAuth");
require("dotenv").config();

router.post("/register", (req, res) => {
  console.log(req.body.Password);
  bcrypt
    .hash(req.body.Password, 10)
    .then((hash) => {
      const newUser = new Users({
        ...req.body,
        Password: hash,
      });
      Users.create(newUser)
        .then((newlyCreatedUser) => {
          return res.status(201).json({
            message: "Registered Successfully",
            result: newlyCreatedUser,
          });
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json({ error: err });
        });
    })
    .catch((hash_err) => {
      return res.status(500).json({ error: hash_err });
    });
});

router.post("/login", (req, res) => {
  console.log(req.body.Email);
  Users.find({ Email: req.body.Email })
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Authentication Failed",
        });
      }
      bcrypt
        .compare(req.body.Password, user[0].Password)
        .then((result) => {
          console.log(result);
          if (result) {
            const token = jwt.sign(
              {
                id: user[0]._id,
                Username: user[0].Username,
                Email: user[0].Email,
              },
              process.env.SECRET_KEY,
              {
                expiresIn: "1h",
              }
            );
            return res.status(200).json({
              message: "Authentication Successful",
              token: token,
            });
          } else {
            return res.status(401).json({
              message: "Failed to Fetch Token",
              token: null,
            });
          }
        })
        .catch((auth_err) => {
          return res.status(401).json({ message: "Authentication Failed" });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.get("/getDoctors", (req, res) => {
  Users.find({ Role: "Doctor" })
    .then((user) => {
      console.log(user);
      return res.status(200).json({
        message: "Successful",
        info: user,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err, message: "Please Retry!" });
    });
});

module.exports = router;
