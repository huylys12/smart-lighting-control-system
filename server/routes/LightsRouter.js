const express = require("express");
const LightsController = require("../controllers/LightsController");
const {
  verifyUserWithJwt,
} = require("../utils/authenticate");

module.exports = class LightsRouter {
  router = express.Router();
  lightsController = new LightsController();

  constructor() {
    // Fetches all the lights in the database.
    // this.router.get('/all', this.lightsController.getAllLights);

    // Fetches all the lights belong to a room with roomId.
    this.router.get(
      "/room/:roomId/", verifyUserWithJwt,
      this.lightsController.getAllLightsByRoomId
    );

    // Fetches a light with LlghtId belong to a room with roomId.
    this.router.get(
      "/:lightId/", verifyUserWithJwt,
      this.lightsController.getLightById
    );

    // Create new light
    this.router.post("/create/room/:roomId", verifyUserWithJwt, this.lightsController.createLight);

    // Update existed light
    this.router.patch("/:lightId/update", verifyUserWithJwt, this.lightsController.updateLight);
    
    // Deleting a light with lightId. 
    this.router.delete("/:lightId/delete", verifyUserWithJwt, this.lightsController.deleteLight);
  }
};
