function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.home = Ti.UI.createWindow({
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.btn_google = Ti.UI.createButton({
        id: "btn_google"
    });
    $.__views.home.add($.__views.btn_google);
    $.__views.btn_gallery = Ti.UI.createButton({
        id: "btn_gallery"
    });
    $.__views.home.add($.__views.btn_gallery);
    $.__views.btn_camera = Ti.UI.createButton({
        id: "btn_camera"
    });
    $.__views.home.add($.__views.btn_camera);
    $.__views.btn_edit = Ti.UI.createButton({
        id: "btn_edit"
    });
    $.__views.home.add($.__views.btn_edit);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;