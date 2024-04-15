const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/user-Auth")
  .then(() => console.log("DB Connected!"))
  .catch(() => console.log("DB connection failed!"));
