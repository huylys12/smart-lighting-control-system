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
  status: {
    type: Boolean,
    default: false
  },
  brightness: {
    type: Number,
    min: 0,
    max: 100,
    default:0
  },
  color: {
    type: String,
    enum: ['red','orange','yellow','green','blue','indigo','violet','white','black'],
    default: 'white'
  },
  canAdjustAutomatically:{
    type: Boolean,
    default: false
  },
  brightnessFeedKey: String,
  colorFeedKey: String,
  statusFeedKey: String
});

//////=========================================================================
// EXPORT MODULE
module.exports = mongoose.model("Light", lightSchema);
