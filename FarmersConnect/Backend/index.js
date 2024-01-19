const express = require("express");
const dbConnect = require("./config/database");
const userRoutes = require("./routes/user.routes");

const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/routes", userRoutes);

app.listen(PORT, () => {
  console.log(`The server is running at port ${PORT}`);
});

dbConnect();