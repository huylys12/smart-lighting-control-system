const User = require("../models/User");

export class UsersRepository {
  async findById(id) {
    User.findById(id).then(user => {
        return user;
    }).catch(error => {
        return error;
    });
  }
  
  async findByEmail(email) {
    User.find({ email: email}).then(user => {
        return user;
    }).catch(error => {
        return error;
    });
  }
}
