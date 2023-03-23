const Light = require("../models/Light");

module.exports = class LightsController {
  async getAllLights(req, res) {
    Light.find()
      .then((lights) => {
        res.status(200).json({
          sucess: true,
          msg: "Successful in retrieving all the lights.",
          lights: lights,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          msg: "Encountered an error while retrieving all the lights.",
        });
      });
  }

  async getLightByRoomId(req, res) {
    const lightId = req.params.lightId;
    const roomId = req.params.roomId;
    Light.find({ id: lightId, roomId: roomId })
      .then((light) => {
        res.status(200).json({
          sucess: true,
          msg: "Successful in retrieving light.",
          light: light,
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          msg: "Encountered an error while retrieving the light.",
        });
      });
  }

  async getAllLightsByRoomId(req, res) {
    const roomId = req.params.roomId;
    Light.find({ roomId: roomId })
      .then((lights) => {
        res.status(200).json({
          sucess: true,
          msg: "Successful in retrieving all the lights with roomId.",
          lights: lights,
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          msg: "Encountered an error while retrieving all the lights with roomId.",
        });
      });
  }

  async createLight(req, res) {
    const { roomId, name, type, status, brightness, canAdjustAutomatically } =
      req.body;

    const newLight = new Light({
      roomId: roomId,
      name: name,
      type: type,
      status: status,
      brightness: brightness,
      canAdjustAutomatically: canAdjustAutomatically,
    });
    newLight
      .save()
      .then((result) => {
        res.status(200).json({ success: true, msg: "Light added" });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          msg: "Encountered an error while adding this light. Please, try again.",
        });
      });
  }

  async updateLight(req, res) {
    const {
      id,
      roomId,
      name,
      type,
      status,
      brightness,
      canAdjustAutomatically,
    } = req.body;

    Light.updateOne(
      { id: id },
      {
        $set: {
          roomId: roomId,
          name: name,
          type: type,
          status: status,
          brightness: brightness,
          canAdjustAutomatically: canAdjustAutomatically,
        },
      }
    )
      .then((result) => {
        res.status(200).json({ success: true, msg: "Light updated" });
      })
      .catch((err) => {
        res.status(500).json({
          sucess: false,
          msg: "Encountered an error while editing this light. Please, try again.",
        });
      });
  }

  async deleteLight(req, res) {
    const lightId = req.params.lightId;
    Light.deleteOne({ id: lightId })
      .then((result) => {
        res.status(200).json({ success: true, msg: "Light deleted" });
      })
      .catch((err) => {
        res.status(500).json({
          sucess: false,
          msg: "Encountered an error while deleting this light. Please, try again.",
        });
      });
  }
}
