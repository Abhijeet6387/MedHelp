const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  Username: { type: String, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
  // Contact: { type: String, required: true },
  // city: { type: String, required: true },
  // state: { type: String, required: true },
  // zipCode: { type: String, required: true },
  Role: { type: String, required: true },
});
module.exports = mongoose.model("Users", userSchema);
