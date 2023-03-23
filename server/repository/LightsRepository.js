const Light = require("../models/Light");

export class LightsRepository {
  async findById(id) {
    Light.findById(id).then(light => {
        return light;
    }).catch(error => {
        return error;
    });
  }

  async findByRoomId(roomId) {
    Light.find({roomId: roomId}).then(lights => {
      return lights;
    }).catch(error => {
      return error;
    });
  }
}
