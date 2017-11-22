var builder = require('botbuilder');
var food = require('../FavourateFood');
// Some sections have been omitted

exports.startDialog = function (bot) {
    
    // Replace {YOUR_APP_ID_HERE} and {YOUR_KEY_HERE} with your LUIS app ID and your LUIS key, respectively.
    var recognizer = new builder.LuisRecognizer('https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/a80fea42-4112-4042-8cb2-c1831bd02c7c?subscription-key=2707128c13c84e70926996fd888d8d4e&verbose=true&timezoneOffset=0&q=');

    bot.recognizer(recognizer);
	bot.dialog('GetCalories', function (session, args) {
        // if (!isAttachment(session)) {

            // Pulls out the food entity from the session if it exists
            var foodEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'food');

            // Checks if the for entity was found
            if (foodEntity) {
                session.send('Calculating calories in %s...', foodEntity.entity);
                // Insert logic here later

            } else {
                session.send("No food identified! Please try again");
            }
        // }
    }).triggerAction({
        matches: 'GetCalories'
    });
	
	
	bot.dialog('DeleteFavourite', function(session, args){
		
		session.send("DeleteFavourite intent found");
		
	}).triggerAction({
		matches: "DeleteFavourite"
	});
	
	bot.dialog('GetFavouriteFood', [
        function (session, args, next) {
            session.dialogData.args = args || {};        
            if (!session.conversationData["username"]) {
                builder.Prompts.text(session, "Enter a username to setup your account.");                
            } else {
                next(); // Skip if we already have this info.
            }
        },
        function (session, results, next) {

			if (results.response) {
				session.conversationData["username"] = results.response;
			}

			session.send("Retrieving your favourite foods");
			food.displayFavouriteFood(session, session.conversationData["username"]);  // <---- THIS LINE HERE IS WHAT WE NEED 
		}
    ]).triggerAction({
        matches: 'GetFavouriteFood'
    });
	
	bot.dialog('LookForFavourite', function(session, args){
		
		session.send("LookForFavourite  intent found");
		
	}).triggerAction({
		matches: "LookForFavourite"
	});
	
	
	bot.dialog('WantFood', function(session, args){
		
		session.send("WantFood  intent found");
		
	}).triggerAction({
		matches: "WantFood"
	});
	
	bot.dialog('WelcomeIntent', function(session, args){
		
		session.send("WelcomeIntent  intent found");
		
	}).triggerAction({
		matches: "WelcomeIntent"
	});

}