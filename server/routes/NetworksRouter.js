const express = require("express");
const NetworksController = require("../controller/NetworksController");

module.exports = class NetworksRouter {
  router = express.Router();
  networksController = new NetworksController();

  constructor() {
    // Fetches all the networks in the database.
    this.router.get('/all', this.networksController.getAllNetworks);

    // Fetches all the networks owned by a user with userId.
    this.router.get(
      "/users/:userId/",
      this.networksController.getAllNetworksByUserId
    );

    // Fetches a network with networkId owned by the user with userId.
    this.router.get(
      "/:networkId/users/:userId/",
      this.networksController.getNetworkByUserId
    );

    // Create new network
    this.router.post("/create", this.networksController.createNetwork);

    // Update existed network
    this.router.put("/:networkId/update", this.networksController.updateNetwork);
    
    // Deleting a network with networkId. 
    this.router.delete("/:networkId/delete", this.networksController.deleteNetwork);
  }
};
