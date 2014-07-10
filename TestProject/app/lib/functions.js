//functions for getting the date in database
var dataCollections = function() {
	var collections = Alloy.Collections.instance("post");
	collections.fetch();

	//collections.map() is a function that loops through each element in the collection
	//collections.map accepts a function as an argument
	//data was the name of the function where I want to pass the value in collections
	collections.map(function(collections){
		var _username = collections.get("username");
		var _email = collections.get("email");
		var _password = collections("password");
		var _gender = collections("gender");
		var _birthdate = collections("birthdate");
	});

	//for testing
		Ti.API.info("USERNAME: " + _username);
		Ti.API.info("EMAIL: " + _email);
		Ti.API.info("PASSWORD: " + _password);
		Ti.API.info("GENDER" + _gender);
};

exports.dataCollections = dataCollections;
