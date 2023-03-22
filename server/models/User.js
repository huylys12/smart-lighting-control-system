//////=========================================================================
// LOAD MONGOOSE
const mongoose = require('mongoose');

//////=========================================================================
// DEFINE MODEL/SCHEMA
const userSchema = mongoose.Schema({
    username: String,
    email: String, 
    password: String,
    avatar: String
})
//

//////=========================================================================
// EXPORT MODULE
module.exports = mongoose.model('User', userSchema);
