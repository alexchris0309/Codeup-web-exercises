


$.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+darkSkyKey+"/29.4241,-98.4936").done(function(data) {
    var array= data.daily.data;
    $(array).each(function (i) {
        if(i <=2) {
            var temp = "<div class=' daily col-4'>"+
                "<h5>" + new Date(array[i].time  *1000)+ "</h5>" +
                "<div>" + array[i].temperatureHigh+"˚"
                + "/" + array[i].temperatureLow +"˚"+ "</div>" +

                '<div id="climacons">' + '<img class="weatherIcons"' + ' ' + 'src="' +  'climacons/SVG/' + array[i].icon + '.svg' + '"' + 'alt="' + array[i].icon + '"' +'>' +
                '</div>'+

                "<div >"+"Clouds:" + array[i].summary + "</div>"+
                "<div>"+"Humidity:" + array[i].humidity + "</div>"+
                "<div>"+"Wind:" + array[i].windSpeed + "</div>"+
                "<div>"+"Pressure:" + array[i].pressure + "</div>"+
                "</div>";
            $(temp).appendTo("#weather");
        }
    });
});




var lat=$( "#lat" ).val();

var long=$("#long").val();


$("#search").click(function(){

    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + lat + "," + long + '"').done(function (data) {
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


});


//
// var goThere = document.getElementById('uInput');
// goThere.addEventListener('click' ,function (event) {
//     geocode(userAdd.value,mapboxtoken).then(function (result) {
//         changeLocation.innerText = userAdd.value;
//         $('#navLocation').text(userAdd.value);
//         map.setCenter(result);
//         map.setZoom(10);
//         var newLocation = (result[1] + ',' + result[0]);
//         $.get(darkSkyUrl + darkSkyKey + "/" + newLocation).done(function(data){
//             $('#weatherCards').html(dailyForecast(data.daily.data));
//         }).fail(function(){
//             console.log("ERROR!");
//         });
//     });
// }, false);















// map js


mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 11,
    center: [-98.4951, 29.4246]
});


var marker = new mapboxgl.Marker()
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


reverseGeocode({lng: -98.4861, lat: 29.4260}, mapboxToken).then(function(results) {
    // logs the address for The Alamo
    console.log(results);
});