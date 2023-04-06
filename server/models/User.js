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
  email: {
    type: String,
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
User.set("toJSON", {
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
