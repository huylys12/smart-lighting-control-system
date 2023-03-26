const express = require("express");
const LightsController = require("../controllers/LightsController");

module.exports = class LightsRouter {
  router = express.Router();
  lightsController = new LightsController();

  constructor() {
    // Fetches all the lights in the database.
    this.router.get('/all', this.lightsController.getAllLights);

    // Fetches all the lights belong to a room with roomId.
    this.router.get(
      "/rooms/:roomId/",
      this.lightsController.getAllLightsByRoomId
    );

    // Fetches a light with LlghtId belong to a room with roomId.
    this.router.get(
      "/:lightId/rooms/:roomId/",
      this.lightsController.getLightByRoomId
    );

    // Create new light
    this.router.post("/create", this.lightsController.createLight);

    // Update existed light
    this.router.put("/:lightId/update", this.lightsController.updateLight);
    
    // Deleting a light with lightId. 
    this.router.delete("/:lightId/delete", this.lightsController.deleteLight);
  }
};
