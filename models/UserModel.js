const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  Username: { type: String, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
  Expertise: { type: String, required: false },
  Contact: { type: String, required: true },
  Role: { type: String, required: true },
});
module.exports = mongoose.model("Users", userSchema);
