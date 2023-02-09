const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const UserRoute = require("./routes/UserRoute");
//const path = require("path");
app.use(cors());
const { createProxyMiddleware } = require("http-proxy-middleware");

require("dotenv").config();
// console.log("HELL0");
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use("/users", UserRoute);
// proxy-setup
app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:4000",
    changeOrigin: true,
  })
);

/*To create build file
app.use(express.static(path.join(__dirname, "frontend", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});
*/
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Something went wrong!");
      console.log(err);
    } else console.log("Connected to Database");
  }
);

app.listen(4000, () => {
  console.log("Server is listening on port: 4000");
});
