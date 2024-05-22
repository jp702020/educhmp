const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  name: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);
