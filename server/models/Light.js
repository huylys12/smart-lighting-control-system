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
module.exports = mongoose.model('Light', lightSchema);
