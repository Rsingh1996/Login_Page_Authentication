const mongoose = require("mongoose");

const dbConnection = () => {
  return mongoose
    .connect("mongodb://localhost:27017/user-Auth")
    .then(() => {
      console.log("DB Connected!");
    })
    .catch((err) => {
      console.error("DB connection failed:", err);
      process.exit(1);
    });
};

module.exports = dbConnection;
