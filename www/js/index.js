var onSuccess = function(position) {
    currentLatitude = position.coords.latitude;
    currentLongitude = position.coords.longitude;
    $.get("http://54.201.182.85/getlocs?user="+document.getElementById('username').value+"&lat="+currentLatitude+"&lon="+currentLongitude, function(data,status){
        $.mobile.navigate( "#pagetwo", { transition : "slide", info: "info about the #bar hash" });
        //$.mobile.changePage("#pagetwo");
        //navigator.notification.alert(data);
        //document.getElementById("dead").innerHTML = data;
    });
    // alert('Latitude: '          + position.coords.latitude          + '\n' +
    //       'Longitude: '         + position.coords.longitude         + '\n' +
    //       'Altitude: '          + position.coords.altitude          + '\n' +
    //       'Accuracy: '          + position.coords.accuracy          + '\n' +
    //       'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
    //       'Heading: '           + position.coords.heading           + '\n' +
    //       'Speed: '             + position.coords.speed             + '\n' +
    //       'Timestamp: '         + position.timestamp                + '\n');
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

//$(document).on("click", "#submitButton", function(evt) {
$("#loginForm").on("submit",function(e) {
    //$.mobile.navigate( "#pagetwo", { transition : "slide", info: "info about the #bar hash" });
    $.get("http://54.201.182.85/login?username="+document.getElementById('username').value+"&password="+document.getElementById('password').value, function(data,status){
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        
    });
    return false;
});
$( "#find" ).click(function() {
  navigator.notification.alert("Find");
});

$( "#share" ).click(function() {
  navigator.notification.alert("Share");
});