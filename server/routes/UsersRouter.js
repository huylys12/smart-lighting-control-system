const express = require("express");
const UsersController = require("../controllers/UsersController");
const passport = require("passport");
const {
  verifyUserWithJwt,
  verifyUserWithLocal
} = require("../utils/authenticate");

module.exports = class UsersRouter {
  router = express.Router();
  usersController = new UsersController();

  constructor() {
    this.router.post("/register", this.usersController.register);

    this.router.post("/login", verifyUserWithLocal, this.usersController.login);

    this.router.post("/refreshToken", this.usersController.refreshToken);

    this.router.get("/logout", verifyUserWithJwt, this.usersController.logout);

    this.router.get("/me", verifyUserWithJwt, (req, res) => {
      res.send(req.user);
    })

    this.router.patch("/update", verifyUserWithJwt, this.usersController.updateUserInfo);
  }
};
