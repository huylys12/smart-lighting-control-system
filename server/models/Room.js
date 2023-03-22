//////=========================================================================
// LOAD MONGOOSE
const mongoose = require('mongoose');

//////=========================================================================
// DEFINE MODEL/SCHEMA
const roomSchema = mongoose.Schema({
    name: String,
    type: String,
    status: Boolean,
    brightness: Number,
    canAdjustAutomatically: Boolean
})
//

//////=========================================================================
// EXPORT MODULE
const Room = mongoose.model('Room', roomSchema);
module.exports = Room;