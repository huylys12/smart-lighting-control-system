const express = require("express");
const NotificationsController = require("../controllers/NotificationsController");
const {
  verifyUserWithJwt,
} = require("../utils/authenticate");

module.exports = class NotifcationsRouter {
  router = express.Router();
  notificationsController = new NotificationsController();

  constructor() {

    // Fetches all the notifications belong to a user.
    this.router.get(
      "/all", verifyUserWithJwt,
      this.notificationsController.getAllNotificationsByUserId
    );

    // Create new notification
    this.router.post("/create", verifyUserWithJwt, this.notificationsController.createNotification);

  }
};
