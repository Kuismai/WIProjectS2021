const express = require("express");
require("express-async-errors"); // Passes errors on, in async-await functions
const app = express();
const cors = require("cors");
const userRouter = require("./routes/user");
const loginRouter = require("./routes/login");
//const middleware = require("./utils/middleware");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
  });

  
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);

module.exports = app;