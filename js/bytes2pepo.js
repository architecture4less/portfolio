/**
AUTH: Jared O'Toole
DATE: Sunday, April 28th, 2019
PROJ: Student Portfolio Webpage
FILE: bytes2pepo.js
*/

// converts 1's and 0's to a pep object
function convertBytesToPepo() {
    
    var byteField = document.getElementById("input-bytes");
    var pepoField = document.getElementById("input-pepo"); 
    
    pepoField.value = "";
    
    var parsedBits = "";
    var pepoBytes = [];
    
    // parse each line of the given text
    var lines = byteField.value.split(/\r?\n/);
    for (var l = 0; l < lines.length; l++) {
        
        // parse for valid bit characters
        for (var c = 0; c < lines[l].length; c++) {
          
            var chr = lines[l][c];
            
            if (chr == '0' || chr == '1') {
                parsedBits += chr;
            }
            else if (chr == ' ') {
              continue;
            }
            else if (chr == ';') { 
                break; 
            }
            else {
              return;
            }
        }
    }
    
    // make sure there will be exactly eight bits per byte
    if ((parsedBits.length % 8) != 0) {
        return;
    }
    
    // convert bytes from binary to hex
    for (var by=0; by < parsedBits.length / 8; by++) {
        
        var byteText = "";
        for (var bi=0; bi < 8; bi++) {
            byteText += parsedBits[(by * 8) + bi];
        }
        var hexByte = parseInt(byteText, 2).toString(16);
        if (hexByte.length < 2) {
            hexByte = "0" + hexByte;
        }
        pepoBytes.push(hexByte);
    }

    // create the pep object
    pepoBytes.push("zz");
    pepoField.value = pepoBytes.join(" ");
}


// converts a pep object to 1's and 0's
function convertPepoToBytes() {
    
    var byteField = document.getElementById("input-bytes");
    var pepoField = document.getElementById("input-pepo"); 
    
    byteField.value = "";
    
    var parsedBits = "";
    var binBytes = [];
    
    // parse each line of the given text
    var lines = pepoField.value.split(/\r?\n/);
    for (var l = 0; l < lines.length; l++) {
        
        // parse for valid nibble chars
        for (var c = 0; c < lines[l].length; c++) {
          
            var chr = lines[l][c];
            
            if (/[0-9A-Fa-f]{1}/.test(chr)) {
                parsedBits += chr;
            }
            else if (chr == ' ' || chr == 'z') {
              continue;
            }
            else if (chr == ';') { 
                break; 
            }
            else {
              return;
            }
        }
    }
    
    // make sure there will be exactly two nibbles per byte
    if ((parsedBits.length % 2) != 0) {
        return;
    }
    
    // convert bytes from hex to binary
    for (var by=0; by < parsedBits.length / 2; by++) {
        
        var byteText = "";
        for (var nib=0; nib < 2; nib++) {
            byteText += parsedBits[(by * 2) + nib];
        }
        var binByte = parseInt(byteText, 16).toString(2);
        while (binByte.length < 8) {
            binByte = "0" + binByte;
        }
        binBytes.push(binByte);
    }

    // write the binary bytes text
    var bytesInRow = 0;
    for (var by=0; by < binBytes.length; by++) {
        
        byteField.value += binBytes[by] + " ";
        bytesInRow++;
        
        if (bytesInRow >= 3) {
            byteField.value += "\n";
            bytesInRow = 0;
        }
    }
}
