const express = require("express");
const UsersController = require("../controllers/UsersController");

module.exports = class UsersRouter {
  router = express.Router();
  usersController = new UsersController();

  constructor() {
    this.router.post("/register", this.usersController.register);

    this.router.post("/login", this.usersController.login);
  }
};
