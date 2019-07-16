



function getLocation(location) {


    $.get(location).done(function (data) {
        $('#weather').html('');
        $('.todayweather').html('');
console.log(data);
        var array = data.daily.data;
        $(array).each(function (i) {
            if (i === 0) {
                var temp = "<div id='border' class=' daily '>" +
                    "<h5>" + new Date(array[i].time * 1000) + "</h5>" +
                    "<div>" + array[i].temperatureHigh + "˚"
                    + "/" + array[i].temperatureLow + "˚" + "</div>" +

                    '<div id="climacons">' + '<img class="weatherIcons"' + ' ' + 'src="' + 'climacons/SVG/' + array[i].icon + '.svg' + '"' + 'alt="' + array[i].icon + '"' + '>' +
                    '</div>' +

                    "<div id='summary'>"  + array[i].summary + "</div>" +
                    "<div>" + "Humidity:" + array[i].humidity + "</div>" +
                    "<div>" + "Wind:" + array[i].windSpeed + "</div>" +
                    "<div>" + "Pressure:" + array[i].pressure + "</div>" +
                    "</div>";
                $(temp).appendTo('.todayweather');
            }
            else if (i >0 && i<=3) {

                var temp = "<div id='border' class=' daily col-4 '>" +
                    "<h5>" + new Date(array[i].time * 1000) + "</h5>" +
                    "<div>" + array[i].temperatureHigh + "˚"
                    + "/" + array[i].temperatureLow + "˚" + "</div>" +

                    '<div id="climacons">' + '<img class="weatherIcons"' + ' ' + 'src="' + 'climacons/SVG/' + array[i].icon + '.svg' + '"' + 'alt="' + array[i].icon + '"' + '>' +
                    '</div>' +

                    "<div id='summary'>" + array[i].summary + "</div>" +
                    "<div>" + "Humidity:" + array[i].humidity + "</div>" +
                    "<div>" + "Wind:" + array[i].windSpeed + "</div>" +
                    "<div>" + "Pressure:" + array[i].pressure + "</div>" +
                    "</div>";
                $(temp).appendTo('#weather');
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


// $("#search").click(function(){
//     var searchLL= ("/"+$("#long").val()+","+$('#lat').val());
//     var newLocation="https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+darkSkyKey+searchLL;
//     getLocation(newLocation);
//
// });


// lat:40.730610
// long:-73.935242




// map js


mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4951, 29.4246]
});
//     map.addControl(new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken,
//     mapboxgl: mapboxgl
// }));


var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.4951, 29.4246])
    .addTo(map);



$('#searchbutton').click(function(event){
    var addressSearch=$("#address").val();

    geocode(addressSearch,mapboxToken).then(function(result){

        // console.log(+""+result[0]+ result[1]);
        console.log(result);
        var newLocation="https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+darkSkyKey+"/"+result[1]+","+result[0];
        map.setCenter(result);
        map.setZoom(10);
        getLocation(newLocation);

        var marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat(result)
            .addTo(map);
        function onDragEnd() {
            var lngLat = marker.getLngLat();

            var dragSearch=("/"+lngLat.lat +","+lngLat.lng);
// console.log(dragSearch)
            var newLocation="https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+darkSkyKey+dragSearch;
            getLocation(newLocation);

        }

        marker.on('dragend', onDragEnd);
    });



});




// drag marker search


function onDragEnd() {
    var lngLat = marker.getLngLat();

    var dragSearch=("/"+lngLat.lat +","+lngLat.lng);
// console.log(dragSearch)
    var newLocation="https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+darkSkyKey+dragSearch;
    getLocation(newLocation);

}

marker.on('dragend', onDragEnd);












