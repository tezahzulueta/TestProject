var dataCollections = function() {
    var collections = Alloy.Collections.instance("post");
    collections.fetch();
    collections.map(function(collections) {
        collections.get("username");
        collections.get("email");
        collections("password");
        collections("gender");
        collections("birthdate");
    });
    Ti.API.info("USERNAME: " + _username);
    Ti.API.info("EMAIL: " + _email);
    Ti.API.info("PASSWORD: " + _password);
    Ti.API.info("GENDER" + _gender);
};

exports.dataCollections = dataCollections;