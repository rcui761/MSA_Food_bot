var request = require('request'); //node module for http post requests

exports.retreiveMessage = function (session){

    request.post({
        url: 'https://southcentralus.api.cognitive.microsoft.com/customvision/v1.0/Prediction/226891aa-f1db-4015-a7a4-c9c383f3e158/url?iterationId=91ae0a9d-0b1d-447a-883a-76f8baf6de2e',//change url
        json: true,
        headers: {
            'Content-Type': 'application/json',
            'Prediction-Key': '2b785ad623f047a0a511d9e14d9e7f2c'//change key 
        },
        body: { 'Url': session.message.text }
    }, function(error, response, body){
        console.log(validResponse(body));
        session.send(validResponse(body));
    });
}

function validResponse(body){
    if (body && body.Predictions && body.Predictions[0].Tag){
        return "This is " + body.Predictions[0].Tag
    } else{
        console.log('Oops, please try again!');
    }
}