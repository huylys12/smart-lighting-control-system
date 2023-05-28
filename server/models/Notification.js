//////=========================================================================
// LOAD MONGOOSE
const mongoose = require("mongoose");

//////=========================================================================
// DEFINE MODEL/SCHEMA
const notificationSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
  },
  title: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

//////=========================================================================
// EXPORT MODULE
module.exports = mongoose.model("Notification", notificationSchema);
