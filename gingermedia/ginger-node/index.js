const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/user");

dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URL, {
  dbName: "gingermedia",
});
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/", routes);
app.listen(PORT, console.log(`server running on ${PORT}`));
