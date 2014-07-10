function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.lbl_title = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
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
        text: "Test Project",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: 30,
        id: "lbl_title"
    });
    $.__views.index.add($.__views.lbl_title);
    $.__views.btn_login = Ti.UI.createButton({
        title: "Login",
        backgroundColor: "blue",
        top: "20%",
        width: "30%",
        height: Ti.UI.SIZE,
        id: "btn_login"
    });
    $.__views.index.add($.__views.btn_login);
    $.__views.btn_register = Ti.UI.createButton({
        title: "Register",
        backgroundColor: "red",
        top: "10",
        width: "30%",
        height: Ti.UI.SIZE,
        id: "btn_register"
    });
    $.__views.index.add($.__views.btn_register);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    $.btn_login.addEventListener("click", function() {
        var win = Alloy.createController("login").getView();
        win.open();
    });
    $.btn_register.addEventListener("click", function() {
        var win = Alloy.createController("register").getView();
        win.open();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;