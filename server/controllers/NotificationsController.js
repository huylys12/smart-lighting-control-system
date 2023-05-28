const Notification = require("../models/Notification");

module.exports = class NotificationsController {
  async getAllNotificationsByUserId(req, res) {
    Notification.find({ userId: req.user._id })
      .then((notifications) => {
        res.status(200).json({
          sucess: true,
          msg: "Successful in retrieving all the notifications with userId.",
          notifications: notifications,
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          msg: "Encountered an error while retrieving all the notifications with userId.",
        });
      });
  }

  async createNotification(req, res) {
    const { title } = req.body;

    const newNotification = new Notification({
      userId: req.user._id,
      title: title,
    });
    newNotification
      .save()
      .then((result) => {
        res.status(200).json({ success: true, msg: "Notification added" });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          msg: "Encountered an error while adding this notification. Please, try again.",
        });
      });
  }
};
