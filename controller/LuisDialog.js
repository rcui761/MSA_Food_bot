var builder = require('botbuilder');
// Some sections have been omitted

exports.startDialog = function (bot) {
    
    // Replace {YOUR_APP_ID_HERE} and {YOUR_KEY_HERE} with your LUIS app ID and your LUIS key, respectively.
    var recognizer = new builder.LuisRecognizer('https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/a80fea42-4112-4042-8cb2-c1831bd02c7c?subscription-key=2707128c13c84e70926996fd888d8d4e&verbose=true&timezoneOffset=0&q=	');

    bot.recognizer(recognizer);
	bot.dialog('GetCalories', function(session, args){
		
		session.send("Get calories  intent found");
		
	}).triggerAction({
		matches: "GetCalories"
	});
	
	
	bot.dialog('DeletFavourite', function(session, args){
		
		session.send("DeletFavourite intent found");
		
	}).triggerAction({
		matches: "DeletFavourite"
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