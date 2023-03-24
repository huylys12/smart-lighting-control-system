const User = require("../models/User");
const passport = require("passport");

module.exports = class UsersController {
  async register(req, res) {
    User.register({ username: req.body.username }, req.body.password, function (err, user) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          sucess: "false",
          status: "Registration failed",
          msg: "Failed to register user. Please, try again later.",
        });
      } else {
        passport.authenticate("local")(req, res, () => {
          return res.status(200).json({
            success: true,
            status: "User Registered.",
            user: user,
            msg: "User is registered successfully.",
          });
        });
      }
    });
  }

  async login(req, res) {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });
    req.login(user, function (err) {
      if (err) {
        return res.status(403).json({
          success: false,
          status: "Authentication failed",
          msg: "Incorrect username or password.",
        });
      } else {
        passport.authenticate("local")(req, res, () => {
          return res.status(200).json({
            success: true,
            status: "Authentication successful",
            msg: "Login successful",
            user: user,
          });
        });
      }
    });
  }

  async logout(req, res) {
    req.logout();
  }

  async updateUserInfo(req, res) {}

  async updateEmail(req, res) {}

  async authentication(req, res) {}
}
