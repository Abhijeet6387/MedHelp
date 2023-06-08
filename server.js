const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Userroute = require("./routes/UserRoute");
const Appointment = require("./routes/Appointment");
const path = require("path");
app.use(cors());

const { createProxyMiddleware } = require("http-proxy-middleware");

require("dotenv").config();
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use("/users", Userroute);
app.use("/appointmentinfos", Appointment);

app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:5000",
    changeOrigin: true,
  })
);

app.use(express.static(path.join(__dirname, "frontend", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Server is listening on port: 5000");
});
