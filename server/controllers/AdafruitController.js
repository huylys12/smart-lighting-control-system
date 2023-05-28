const Room = require("../models/Room");
const Light = require("../models/Light");

module.exports = class Adafruit{
    async getFromAdafruit(req,res){
        fetch(`https://io.adafruit.com/api/v2/${process.env.ADAFRUIT_USER}/feeds/${req.body.feed}/data?X-AIO-Key=${process.env.ADAFRUIT_KEY}&limit=1`)
        .then(data => data.json())
        .then((data) => res.status(200).json({"data":data}))
        .catch((err) => {
            res.status(500).json({
                success: false,
                msg: err
            })
        })
    }
    async postToAdafruit(req,res){
        await fetch(`https://io.adafruit.com/api/v2/${process.env.ADAFRUIT_USER}/feeds/${req.body.feed}/data?X-AIO-Key=${process.env.ADAFRUIT_KEY}`,{
            'method': 'POST',
            'headers': {
                'Content-type': 'application/json'
            },
            'body': `{"datum": {"value": ${req.body.data}}}`
        })
        .then(data => data.json())
        .then(data => res.status(200).json({"data":data}))
        .catch((err) => {
            res.status(500).json({
                success: false,
                msg: err
            })
        })
    }
    // async updateRoom(roomName,feed){
    //     const data = await this.getFromAdafruit(feed);
    //     const brightness = parseInt(data[0].value);
    //     // console.log(typeof(brightness.value));
    //     await Room.updateOne(
    //         {name: roomName},
    //         {
    //             brightness: brightness
    //         }
    //     )
    // }
    // async updateLight(lightName,feed1,feed2){
    //     const data1 = await this.getFromAdafruit(feed1);
    //     const data2 = await this.getFromAdafruit(feed2);
    //     const brightness = parseInt(data1[0].value);
    //     const status = !parseInt(data2[0].value);
    //     // console.log(typeof(brightness.value));
    //     await Light.updateOne(
    //         {name: lightName},
    //         {
    //             brightness: brightness,
    //             status: status
    //         }
    //     )
    // }
}