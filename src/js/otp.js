
function sendmessage(){
const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "bc220346",
  apiSecret: "fo4nACH4tDTLjj6r"
})	

let x = Math.floor((Math.random() * 9000) + 1000);
const from = "Vonage APIs"
const to = "919496664018"
const text = 'your otp is ' + x 

vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})
return x;
}