var outputElement = document.getElementById("position");

//[Latitude, longitude]
var peopleLocations = [
    [ 50.937683, -1.395447 ], //us
    [ 50.913853, -1.367283], //chessel ave
    [ 50.903466, -1.405920 ] // west quay
];

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        outputElement.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    peopleLocations.push([position.coords.latitude,position.coords.longitude]);
    var totalLong = 0;
    var totalLat = 0;

    for (let i = 0; i < peopleLocations.length; i++) {
        totalLong += peopleLocations[i][1];
        totalLat += peopleLocations[i][0];
    }

    outputElement.innerHTML = googleMapsEmbed(totalLat/peopleLocations.length, totalLong/peopleLocations.length);
}

function googleMapsEmbed (lat, long) {
    return "<iframe width=100% height='900' id='gmap_canvas' src='https://maps.google.com/maps?q=" + lat + "," + long + "&t=&z=13&ie=UTF8&iwloc=&output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe>";
}