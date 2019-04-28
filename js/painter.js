/**
AUTH: Jared O'Toole
DATE: Saturday, April 6th, 2019
PROJ: Student Portfolio Webpage
FILE: painter.js

(jquery required)
*/

// All thanks and due credit to this tutorial:
// http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/
// https://www.w3resource.com/html5-canvas/html5-canvas-lines.php

var canvas = null;

var strokes_x = [];
var strokes_y = [];
var strokes_line = [];
var strokes_color = [];
var strokes_size = [];

var cursor_down = false;
var cursor_color = "#000000";
var cursor_size = 5;


// adds a stroke to the canvas
function addStroke(x, y, line, color, size) {
    strokes_x.push(x);
    strokes_y.push(y);
    strokes_line.push(line);
    strokes_color.push(color);
    strokes_size.push(size);
}

// removes all strokes from the canvas
function clearCanvas() {
    strokes_x = [];
    strokes_y = [];
    strokes_line = [];
    strokes_color = [];
    strokes_size = [];
    drawCanvas();
}

// sets the cursor color & size
function setCursor(color, size) {
    cursor_color = color;
    cursor_size = size;
}

// redraws the canvas
function drawCanvas() {

    canvas.lineCap = "round";
    canvas.lineJoin = "round";
    
    canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    
    for (var i=0; i < strokes_x.length; i++) {
        
        // set stroke properties
        canvas.strokeStyle = strokes_color[i];
        canvas.lineWidth = strokes_size[i];
        
        // determine where to start the stroke
        canvas.beginPath();
        
        if (strokes_line[i] && (i > 0)) {
            canvas.moveTo(strokes_x[i-1], strokes_y[i-1]);
        }
        else {
            canvas.moveTo(strokes_x[i]-1, strokes_y[i]);
        }
        
        // create the stroke
        canvas.lineTo(strokes_x[i], strokes_y[i]);
        canvas.stroke();
    }
}

$(document).ready(function() {
    
    // get the context for this canvas
    canvas = document.getElementById("painter").getContext("2d");
    
    // user clicks the canvas
    $("#painter").mousedown(function(e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        
        cursor_down = true;
        
        addStroke(x, y, false, cursor_color, cursor_size);
        drawCanvas();
    });
    
    // user mouses across the canvas
    $("#painter").mousemove(function(e) {
        if (cursor_down) {
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            
            addStroke(x, y, true, cursor_color, cursor_size);
            drawCanvas();
        }
    });
    
    // user releases the mouse button
    $("#painter").mouseup(function(e) {
        cursor_down = false;
    });
    
    // user mouses out from the canvas
    $("#painter").mouseleave(function(e) {
        cursor_down = false;
    });
    
});