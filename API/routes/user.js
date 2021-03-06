const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

const User = require("../models/user_model");

router.post("/", async (req, res, next) => {
  const body = req.body;
  const saltRounds = 10;
  const id = await uuidv4();
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  
  const user = {
    id,
    username: body.username,
    passwordHash,
  };

  const savedUser = await User.add(user);
  res.json(savedUser.rows);

  const userForToken = {
    username: savedUser.rows[0].username,
    id: savedUser.rows[0].id,
  };

  const token = jwt.sign(userForToken, process.env.SECRET);

  

  res
    .status(200)
    .send({
      token,
      username: savedUser.rows[0].username,
    });
});

router.get("/", async (req, res) => {
  const users = await User.get();

  res.json(users.rows);
});

module.exports = router;
