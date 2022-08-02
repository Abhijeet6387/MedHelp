const express = require("express");
const router = express.Router();
const Users = require("../models/Usermodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//const checkAuth = require("../utils/checkAuth");

//register
router.post("/register", (req, res) => {
  //console.log("Helo");
  bcrypt.hash(req.body.Password, 10, (hash_err, hash) => {
    if (hash_err) {
      // console.log(hash_err);
      return res.status(500).json({ error: hash_err });
    } else {
      const newUser = new Users({
        ...req.body,
        Password: hash,
      });
      Users.create(newUser, (err, newlyCreatedUser) => {
        if (err) {
          // console.log(err);
          return res.status(500).json({
            error: err,
          });
        } else {
          // console.log(newlyCreatedUser);
          return res.status(201).json({
            message: "Registration Successful",
            result: newlyCreatedUser,
          });
        }
      });
    }
  });
});

//login
router.post("/login", (req, res) => {
  Users.find({ Email: req.body.Email }, (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    } else {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Authentication failed",
        });
      }
      bcrypt.compare(
        req.body.Password,
        user[0].Password,
        (auth_err, result) => {
          if (auth_err) {
            return res.status(401).json({
              message: "Authentication failed",
            });
          } else if (result) {
            const token = jwt.sign(
              {
                id: user[0]._id,
                Email: user[0].Email,
                Name: user[0].Name,
              },
              "abhijeetsecretkey",
              {
                expiresIn: "1h",
              }
            );
            return res.status(200).json({ message: "success", token: token });
          } else {
            return res.status(401).json({
              message: "Failed to fetch token",
              token: null,
            });
          }
        }
      );
    }
  });
});

router.get("/getInfo", (req, res) => {
  Users.find({ Role: "Doctor" }, function (err, user) {
    if (err) {
      console.log(err);
    } else {
      res.json(user);
    }
  });
});
module.exports = router;
