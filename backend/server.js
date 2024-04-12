const express = require("express");

const PORT = 6969;
const app = express();

app.get("/", (req, resp) => {
  console.log("GET API called!");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
