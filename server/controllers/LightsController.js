const Light = require("../models/Light");
const Room = require("../models/Room");

module.exports = class LightsController {
  // async getAllLights(req, res) {
  //   Light.find()
  //     .then((lights) => {
  //       res.status(200).json({
  //         sucess: true,
  //         msg: "Successful in retrieving all the lights.",
  //         lights: lights,
  //       });
  //     })
  //     .catch((err) => {
  //       res.status(500).json({
  //         success: false,
  //         msg: "Encountered an error while retrieving all the lights.",
  //       });
  //     });
  // }

  async getLightById(req, res) {
    const lightId = req.params.lightId;
    Light.find({ _id: lightId })
      .then((light) => {
        res.status(200).json({
          sucess: true,
          msg: "Successful in retrieving light with Id.",
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
    const {
      name,
      type,
      status,
      brightness,
      color,
      canAdjustAutomatically,
      brightnessFeedKey,
      colorFeedKey,
      statusFeedKey,
    } = req.body;

    const newLight = new Light({
      roomId: req.params.roomId,
      name: name,
      type: type,
      status: status,
      brightness: brightness,
      color: color,
      canAdjustAutomatically: canAdjustAutomatically,
      brightnessFeedKey: brightnessFeedKey,
      colorFeedKey: colorFeedKey,
      statusFeedKey: statusFeedKey,
    });
    newLight
      .save()
      .then((result) => {
        Room.findOne({ _id: req.params.roomId })
          .then((room) => {
            room.numOfLights++;
            room.save();
          })
          .catch((err) => {
            res.status(500).json({
              success: false,
              msg: "Encountered an error while update number of lights for room. Please, try again.",
            });
          });
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
      name,
      type,
      status,
      brightness,
      color,
      canAdjustAutomatically,
      brightnessFeedKey,
      colorFeedKey,
      statusFeedKey,
    } = req.body;

    Light.updateOne(
      { _id: req.params.lightId },
      {
        $set: {
          name: name,
          type: type,
          status: status,
          brightness: brightness,
          color: color,
          canAdjustAutomatically: canAdjustAutomatically,
          brightnessFeedKey: brightnessFeedKey,
          colorFeedKey: colorFeedKey,
          statusFeedKey: statusFeedKey,
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
    const lightId = await req.params.lightId;
    Light.findByIdAndDelete(lightId)
      .then((light) => {
        console.log(light);
        const roomId = light.roomId;
        Room.findById(roomId)
          .then((room) => {
            room.numOfLights--;
            room.save();
            res.status(200).json({ success: true, msg: "Light deleted" });
          })
          .catch((error) => {
            res.status(500).json({
              sucess: false,
              msg: "Encountered an error while updating number of lights in room. Please, try again.",
            });
          });
      })
      .catch((err) => {
        res.status(500).json({
          sucess: false,
          msg: "Encountered an error while deleting this light. Please, try again.",
        });
      });
  }
};
