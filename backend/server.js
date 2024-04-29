const express = require("express");
const User = require("./mongo");
const cors = require("cors");
const PORT = 6969;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", cors(), (req, resp) => {
  console.log("GET API called!");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findone({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "login sucess", user: user });
      } else {
        res.send({ message: "wrong credentials" });
      }
    } else {
      res.send("not register");
    }
  });
});

app.post("/register", (req, resp) => {
  const { userName, email, password } = req.body;
  console.log(req.body);
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "user already exist" });
    } else {
      const user = new User({ userName, email, password });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "sucessfull" });
        }
      });
    }
  });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
