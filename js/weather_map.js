



function getLocation(location) {


    $.get(location).done(function (data) {
        $('#weather').html('');
console.log(data);
        var array = data.daily.data;
        $(array).each(function (i) {
            if (i <= 2) {
                var temp = "<div class=' daily col-4'>" +
                    "<h5>" + new Date(array[i].time * 1000) + "</h5>" +
                    "<div>" + array[i].temperatureHigh + "˚"
                    + "/" + array[i].temperatureLow + "˚" + "</div>" +

                    '<div id="climacons">' + '<img class="weatherIcons"' + ' ' + 'src="' + 'climacons/SVG/' + array[i].icon + '.svg' + '"' + 'alt="' + array[i].icon + '"' + '>' +
                    '</div>' +

                    "<div >" + "Clouds:" + array[i].summary + "</div>" +
                    "<div>" + "Humidity:" + array[i].humidity + "</div>" +
                    "<div>" + "Wind:" + array[i].windSpeed + "</div>" +
                    "<div>" + "Pressure:" + array[i].pressure + "</div>" +
                    "</div>";
                $(temp).appendTo("#weather");
            }
        });
    });

}
var sanAntonio="https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+darkSkyKey+"/29.4241,-98.4936";

getLocation(sanAntonio);




// vanilla js

// document.getElementById("search").addEventListener("click",function(){
//     var usernameInput = document.getElementById("lat").value;
//
//
//     // log the value of the "username" input
//     console.log(usernameInput);
// });



// function for entering lat and long in input. Changes weather information.


$("#search").click(function(){
    var searchLL= ("/"+$("#long").val()+","+$('#lat').val());
    var newLocation="https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+darkSkyKey+searchLL;
    getLocation(newLocation);

});


// lat:40.730610
// long:-73.935242




// map js


mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 11,
    center: [-98.4951, 29.4246]
});


var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.4951, 29.4246])
    .addTo(map);





function reverseGeocode(coordinates,token ) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            return data.features[0].place_name;
        });
}






function onDragEnd() {
    var lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;

dragSearch=("/"+lngLat.lng +","+lngLat.lat)
    var newLocation="https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+darkSkyKey+searchLL;
    getLocation(newLocation);

}


marker.on('dragend', onDragEnd);
//
// $("#search").click(function(){
//     var searchLL= ("/"+$("#long").val()+","+$('#lat').val());
//     var newLocation="https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+darkSkyKey+searchLL;
//     getLocation(newLocation);
//
// });