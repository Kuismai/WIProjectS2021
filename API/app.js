const express = require("express");
require("express-async-errors"); // Passes errors on, in async-await functions
const app = express();
const cors = require("cors");
const cloudinary = require("cloudinary");
const userRouter = require("./controllers/user");
const loginRouter = require("./controllers/login");
const itemRouter = require("./controllers/item");
const cartRouter = require("./controllers/cart");
const middleware = require("./utils/middleware");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
  });

module.exports = app;