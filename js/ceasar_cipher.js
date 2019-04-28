/**
AUTH: Jared O'Toole
DATE: Thursday, April 11th, 2019
PROJ: Student Portfolio Webpage
FILE: ceasar_cipher.js
*/

// redefine Javascript's modulo to give positive numbers only...
function modulo(n, m) {
    return ((n % m) + m) % m;
}

// encode and decode Ceasar cipher messages...
function shiftMessage(msg, shift) {
    
    var result = "";
    for (var i = 0; i < msg.length; i++) {
      
        var dec = msg.charCodeAt(i);

        // shift uppercase letters
        if ((65 <= dec) && (dec < 91)) {
            dec = modulo((dec - 65 + shift), (91 - 65)) + 65;
        }
        // shift lowercase letters
        else if ((97 <= dec) && (dec < 123)) {
            dec = modulo((dec - 97 + shift), (123 - 97)) + 97;		  
        }
        result += String.fromCharCode(dec);
    }
    return result;
}

// encrypt button
function encryptCipherText() {
    
    var shiftField = document.getElementById("cipher-shift");
    var inputField = document.getElementById("cipher-input");
    var outputField = document.getElementById("cipher-output");
    
    outputField.value = shiftMessage(inputField.value, Number(shiftField.value));
}

// switch input/output button
function switchCipherText() {
    
    var shiftField = document.getElementById("cipher-shift");
    var inputField = document.getElementById("cipher-input");
    var outputField = document.getElementById("cipher-output");
    
    var txt = inputField.value;
    shiftField.value = -Number(shiftField.value);
    inputField.value = outputField.value;
    outputField.value = txt;
}
