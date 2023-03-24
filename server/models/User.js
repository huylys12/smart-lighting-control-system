//////=========================================================================
// LOAD MONGOOSE
const mongoose = require("mongoose");
const passport = require("passport");
const passportLocal = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");

//////=========================================================================
// DEFINE MODEL/SCHEMA
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

// A plugin that allows us to use the passportLocalMongoose 
userSchema.plugin(passportLocalMongoose);

//////=========================================================================
// EXPORT MODULE
module.exports = mongoose.model("User", userSchema);
