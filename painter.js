/**
AUTH: Jared O'Toole
DATE: Saturday, April 6th, 2019
PROJ: Student Portfolio Webpage
FILE: painter.js
*/

var brushing = false;

$(document).ready(function() {
    
    // TEMP placeholder
    var canvas = document.getElementById("painter");
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Serif";
    ctx.strokeText("WORK IN PROGRESS!", 10, 50);
    
    $("#painter").mousedown(function(e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        
        var brushing = True;
        addClick(x, y);
        redraw();
    });
    
    $("#painter").mousemove(function(e) {
        
    });

});