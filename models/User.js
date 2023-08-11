const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  organization: { type: mongoose.Schema.Types.ObjectId, ref: "Organization" },
  stores: [{ type: mongoose.Schema.Types.ObjectId, ref: "Store" }],
});

module.exports = mongoose.model("User", userSchema);
