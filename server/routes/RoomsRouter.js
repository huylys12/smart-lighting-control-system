const express = require("express");
const RoomsController = require("../controllers/RoomsController");
const {
  verifyUserWithJwt,
} = require("../utils/authenticate");

module.exports = class RoomsRouter {
  router = express.Router();
  roomsController = new RoomsController();

  constructor() {

    // Fetches all the rooms belong to a network with networkId.
    // this.router.get(
    //   "/networks/:networkId/",
    //   this.roomsController.getAllRoomsByNetworkId
    // );

    // Fetches a room with roomId belong to a network with networkId.
    // this.router.get(
    //   "/:roomId/networks/:networkId/",
    //   this.roomsController.getRoomByNetworkId
    // );
    
    
    // Fetches all the rooms belong to a user.
    this.router.get(
      "/all", verifyUserWithJwt,
      this.roomsController.getAllRoomsByUserId
    );

    // Fetches a room with roomId belong to a user.
    this.router.get("/:roomId", verifyUserWithJwt, this.roomsController.getRoomByUserId)

    // Create new room
    this.router.post("/create", verifyUserWithJwt, this.roomsController.createRoom);

    // Update existed room
    this.router.patch("/:roomId/update", verifyUserWithJwt, this.roomsController.updateRoom);
    
    // Deleting a room with roomId. 
    this.router.delete("/:roomId/delete", verifyUserWithJwt, this.roomsController.deleteRoom);
  }
};
