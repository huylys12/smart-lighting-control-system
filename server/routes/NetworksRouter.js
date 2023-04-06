const express = require("express");
const NetworksController = require("../controllers/NetworksController");
const UsersController = require("../controllers/UsersController");
const {
  verifyUserWithJwt,
  verifyUserWithLocal
} = require("../utils/authenticate");

module.exports = class NetworksRouter {
  router = express.Router();
  networksController = new NetworksController();
  usersController = new UsersController();

  constructor() {
    // Fetches all the networks in the database.
    // this.router.get("/all", this.networksController.getAllNetworks);

    // Fetches all the networks owned by a user with userId.
    this.router.get(
      "/all",
      verifyUserWithJwt,
      this.networksController.getAllNetworksByUserId
    );

    // Fetches a network with networkId owned by the user with userId.
    this.router.get(
      "/:networkId", verifyUserWithJwt,
      this.networksController.getNetworkByUserId
    );

    // Create new network
    this.router.post("/create", verifyUserWithJwt, this.networksController.createNetwork);

    // Update existed network
    this.router.patch(
      "/:networkId/update", verifyUserWithJwt,
      this.networksController.updateNetwork
    );

    // Deleting a network with networkId.
    this.router.delete(
      "/:networkId/delete",
      this.networksController.deleteNetwork
    );
  }
};
