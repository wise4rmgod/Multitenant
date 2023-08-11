const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  name: String,
  description: String,
  link: String,
  isPrivate: Boolean,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Store", storeSchema);
