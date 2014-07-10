function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.login = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "login"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    $.__views.lbl_title = Ti.UI.createLabel({
        color: "Black",
        font: {
            fontSize: 48
        },
        shadowColor: "#aaa",
        shadowOffset: {
            x: 5,
            y: 5
        },
        shadowRadius: 3,
        text: "Login Form",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: 30,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "lbl_title"
    });
    $.__views.login.add($.__views.lbl_title);
    $.__views.lbl_username = Ti.UI.createLabel({
        color: "Black",
        font: {
            fontSize: 16
        },
        text: "Username:",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "25%",
        left: "20%",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "lbl_username"
    });
    $.__views.login.add($.__views.lbl_username);
    $.__views.txt_username = Ti.UI.createTextField({
        borderColor: "black",
        font: {
            fontSize: 16
        },
        color: "black",
        top: "24%",
        left: "45%",
        width: "40%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_BOTTOM,
        id: "txt_username"
    });
    $.__views.login.add($.__views.txt_username);
    $.__views.lbl_password = Ti.UI.createLabel({
        color: "Black",
        font: {
            fontSize: 16
        },
        text: "Password:",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "40%",
        left: "20%",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "lbl_password"
    });
    $.__views.login.add($.__views.lbl_password);
    $.__views.txt_password = Ti.UI.createTextField({
        borderColor: "black",
        font: {
            fontSize: 16
        },
        color: "black",
        top: "39%",
        left: "45%",
        width: "40%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_BOTTOM,
        id: "txt_password"
    });
    $.__views.login.add($.__views.txt_password);
    $.__views.btn_login = Ti.UI.createButton({
        title: "Login",
        backgroundColor: "blue",
        top: "50%",
        left: "50%",
        width: "30%",
        height: Ti.UI.SIZE,
        id: "btn_login"
    });
    $.__views.login.add($.__views.btn_login);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;