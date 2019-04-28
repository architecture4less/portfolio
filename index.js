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
    
    // add functionality to the block-1 tab-nav buttons
    $("#block-1 .tab-nav .button").click(function() {
        var id = $(this).attr("class").split(/\s+/)[1];
        $("#block-1 .tab").removeClass("active");
        $("#block-1 #" + id + ".tab").addClass("active");
        $("#block-1 .tab-nav .button").removeClass("selected");
        $(this).addClass("selected");
    });
    
    // add functionality to the block-2 tab-nav buttons
    $("#block-2 .tab-nav .button").click(function() {
        var id = $(this).attr("class").split(/\s+/)[1];
        $("#block-2 .tab").removeClass("active");
        $("#block-2 #" + id + ".tab").addClass("active");
        $("#block-2 .tab-nav .button").removeClass("selected");
        $(this).addClass("selected");
    });
});
