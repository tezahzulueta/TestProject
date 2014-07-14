function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dashboard";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.dashboard = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "dashboard"
    });
    $.__views.dashboard && $.addTopLevelView($.__views.dashboard);
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
        text: "Dashboard",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: 30,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "lbl_title"
    });
    $.__views.dashboard.add($.__views.lbl_title);
    $.__views.btn_google = Ti.UI.createButton({
        title: "Open Google",
        backgroundColor: "blue",
        top: "10%",
        width: "30%",
        height: Ti.UI.SIZE,
        id: "btn_google"
    });
    $.__views.dashboard.add($.__views.btn_google);
    $.__views.btn_gallery = Ti.UI.createButton({
        title: "Open Photo Gallery",
        backgroundColor: "red",
        top: "10",
        width: "30%",
        height: Ti.UI.SIZE,
        id: "btn_gallery"
    });
    $.__views.dashboard.add($.__views.btn_gallery);
    $.__views.btn_camera = Ti.UI.createButton({
        title: "Open Camera",
        backgroundColor: "blue",
        top: "10",
        width: "30%",
        height: Ti.UI.SIZE,
        id: "btn_camera"
    });
    $.__views.dashboard.add($.__views.btn_camera);
    $.__views.btn_profile = Ti.UI.createButton({
        title: "Edit Profile",
        backgroundColor: "red",
        top: "10",
        width: "30%",
        height: Ti.UI.SIZE,
        id: "btn_profile"
    });
    $.__views.dashboard.add($.__views.btn_profile);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.btn_google.addEventListener("click", function() {
        Titanium.Platform.openURL("http://google.com");
    });
    $.btn_camera.addEventListener("click", function() {
        Titanium.Media.showCamera({
            success: function(event) {
                Ti.API.debug("Our type was: " + event.mediaType);
                if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                    var imageView = Ti.UI.createImageView({
                        width: this.width,
                        height: this.height,
                        image: event.media
                    });
                    dashboard.add(imageView);
                } else alert("got the wrong type back =" + event.mediaType);
            },
            cancel: function() {},
            error: function(error) {
                var a = Titanium.UI.createAlertDialog({
                    title: "Camera"
                });
                error.code == Titanium.Media.NO_CAMERA ? a.setMessage("Please run this test on device") : a.setMessage("Unexpected error: " + error.code);
                a.show();
            },
            saveToPhotoGallery: true,
            allowEditing: true,
            mediaTypes: [ Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO ]
        });
    });
    $.btn_gallery.addEventListener("click", function() {
        Titanium.Media.openPhotoGallery({
            success: function(event) {
                Ti.API.debug("Our type was: " + event.mediaType);
                if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                    var imageView = Ti.UI.createImageView({
                        width: this.width,
                        height: this.height,
                        image: event.media
                    });
                    dashboard.add(imageView);
                } else alert("got the wrong type back =" + event.mediaType);
            },
            cancel: function() {},
            error: function(error) {
                var a = Titanium.UI.createAlertDialog({
                    title: "Camera"
                });
                error.code == Titanium.Media.NO_CAMERA ? a.setMessage("Please run this test on device") : a.setMessage("Unexpected error: " + error.code);
                a.show();
            },
            saveToPhotoGallery: true,
            allowEditing: true,
            mediaTypes: [ Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO ]
        });
    });
    $.btn_profile.addEventListener("click", function() {
        var win = Alloy.createController("update").getView();
        win.open();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;