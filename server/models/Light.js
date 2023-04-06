//////=========================================================================
// LOAD MONGOOSE
const mongoose = require("mongoose");

//////=========================================================================
// DEFINE MODEL/SCHEMA
const lightSchema = mongoose.Schema({
  roomId: {
    type: mongoose.Schema.ObjectId,
  },
  name: {
    type: String,
  },
  type: String,
  status: Boolean,
  brightness: {
    type: Number,
    min: 0,
    max: 100
  },
  canAdjustAutomatically: Boolean,
});

//////=========================================================================
// EXPORT MODULE
module.exports = mongoose.model("Light", lightSchema);
