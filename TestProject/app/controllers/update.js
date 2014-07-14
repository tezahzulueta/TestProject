var username = "";
var email = "";
var password = "";
var gender = "";

var loginUsername = Ti.App.Properties.getString("username");
Ti.API.info(loginUsername);

var getData = Alloy.Collections.instance("post");
getData.fetch();

var filteredData = getData.where({username: loginUsername});
filteredData.map(function(data) {
    username = data.get('username');
    email = data.get('email');
    password = data.get('password');
    gender = data.get('gender');

    Ti.API.info(username);
    Ti.API.info(email);
    Ti.API.info(password);
    Ti.API.info(gender);
});

$.txt_username.hintText = username;
$.txt_email.hintText = email;
$.txt_password.hintText = password;

if(gender == "female") {
	$.btn_female.backgroundColor = '#FF0066';   //change the color of the female button when click
    $.btn_male.backgroundColor = '#3399FF'; 
}
else if(gender == "male") {
	$.btn_male.backgroundColor = '#0066FF';
    $.btn_female.backgroundColor = '#FF6699';
}