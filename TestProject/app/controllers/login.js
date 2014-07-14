$.btn_login.addEventListener('click',function() {
	var _username = $.txt_username.value;
	var _password = $.txt_password.value;

	var posts = Alloy.Collections.instance("post");
	posts.fetch();

	//short version of login
	filteredPosts = posts.where({username: _username, password:_password});
	if(filteredPosts.length	== 1){
		Ti.App.Properties.setString("username",_username);
		var un = Ti.App.Properties.getString("username");
		Ti.API.info(un);
		var win = Alloy.createController('dashboard').getView();
		win.open();
	}
	else{
		alert('incorrect login');
	}

		//longhand for login
		//	filteredPosts = posts.where({username: _username, password:_password});
		// filteredPosts.map(function(post){
		// 	var getUsername = post.get("username");
		// 	var getPassword = post.get("password");



		// 	Ti.API.info("Username: " + getUsername);
		// 	Ti.API.info("Password: " + getPassword);	

		// 	if ((_username == getUsername) && (_password == getPassword)) {
		// 		alert("Successfully Login");
		// 	}
		// 	else{
		// 		alert("Incorrect Username/Password")
		// 	}
		// });



});