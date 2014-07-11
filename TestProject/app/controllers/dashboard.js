

$.btn_google.addEventListener('click', function() { 
    Titanium.Platform.openURL("http://google.com"); 
});

$.btn_camera.addEventListener('click', function() {
	Titanium.Media.showCamera({
	
    success:function(event) {
        // called when media returned from the camera
        Ti.API.debug('Our type was: '+event.mediaType);
        if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
            var imageView = Ti.UI.createImageView({
                width:this.width,
                height:this.height,
                image:event.media
            });
            dashboard.add(imageView);
        } else {
            alert("got the wrong type back ="+event.mediaType);
        }
    },
    cancel:function() {
        // called when user cancels taking a picture
    },
    error:function(error) {
        // called when there's an error
        var a = Titanium.UI.createAlertDialog({title:'Camera'});
        if (error.code == Titanium.Media.NO_CAMERA) {
            a.setMessage('Please run this test on device');
        } else {
            a.setMessage('Unexpected error: ' + error.code);
        }
        a.show();
    },
    saveToPhotoGallery:true,
    // allowEditing and mediaTypes are iOS-only settings
    allowEditing:true,
    mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
});
});

$.btn_gallery.addEventListener('click', function() {
	Titanium.Media.openPhotoGallery({
		    success:function(event) {
        // called when media returned from the camera
        Ti.API.debug('Our type was: '+event.mediaType);
        if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
            var imageView = Ti.UI.createImageView({
                width:this.width,
                height:this.height,
                image:event.media
            });
            dashboard.add(imageView);
        } else {
            alert("got the wrong type back ="+event.mediaType);
        }
    },
    cancel:function() {
        // called when user cancels taking a picture
    },
    error:function(error) {
        // called when there's an error
        var a = Titanium.UI.createAlertDialog({title:'Camera'});
        if (error.code == Titanium.Media.NO_CAMERA) {
            a.setMessage('Please run this test on device');
        } else {
            a.setMessage('Unexpected error: ' + error.code);
        }
        a.show();
    },
    saveToPhotoGallery:true,
    // allowEditing and mediaTypes are iOS-only settings
    allowEditing:true,
    mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
	});
});


var updateProfile = function() {
	var win = Alloy.createController('register').getView();
	win.open();
}
$.btn_profile.addEventListener('click', updateProfile);
