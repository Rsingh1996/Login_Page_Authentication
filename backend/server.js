const express = require("express");

const PORT = 6969;
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/user-Auth")
  .then(() => console.log("DB Connected!"));

const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

app.get("/", (req, resp) => {
  console.log("GET API called!");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
