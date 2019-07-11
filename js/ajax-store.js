$(document).ready(function() {
    "use strict";


    function updatePage() {
        $.ajax("data/inventory.json").done(function (data) {
            $('#insertProducts').html('');
            $(data).each(function (i, e) {
                var tblRow = "<tr>" + "<td>" + e.title + "</td>" +
                    "<td>" + e.quantity + "</td>" + "<td>" + e.price + "</td>" + "<td>" + e.categories + "</td>" + "</tr>";
                $(tblRow).appendTo("#insertProducts");
            });
        });

    }

    updatePage();


    $("#refresh").click(updatePage);


});


//
//
// <script>
// (function() {
//     "use strict";
//     // TODO: Create an ajax GET request for /data/inventory.json
//     function updatePage() {
//         // var tools = $.ajax("data/inventory.json")
//
//         $.ajax("data/inventory.json").done(function (data) {
//             var html = buildHTML(data);
//             $('#insertProducts').html(html);
//
//         });
//     }
//
//     updatePage();
//     function buildHTML(products) {
//         $('#insertProducts').html('');
//         var productsHTML = "";
//         products.forEach(function(product) {
//             productsHTML += '<tr>';
//             productsHTML += '<td>'+product.title+'</td>';
//             productsHTML += '<td>' + product.quantity + '</td>';
//             productsHTML += '<td>'+product.price+'</td>';
//             productsHTML += '<td>' + product.categories + '</td>';
//             productsHTML += '</tr>';
//
//         });
//         $(productsHTML).appendTo('#insertProducts');
//
//     }
//
//     $('#button').click(updatePage);
//
//
//     TODO: Take the data from inventory.json and append it to the products table
//           HINT: Your data should come back as a JSON object; use console.log() to inspect
//                 its contents and fields
//           HINT: You will want to target #insertProducts for your new HTML elements
// })();