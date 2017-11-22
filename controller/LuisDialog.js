var builder = require('botbuilder');
va//r food = require('./Favorate food');
// Some sections have been omitted

exports.startDialog = function (bot) {
    
    // Replace {YOUR_APP_ID_HERE} and {YOUR_KEY_HERE} with your LUIS app ID and your LUIS key, respectively.
    var recognizer = new builder.LuisRecognizer('https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/a80fea42-4112-4042-8cb2-c1831bd02c7c?subscription-key=2707128c13c84e70926996fd888d8d4e&verbose=true&timezoneOffset=0&q=');

    bot.recognizer(recognizer);
	bot.dialog('GetCalories', function(session, args){
        if (!isAttachment(session)) {

            // Pulls out the food entity from the session if it exists
            var foodEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'food');

            // Checks if the for entity was found
            if (foodEntity) {
                session.send('Calculating calories in %s...', foodEntity.entity);
                // Insert logic here later

            } else {
                session.send("No food identified! Please try again");
            }
        }
    }).triggerAction({
        matches: 'GetCalories'
    });
	
	
	bot.dialog('DeleteFavourite', function(session, args){
		
		session.send("DeleteFavourite intent found");
		
	}).triggerAction({
		matches: "DeleteFavourite"
	});
	
	bot.dialog('GetFavouriteFood', function(session, args){
		
		session.send("GetFavouriteFood  intent found");
		
	}).triggerAction({
		matches: "GetFavouriteFood"
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