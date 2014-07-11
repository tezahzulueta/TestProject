var functions = require('functions');

//variables used in register form
var gender = "";  
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
};

//code for clicking the female button 
$.btn_female.addEventListener('click', function() { 
    $.btn_female.backgroundColor = '#FF0066';   //change the color of the female button when click
    $.btn_male.backgroundColor = '#3399FF';     //change the color of the male button when click
    gender = "female";    //put female value to the variable gender
 }); 

$.btn_male.addEventListener('click', function() { 
    $.btn_male.backgroundColor = '#0066FF';
    $.btn_female.backgroundColor = '#FF6699';
    gender = "male";
 });  

$.btn_signup.addEventListener("click", function() {
  //passing the value of textfield into variable
  username = $.txt_username.value;
  var username = $.txt_username.value;
  var email = $.txt_email.value;
  var password = $.txt_password.value;
  var birthdate = "";

  //saving the value of variable in database
  post = Alloy.createModel("post", {
    username: username,
    email: email,
    password: password,
    gender: gender,
    birthdate: birthdate
  });
  post.save();
  //calling the functions 
  functions.dataCollections();
});

var current_Date = Date.now();  

$.txt_date.addEventListener('click',function() {
	$.picker.showDatePickerDialog({
  		value: new Date(current_Date),
  		callback: function(e) {
    	if (e.cancel) {
      		Ti.API.info('User canceled dialog');
    	} 
   		else {
          $.txt_date.value = e.value;
      		Ti.API.info('User selected date: ' + e.value);
    	}
  		}
	});	
});