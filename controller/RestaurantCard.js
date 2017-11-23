var rest = require('../API/Restclient');
var builder = require('botbuilder');
//Calls 'getYelpData' in RestClient.js with 'displayRestaurantCards' as callback to get list of restaurant information
exports.displayRestaurantCards = function getRestaurantData(foodName, location, session){
    var url ='https://api.yelp.com/v3/businesses/search?term='+foodName+'&location='+location + '&limit=5';
    var auth ='LvJRTU7EijzWPrPBAwk6DAjI6BehqIjQBSI3QP2U45ikcAd-pzSu9PXLqIUfCuAcdrv1e2tKE33E_FuHWxCLfvGrhZvZHwvhKumF4B4C6_A0--Dac9-DQeag5hoWWnYx ';//need to change 
    rest.getYelpData(url,auth,session,displayRestaurantCards);
}

function displayRestaurantCards(message, session) {//message is the json 
    var attachment = [];
    var restaurants = JSON.parse(message);
    
    //For each restaurant, add herocard with name, address, image and url in attachment
    for (var index in restaurants.businesses) {
        var restaurant = restaurants.businesses[index];//resturant is the index 
        var name = restaurant.name;
        var imageURL = restaurant.image_url;
        var url = restaurant.url;
        var address = restaurant.location.address1 + ", " + restaurant.location.city;

        var card = new builder.HeroCard(session)
            .title(name)
            .text(address)
            .images([
                builder.CardImage.create(session, imageURL)])//create image url
            .buttons([
                builder.CardAction.openUrl(session, url, 'More Information')
            ]);
        attachment.push(card);

    }

    //Displays restaurant hero card carousel in chat box 
    var message = new builder.Message(session)
        .attachmentLayout(builder.AttachmentLayout.carousel)
        .attachments(attachment);
    session.send(message);//send the message 
}