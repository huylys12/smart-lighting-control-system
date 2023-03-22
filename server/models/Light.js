//////=========================================================================
// LOAD MONGOOSE
const mongoose = require('mongoose');

//////=========================================================================
// DEFINE MODEL/SCHEMA
const lightSchema = mongoose.Schema({
    name: String,
    type: String,
    status: Boolean,
    brightness: Number,
    canAdjustAutomatically: Boolean
})
//

//////=========================================================================
// EXPORT MODULE
const Light = mongoose.model('Light', lightSchema);
module.exports = Light;
