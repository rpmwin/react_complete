const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 8000;

app.use(express.json());

app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
});
