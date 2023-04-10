//////=========================================================================
// LOAD MONGOOSE
const mongoose = require("mongoose");

//////=========================================================================
// DEFINE MODEL/SCHEMA
const roomSchema = mongoose.Schema({
  // networkId: {
  //   type: mongoose.Schema.ObjectId,
  //   required: true,
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
  status: {
    type: Boolean,
    default: false
  },
  brightness:  {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
  peopleInHere: {
    type: String,
    enum: ["No one", "Anyone in here"],
    default: "No one"
  },
  numOfLights:{
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  canAdjustAutomatically:{
    type: Boolean,
    default: false
  },
  brightnessFeedKey: String, 
  motionFeedKey: String, 
});

//////=========================================================================
// EXPORT MODULE
module.exports = mongoose.model("Room", roomSchema);
