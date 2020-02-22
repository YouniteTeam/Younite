var outputElement = document.getElementById("demo");

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
    outputElement.innerHTML = "<h2>Others</h2>";
    peopleLocations.push([position.coords.latitude,position.coords.longitude]);
    var totalLong = 0;
    var totalLat = 0;

    for (let i = 0; i < peopleLocations.length; i++) {
        outputElement.innerHTML += "<br>"+peopleLocations[i][0]+", "+peopleLocations[i][1];
        totalLong += peopleLocations[i][1];
        totalLat += peopleLocations[i][0];
    }

    outputElement.innerHTML += "<h2>You</h2>"+
        "<br>Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude+
        "<br>Total: "+ totalLat + ", " + totalLong+
        "<br>Center: "+ googleMapsLink(totalLat/peopleLocations.length, totalLong/peopleLocations.length, "link" ) ;
}

function googleMapsLink (lat, long, html ) {
    return "<a href='http://www.google.com/maps/search/"+ lat + ","+ long +"'>" +html+ "</a>" ;
}