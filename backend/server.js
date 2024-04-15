const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const PORT = 6969;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, resp) => {
  console.log("GET API called!");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
