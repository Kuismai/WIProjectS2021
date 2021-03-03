const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const User = require("../models/user_model");

const cloudinary = require("cloudinary");
const middleware = require("../utils/middleware");

router.post("/", middleware.multerUpload, async (req, res, next) => {
  const body = req.body;
  const saltRounds = 10;
  const id = await uuidv4();
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  if (req.file !== undefined) {
    const file = await middleware.dataUri(req).content;
    const result = await cloudinary.uploader.upload(file);
    photo_url = result.url;
  }

  const user = {
    id,
    username: body.username,
    passwordHash,
    email,
    phone
  };

  const savedUser = await User.add(user);
  // res.json(savedUser.rows);

  const userForToken = {
    username: savedUser.rows[0].username,
    id: savedUser.rows[0].id,
    email: savedUser.rows[0].email,
    phone: savedUser.rows[0].phone,
  };

  const token = jwt.sign(userForToken, process.env.SECRET);

  res
    .status(200)
    .send({
      token,
      email: savedUser.rows[0].email,
      phone: savedUser.rows[0].phone,
    });
});

router.get("/", async (req, res) => {
  const users = await User.get();

  res.json(users.rows);
});

module.exports = router;
