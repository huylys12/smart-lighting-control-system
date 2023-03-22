//////=========================================================================
// LOAD MONGOOSE
const mongoose = require('mongoose');

//////=========================================================================
// DEFINE MODEL/SCHEMA
const networkSchema = mongoose.Schema({
    name: String,
    location: String
})
//

//////=========================================================================
// EXPORT MODULE
module.exports = mongoose.model('Network', networkSchema);