const Network = require("../models/Network");

export class NetworksRepository {
  async findById(id) {
    Network.findById(id)
      .then((network) => {
        return network;
      })
      .catch((error) => {
        return error;
      });
  }

  async findByUserId(userId) {
    Network.find({ users: { $elemMatch: { userId: userId } } })
      .then((networks) => {
        return networks;
      })
      .catch((error) => {
        return error;
      });
  }
}
