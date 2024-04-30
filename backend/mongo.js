const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/user-Auth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 30000, // Set socket timeout to 30 seconds (30000 milliseconds)
  })
  .then(() => console.log("DB Connected!"))
  .catch(() => console.log("DB connection failed!"));
