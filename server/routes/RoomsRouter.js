const express = require("express");
const RoomsController = require("../controllers/RoomsController");

module.exports = class RoomsRouter {
  router = express.Router();
  roomsController = new RoomsController();

  constructor() {
    // Fetches all the rooms in the database.
    this.router.get('/all', this.roomsController.getAllRooms);

    // Fetches all the rooms belong to a network with networkId.
    this.router.get(
      "/networks/:networkId/",
      this.roomsController.getAllRoomsByNetworkId
    );

    // Fetches a room with roomId belong to a network with networkId.
    this.router.get(
      "/:roomId/networks/:networkId/",
      this.roomsController.getRoomByNetworkId
    );

    // Create new room
    this.router.post("/create", this.roomsController.createRoom);

    // Update existed room
    this.router.put("/:roomId/update", this.roomsController.updateRoom);
    
    // Deleting a room with roomId. 
    this.router.delete("/:roomId/delete", this.roomsController.deleteRoom);
  }
};
