const Room = require("../models/Room");

module.exports = class RoomsController {
  async getAllRooms(req, res) {
    Room.find()
      .then((rooms) => {
        res.status(200).json({
          sucess: true,
          msg: "Successful in retrieving all the rooms.",
          rooms: rooms,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          msg: "Encountered an error while retrieving all the rooms.",
        });
      });
  }

  async getRoomByNetworkId(req, res) {
    const networkId = req.params.networkId;
    const roomId = req.params.roomId;
    Room.find({ id: roomId, networkId: networkId })
      .then((room) => {
        res.status(200).json({
          sucess: true,
          msg: "Successful in retrieving the room.",
          room: room,
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          msg: "Encountered an error while retrieving the room.",
        });
      });
  }

  async getAllRoomsByNetworkId(req, res) {
    const networkId = req.params.networkId;
    Room.find({ networkId: networkId })
      .then((rooms) => {
        res.status(200).json({
          sucess: true,
          msg: "Successful in retrieving all the rooms with networkId.",
          rooms: rooms,
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          msg: "Encountered an error while retrieving all the rooms with networkId.",
        });
      });
  }

  async createRoom(req, res) {
    const { networkId, name, type, status, brightness, canAdjustAutomatically } =
      req.body;

    const newRoom = new Room({
      networkId: networkId,
      name: name,
      type: type,
      status: status,
      brightness: brightness,
      canAdjustAutomatically: canAdjustAutomatically,
    });
    newRoom
      .save()
      .then((result) => {
        res.status(200).json({ success: true, msg: "Room added" });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          msg: "Encountered an error while adding this room. Please, try again.",
        });
      });
  }

  async updateRoom(req, res) {
    const {
      id,
      networkId,
      name,
      type,
      status,
      brightness,
      canAdjustAutomatically,
    } = req.body;

    Room.updateOne(
      { id: id },
      {
        $set: {
          networkId: networkId,
          name: name,
          type: type,
          status: status,
          brightness: brightness,
          canAdjustAutomatically: canAdjustAutomatically,
        },
      }
    )
      .then((result) => {
        res.status(200).json({ success: true, msg: "Room updated" });
      })
      .catch((err) => {
        res.status(500).json({
          sucess: false,
          msg: "Encountered an error while editing this room. Please, try again.",
        });
      });
  }

  async deleteRoom(req, res) {
    const roomId = req.params.roomId;
    Room.deleteOne({ id: roomId })
      .then((result) => {
        res.status(200).json({ success: true, msg: "Room deleted" });
      })
      .catch((err) => {
        res.status(500).json({
          sucess: false,
          msg: "Encountered an error while deleting this room. Please, try again.",
        });
      });
  }
}
