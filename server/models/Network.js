//////=========================================================================
// LOAD MONGOOSE
const mongoose = require("mongoose");

//////=========================================================================
// DEFINE MODEL/SCHEMA
const networkSchema = mongoose.Schema({
  users: [
    {
      userId: {
        type: mongoose.Schema.ObjectId,
        required: true
      },
      role: {
        type: String,
        enum: {
          values: ['Admin', 'User'],
          message: '{VALUE} is not a type of role'
        },
        required: true
      }
    }
  ],
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
//

//////=========================================================================
// EXPORT MODULE
module.exports = mongoose.model("Network", networkSchema);
