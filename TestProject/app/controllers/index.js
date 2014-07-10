function doClick(e) {
    alert($.label.text);
}

$.index.open();


$.btn_login.addEventListener("click",function(){
	var win = Alloy.createController('login').getView();
	win.open();
});

$.btn_register.addEventListener("click",function(){
	var win = Alloy.createController('register').getView();
	win.open();
});
