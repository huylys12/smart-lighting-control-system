const Room = require("../models/Room");

export class RoomsRepository {
  async findById(id) {
    Room.findById(id)
      .then((room) => {
        return room;
      })
      .catch((error) => {
        return error;
      });
  }

  async findByNetworkId(networkId) {
    Room.find({ networkId: networkId })
      .then((rooms) => {
        return rooms;
      })
      .catch((error) => {
        return error;
      });
  }
}
