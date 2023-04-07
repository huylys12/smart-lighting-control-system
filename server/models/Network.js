//////=========================================================================
// LOAD MONGOOSE
const mongoose = require("mongoose");

//////=========================================================================
// DEFINE MODEL/SCHEMA
const networkSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  canAdjustAutomatically: Boolean,
});

//////=========================================================================
// EXPORT MODULE
module.exports = mongoose.model("Network", networkSchema);
