function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "update";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.update = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "update"
    });
    $.__views.update && $.addTopLevelView($.__views.update);
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
    $.__views.update.add($.__views.lbl_title);
    $.__views.lbl_username = Ti.UI.createLabel({
        text: "Username:",
        top: "20%",
        left: "10%",
        color: "black",
        id: "lbl_username"
    });
    $.__views.update.add($.__views.lbl_username);
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
    $.__views.update.add($.__views.txt_username);
    $.__views.lbl_email = Ti.UI.createLabel({
        text: "Email:",
        top: "30%",
        left: "10%",
        color: "black",
        id: "lbl_email"
    });
    $.__views.update.add($.__views.lbl_email);
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
    $.__views.update.add($.__views.txt_email);
    $.__views.lbl_password = Ti.UI.createLabel({
        text: "Password:",
        top: "40%",
        left: "10%",
        color: "black",
        id: "lbl_password"
    });
    $.__views.update.add($.__views.lbl_password);
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
    $.__views.update.add($.__views.txt_password);
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
    $.__views.update.add($.__views.lbl_gender);
    $.__views.btn_male = Ti.UI.createButton({
        title: "Male",
        backgroundColor: "#3399FF",
        top: "57%",
        left: "50%",
        width: "25%",
        height: "8%",
        id: "btn_male"
    });
    $.__views.update.add($.__views.btn_male);
    $.__views.btn_female = Ti.UI.createButton({
        title: "Female",
        backgroundColor: "#FF6699",
        top: "57%",
        left: "20%",
        width: "25%",
        height: "8%",
        id: "btn_female"
    });
    $.__views.update.add($.__views.btn_female);
    $.__views.lbl_birthdate = Ti.UI.createLabel({
        text: "Birthdate:",
        top: "70%",
        left: "10%",
        color: "black",
        id: "lbl_birthdate"
    });
    $.__views.update.add($.__views.lbl_birthdate);
    $.__views.txt_date = Ti.UI.createTextField({
        font: {
            fontSize: 16
        },
        hintText: "mm|dd|yyyy",
        color: "black",
        borderColor: "#59BCFF",
        top: "69%",
        left: "35%",
        width: "40%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_BOTTOM,
        padding: 0,
        id: "txt_date"
    });
    $.__views.update.add($.__views.txt_date);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker"
    });
    $.__views.update.add($.__views.picker);
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
    $.__views.update.add($.__views.btn_signup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var username = "";
    var email = "";
    var password = "";
    var gender = "";
    var loginUsername = Ti.App.Properties.getString("username");
    Ti.API.info(loginUsername);
    var getData = Alloy.Collections.instance("post");
    getData.fetch();
    var filteredData = getData.where({
        username: loginUsername
    });
    filteredData.map(function(data) {
        username = data.get("username");
        email = data.get("email");
        password = data.get("password");
        gender = data.get("gender");
        Ti.API.info(username);
        Ti.API.info(email);
        Ti.API.info(password);
        Ti.API.info(gender);
    });
    $.txt_username.hintText = username;
    $.txt_email.hintText = email;
    $.txt_password.hintText = password;
    if ("female" == gender) {
        $.btn_female.backgroundColor = "#FF0066";
        $.btn_male.backgroundColor = "#3399FF";
    } else if ("male" == gender) {
        $.btn_male.backgroundColor = "#0066FF";
        $.btn_female.backgroundColor = "#FF6699";
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;