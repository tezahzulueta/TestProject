var functions = require('functions');


//variables used in register form
var username = $.txt_username.value;
var email = $.txt_email.value;
var password = $.txt_password.value;
var gender = "";
var birthdate = "";
var post = null;
var posts = null;
//function for saving and verifying the data input in textfield
var saveData = function() 
{
  if ((username != '') && (email != '') && (password != ''))
    {  
      //create post variable to create access to database name post
      post = Alloy.createModel("post", {

      //pass the value of textfield to id name in database
      username: username,
      email: email,
      password: password,
      gender: gender,
    });
      //code to save date from database
      post.save();
    }
    alert("Dasd");

      // //code for accessing the database post
      // posts = Alloy.Collections.instance("post");
      // posts.fetch();

      // //for getting the data in database and passing it to the variables
      // posts.map(function(post){
      //   var _username = post.get("usenrame");
      //   var _email = post.get("email");
      //   var _password = post.get("password");
      //   var _gender = post.get("gender");

      // //for testing if the data has been saved
      //   Ti.API.info("USERNAME: " + _username);
      //   Ti.API.info("EMAIL: " + _email);
      //   Ti.API.info("PASSWORD: " + _password);
      //   Ti.API.info("GENDER: " + _gender);

      // });
  // else 
  //   {
  //     //if the textfiled has a null value alert message will pop up
  //     alert("Fill up the field!");
  //   }
};

//code for clicking the female button 
$.btn_female.addEventListener('click', function() { 
    $.btn_female.backgroundColor = '#FF0066';   //change the color of the female button when click
    $.btn_male.backgroundColor = '#3399FF';     //change the color of the male button when click
    gender = "female";    //put female value to the variable gender

    posts = Alloy.Collections.instance("post");
    posts.fetch();
    
    //code for getting the data from database
    posts.map(function(post){
    var _email = post.get("email");
    var _password = post.get("password");
    var _gender = post.get("gender");
    var _birthdate = post.get("birthdate");
    //for testing if the data has been save
    Ti.API.info("USERNAME: " + _username);
    Ti.API.info("EMAIL: " + _email);
    Ti.API.info("PASSWORD: " + _password);
    Ti.API.info("GENDER" + _gender);
    });
 }); 

$.btn_male.addEventListener('click', function() { 
    $.btn_male.backgroundColor = '#0066FF';
    $.btn_female.backgroundColor = '#FF6699';
    gender = "male";
 });  

$.btn_signup.addEventListener('click', saveData);

var current_Date = Date.now();  

$.txt_date.addEventListener('click',function() {
	$.picker.showDatePickerDialog({
  		value: new Date(current_Date),
  		callback: function(e) {
    	if (e.cancel) {
      		Ti.API.info('User canceled dialog');
    	} 
   		else {
      		Ti.API.info('User selected date: ' + e.value);
    	}
  		}
	});	
});