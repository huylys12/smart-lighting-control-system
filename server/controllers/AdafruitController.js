const Room = require("../models/Room");
const Light = require("../models/Light");

module.exports = class Adafruit{
    async getFromAdafruit(feed){
        const data = await fetch(`https://io.adafruit.com/api/v2/PhucHo/feeds/${feed}/data?X-AIO-Key=aio_sAge18SvxYrgARDhXy4UO6GsusNV`);
        const res = await data.json();
        return res;
    }
    async postToAdafruit(data,feed){
        await fetch(`https://io.adafruit.com/api/v2/PhucHo/feeds/${feed}/data?X-AIO-Key=aio_sAge18SvxYrgARDhXy4UO6GsusNV`,{
            'method': 'POST',
            'headers': {
                'Content-type': 'application/json'
            },
            'body': `{"datum": {"value": ${data}}}`
        })
    }
    async updateRoom(roomName,feed){
        const data = await this.getFromAdafruit(feed);
        const brightness = parseInt(data[0].value);
        // console.log(typeof(brightness.value));
        await Room.updateOne(
            {name: roomName},
            {
                brightness: brightness
            }
        )
    }
    async updateLight(lightName,feed1,feed2){
        const data1 = await this.getFromAdafruit(feed1);
        const data2 = await this.getFromAdafruit(feed2);
        const brightness = parseInt(data1[0].value);
        const status = !parseInt(data2[0].value);
        // console.log(typeof(brightness.value));
        await Light.updateOne(
            {name: lightName},
            {
                brightness: brightness,
                status: status
            }
        )
    }
}