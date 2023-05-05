const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  gender: String,
  role: String,
  email:String,
  phone:Number,
  address:String,
  password: String,
});

userModel = mongoose.model("data", UserSchema);

module.exports = userModel;
