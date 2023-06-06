const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  contact: { type: String, required: true },
  // city: { type: String, required: true },
  // state: { type: String, required: true },
  // zipCode: { type: String, required: true },
  role: { type: String, required: true },
});
module.exports = mongoose.model("Users", userSchema);
