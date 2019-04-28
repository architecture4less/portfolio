/**
AUTH: Jared O'Toole
DATE: Saturday, February 23rd, 2019
PROJ: Student Portfolio Webpage
FILE: index.js

(jquery required)
*/

$(document).ready(function() {
    
    // make the tab-navs visible.
    $(".tab-block .tab-nav").show();
    
    // add functionality to the tab-nav buttons
    $(".tab-block .tab-nav .button").click(function() {
        var id = $(this).attr("class").split(/\s+/)[1];
        $(".tab-block .tab").removeClass("active");
        $(".tab-block #" + id + ".tab").addClass("active");
        $(".tab-block .tab-nav .button").removeClass("selected");
        $(this).addClass("selected");
    });
});
