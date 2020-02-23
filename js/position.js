var outputElement = document.getElementById("position");

//[Latitude, longitude]
var peopleLocations = [
    [ 51.248210, -2.850712 ], // Stone Allerton
    [ 52.205337, 0.121817 ], // Cambridge
    [ 51.277283, -0.842655 ], // Fleet
    [ 50.718412, -3.533899 ] // Exeter
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

    alert(getPlace(long, lat));

    //outputElement.innerHTML = googleMapsEmbed(getPlace(long, lat));
}

// Google Maps API key: AIzaSyDW_Iu5rRhPQJLOaMGJMydLJm6tW1cMej4
function googleMapsEmbed (location) {
    return "<iframe width=100% height='900' id='gmap_canvas' src='https://www.google.com/maps/embed/v1/search?q=food%20near" + location + "&key=AIzaSyDW_Iu5rRhPQJLOaMGJMydLJm6tW1cMej4' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe>";
}