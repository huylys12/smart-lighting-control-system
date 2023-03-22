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
const Network = mongoose.model('Network', networkSchema);
module.exports = Network;