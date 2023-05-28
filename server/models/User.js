//////=========================================================================
// LOAD MONGOOSE
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

//////=========================================================================
// DEFINE MODEL/SCHEMA
const Session = new mongoose.Schema({
  refreshToken: {
    type: String,
    default: "",
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  avatar: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/4128/4128244.png",
  },
  authStrategy: {
    type: String,
    default: "local",
  },
  refreshToken: {
    type: [Session],
  },
});

//Remove refreshToken from the response
userSchema.set("toJSON", {
  transform: function (doc, ret, options) {
    delete ret.refreshToken;
    return ret;
  },
});

// A plugin that allows us to use the passportLocalMongoose 
userSchema.plugin(passportLocalMongoose);

//////=========================================================================
// EXPORT MODULE
module.exports = mongoose.model("User", userSchema);
