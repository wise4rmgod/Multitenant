const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
  name: String,
  email: String,
  department: String,
  password: String,
  isAdmin: Boolean,
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Organization", organizationSchema);
