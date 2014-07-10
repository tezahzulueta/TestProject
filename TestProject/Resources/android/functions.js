var _username = "";

var _email = "";

var _password = "";

var _gender = "";

var _birthdate = "";

var dataCollections = function() {
    var collections = Alloy.Collections.instance("post");
    collections.fetch({
        success: function() {
            collections.map(function(post) {
                _username = post.get("username");
                _email = post.get("email");
                _password = post.get("password");
                _gender = post.get("gender");
                _birthdate = post.get("birthdate");
                Ti.API.info("USERNAME: " + _username);
                Ti.API.info("EMAIL: " + _email);
                Ti.API.info("PASSWORD: " + _password);
                Ti.API.info("GENDER: " + _gender);
            });
        }
    });
};

exports.dataCollections = dataCollections;