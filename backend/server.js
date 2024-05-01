const express = require("express");
const mongoose = require("mongoose");
const User = require("./user");
const cors = require("cors");
const PORT = 6969;
const app = express();
const dbConnection = require("./mongo.js");
app.use(express.json());
app.use(cors());

// Connect to the database
dbConnection();

app.get("/", cors(), (req, res) => {
  console.log("GET API called!");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.send("not registered");
    }
    if (password === user.password) {
      res.send({ message: "login success", user: user });
    } else {
      res.send({ message: "wrong credentials" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/register", async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.send({ message: "user already exists" });
    }
    const newUser = new User({ userName, email, password });
    await newUser.save();
    res.send({ message: "success" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
