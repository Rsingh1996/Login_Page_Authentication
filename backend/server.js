const express = require("express");
const User = require("./user");
const cors = require("cors");
const PORT = 6969;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", cors(), (req, resp) => {
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
