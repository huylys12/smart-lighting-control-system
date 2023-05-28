import { ADAFRUIT_KEY } from "./secret.js";
async function postToAdafruit(feed,data){
    await fetch(`https://io.adafruit.com/api/v2/PhucHo/feeds/${feed}/data?X-AIO-Key=${ADAFRUIT_KEY}`,{
        'method': 'POST',
        'headers': {
            'Content-type': 'application/json'
        },
        'body': `{"datum": {"value": ${data}}}`
    })
}
const arr = ['No one','Anyone in here'];
setInterval(async() => await postToAdafruit('livingroombrightness',Math.floor(Math.random() * 70) + 30),5000);
setInterval(() => postToAdafruit('livingroommotion',JSON.stringify(arr[Math.floor(Math.random() * 2)])),7000);