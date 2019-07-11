$(document).ready(function() {
    "use strict";

    function updatePage() {
        $.ajax("data/blog.json").done(function (data) {
            $('#post').html('');
            $(data).each(function (i, e) {
                var blogpost = "<h3>" + e.title + "</h3>" +
                    "<div>" + e.content + "</div>" + "<div>" + e.date + "</div>" + "<div>" + e.categories + "</div>";
                $(blogpost).appendTo("#post");
            });
        });

    }

    updatePage();


    // $("#update").click(updatePage);

});