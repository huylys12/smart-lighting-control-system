const Network = require("../models/Network");

module.exports = class NetworksController {

  async getNetworkByUserId(req, res) {
    const userId = req.user._id;
    const networkId = req.params.networkId;
    Network.find({ id: networkId, userId: userId })
      .then((network) => {
        res.status(200).json({
          sucess: true,
          msg: "Successful in retrieving the network.",
          network: network,
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          msg: "Encountered an error while retrieving the network.",
        });
      });
  }

  async getAllNetworksByUserId(req, res) {
    const userId = req.user._id;
    Network.find({ userId: userId })
      .then((networks) => {
        res.status(200).json({
          sucess: true,
          msg: "Successful in retrieving all the networks with userId.",
          networks: networks,
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          msg: "Encountered an error while retrieving all the networks with userId.",
        });
      });
  }

  async createNetwork(req, res) {
    const {name, location, canAdjustAutomatically } = req.body;

    const newNetwork = new Network({
      userId: req.user._id,
      name: name,
      location: location,
      canAdjustAutomatically: canAdjustAutomatically,
    });
    newNetwork
      .save()
      .then((result) => {
        res.status(200).json({ success: true, msg: "Network added" });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          msg: "Encountered an error while adding this network. Please, try again.",
        });
      });
  }

  async updateNetwork(req, res) {
    const networkId = req.params.networkId;
    const { name, location, canAdjustAutomatically } = req.body;
    Network.updateOne(
      { _id: networkId },
      {
        $set: {
          name: name,
          location: location,
          canAdjustAutomatically: canAdjustAutomatically,
        },
      }
    )
      .then((result) => {
        res.status(200).json({ success: true, msg: "Network updated" });
      })
      .catch((err) => {
        res.status(500).json({
          sucess: false,
          msg: "Encountered an error while editing this network. Please, try again.",
        });
      });
  }

  async deleteNetwork(req, res) {
    const networkId = req.params.networkId;
    Network.deleteOne({ _id: networkId })
      .then((result) => {
        res.status(200).json({ success: true, msg: "Network deleted" });
      })
      .catch((err) => {
        res.status(500).json({
          sucess: false,
          msg: "Encountered an error while deleting this network. Please, try again.",
        });
      });
  }
}
