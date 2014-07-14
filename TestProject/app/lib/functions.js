var _username = "";
var _email = "";
var _password = "";
var _gender = "";
var _birthdate = "";

//functions for getting the date in database
var dataCollections = function() {
	var collections = Alloy.Collections.instance("post");
	collections.fetch({success:function(){
		//collections.map() is a function that loops through each element in the collection
		//collections.map accepts a function as an argument
		//data was the name of the function where I want to pass the value in collections	
		collections.map(function(post){
			_username = post.get("username");
			_email = post.get("email");
			_password = post.get("password");
			_gender = post.get("gender");
			_birthdate = post.get("birthdate");
			//for testing
			Ti.API.info("USERNAME: " + _username);
			Ti.API.info("EMAIL: " + _email);
			Ti.API.info("PASSWORD: " + _password);
			Ti.API.info("GENDER: " + _gender);

		});
	}});
};

exports.dataCollections = dataCollections;
