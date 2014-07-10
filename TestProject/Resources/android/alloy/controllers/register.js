function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "register";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.register = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "register"
    });
    $.__views.register && $.addTopLevelView($.__views.register);
    $.__views.lbl_title = Ti.UI.createLabel({
        color: "Black",
        font: {
            fontSize: 36
        },
        shadowColor: "#aaa",
        shadowOffset: {
            x: 5,
            y: 5
        },
        shadowRadius: 3,
        text: "Create Account",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: 30,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "lbl_title"
    });
    $.__views.register.add($.__views.lbl_title);
    $.__views.lbl_username = Ti.UI.createLabel({
        text: "Username:",
        top: "20%",
        left: "10%",
        color: "black",
        id: "lbl_username"
    });
    $.__views.register.add($.__views.lbl_username);
    $.__views.txt_username = Ti.UI.createTextField({
        font: {
            fontSize: 16
        },
        hintText: "Enter Username",
        color: "black",
        borderColor: "#59BCFF",
        top: "19%",
        left: "35%",
        width: "50%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_BOTTOM,
        padding: 0,
        id: "txt_username"
    });
    $.__views.register.add($.__views.txt_username);
    $.__views.lbl_email = Ti.UI.createLabel({
        text: "Email:",
        top: "30%",
        left: "10%",
        color: "black",
        id: "lbl_email"
    });
    $.__views.register.add($.__views.lbl_email);
    $.__views.txt_email = Ti.UI.createTextField({
        font: {
            fontSize: 16
        },
        hintText: "Enter Email",
        color: "black",
        borderColor: "#59BCFF",
        top: "29%",
        left: "35%",
        width: "50%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_BOTTOM,
        padding: 0,
        id: "txt_email"
    });
    $.__views.register.add($.__views.txt_email);
    $.__views.lbl_password = Ti.UI.createLabel({
        text: "Password:",
        top: "40%",
        left: "10%",
        color: "black",
        id: "lbl_password"
    });
    $.__views.register.add($.__views.lbl_password);
    $.__views.txt_password = Ti.UI.createTextField({
        font: {
            fontSize: 16
        },
        passwordMask: true,
        hintText: "Enter Password",
        color: "black",
        borderColor: "#59BCFF",
        top: "39%",
        left: "35%",
        width: "50%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_BOTTOM,
        padding: 0,
        id: "txt_password"
    });
    $.__views.register.add($.__views.txt_password);
    $.__views.lbl_gender = Ti.UI.createLabel({
        text: "Gender",
        font: {
            fontSize: 20
        },
        top: "50%",
        left: "40%",
        color: "black",
        id: "lbl_gender"
    });
    $.__views.register.add($.__views.lbl_gender);
    $.__views.btn_male = Ti.UI.createButton({
        title: "Male",
        backgroundColor: "#3399FF",
        top: "57%",
        left: "50%",
        width: "25%",
        height: "8%",
        id: "btn_male"
    });
    $.__views.register.add($.__views.btn_male);
    $.__views.btn_female = Ti.UI.createButton({
        title: "Female",
        backgroundColor: "#FF6699",
        top: "57%",
        left: "20%",
        width: "25%",
        height: "8%",
        id: "btn_female"
    });
    $.__views.register.add($.__views.btn_female);
    $.__views.lbl_birthdate = Ti.UI.createLabel({
        text: "Birthdate:",
        top: "70%",
        left: "10%",
        color: "black",
        id: "lbl_birthdate"
    });
    $.__views.register.add($.__views.lbl_birthdate);
    $.__views.txt_date = Ti.UI.createTextField({
        font: {
            fontSize: 16
        },
        hintText: "mm|dd|yyyy",
        color: "black",
        borderColor: "#59BCFF",
        top: "69%",
        left: "35%",
        width: "31%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_BOTTOM,
        padding: 0,
        id: "txt_date"
    });
    $.__views.register.add($.__views.txt_date);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker"
    });
    $.__views.register.add($.__views.picker);
    $.__views.btn_signup = Ti.UI.createButton({
        title: "Sign Up",
        backgroundColor: "#FE2E2E",
        borderColor: "gray",
        top: "80%",
        left: "35%",
        width: "25%",
        height: "8%",
        id: "btn_signup"
    });
    $.__views.register.add($.__views.btn_signup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var functions = require("functions");
    var gender = "";
    var post = null;
    $.btn_female.addEventListener("click", function() {
        $.btn_female.backgroundColor = "#FF0066";
        $.btn_male.backgroundColor = "#3399FF";
        gender = "female";
    });
    $.btn_male.addEventListener("click", function() {
        $.btn_male.backgroundColor = "#0066FF";
        $.btn_female.backgroundColor = "#FF6699";
        gender = "male";
    });
    $.btn_signup.addEventListener("click", function() {
        username = $.txt_username.value;
        var username = $.txt_username.value;
        var email = $.txt_email.value;
        var password = $.txt_password.value;
        var birthdate = "";
        post = Alloy.createModel("post", {
            username: username,
            email: email,
            password: password,
            gender: gender,
            birthdate: birthdate
        });
        post.save();
        functions.dataCollections();
    });
    var current_Date = Date.now();
    $.txt_date.addEventListener("click", function() {
        $.picker.showDatePickerDialog({
            value: new Date(current_Date),
            callback: function(e) {
                e.cancel ? Ti.API.info("User canceled dialog") : Ti.API.info("User selected date: " + e.value);
            }
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;