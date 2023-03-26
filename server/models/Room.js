//////=========================================================================
// LOAD MONGOOSE
const mongoose = require("mongoose");

//////=========================================================================
// DEFINE MODEL/SCHEMA
const roomSchema = mongoose.Schema({
  networkId: mongoose.Schema.ObjectId,
  name: {
    type: String,
    unique: true,
    required: true,
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
module.exports = mongoose.model("Room", roomSchema);
