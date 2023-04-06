//////=========================================================================
// LOAD MONGOOSE
const mongoose = require("mongoose");

//////=========================================================================
// DEFINE MODEL/SCHEMA
const roomSchema = mongoose.Schema({
  // networkId: {
  //   type: mongoose.Schema.ObjectId,
  // },
  userId: {
    type: mongoose.Schema.ObjectId,
  },
  name: {
    type: String,
  },
  type: {
    type: String,
    enum: ['living', 'kitchen', 'bedroom', 'bathroom', 'readingroom']
  },
  status: Boolean,
  brightness:  {
    type: Number,
    min: 0,
    max: 100
  },
  canAdjustAutomatically: Boolean,
  brightnessFeedKey: String, 
  motionFeedKey: String, 
});

//////=========================================================================
// EXPORT MODULE
module.exports = mongoose.model("Room", roomSchema);
