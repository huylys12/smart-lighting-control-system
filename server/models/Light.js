//////=========================================================================
// LOAD MONGOOSE
const mongoose = require("mongoose");

//////=========================================================================
// DEFINE MODEL/SCHEMA
const lightSchema = mongoose.Schema({
  roomId: {
    type: mongoose.Schema.ObjectId,
    // required: true,
  },
  name: {
    type: String,
  },
  type: {
    type: String,
    enum: ['color', 'brightness']
  },
  status: Boolean,
  brightness: {
    type: Number,
    min: 0,
    max: 100
  },
  canAdjustAutomatically: Boolean,
  brightnessFeedKey: String,
  colorFeedKey: String,
  statusFeedKey: String
});

//////=========================================================================
// EXPORT MODULE
module.exports = mongoose.model("Light", lightSchema);
