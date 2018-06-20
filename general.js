var pixelX = 50;
var pixelY = 50;
var xOffset = 1 * pixelX;
var yOffset = 1 * pixelY;

var canvas = document.getElementById("overprintCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);


var pixelArray = [[0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],]
                  

// undo by saving list of commands (chars) have two d array with number of times each pixel has been filled
// make canvas size a variable and size of pixels dependent on that

//8x10
                  
     //365 - A, 366 - B, 367-C   379-O 384-T 388-X
var alphabet = {365:[[0,2],[0,3],[0,4],[0,5],[1,1], [1,6],[2,0], [2,7], [3,0], [3,7], [4,0], [4,7], [5,0], [5,1],[5,2],[5,3],[5,4],[5,5],[5,6], [5,7], [6,0], [6,7], [7,0], [7,7], [8,0],[8,7], [9,0],[9,7]], 
                366: [[0,0],[0,1], [0,2],[0,3],[0,4],[0,5],[1,0],[1,6],[2,0],[2,6],[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[5,0],[5,7],[6,0],[6,7],[7,0],[7,7],[8,0],[8,7],[9,0],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6]],
                367:[[0,2],[0,3],[0,4],[0,5],[0,6],[1,1],[1,7],[2,0],[3,0],[4,0],[5,0],[6,0], [7,0], [8,1],[8,7],[9,2],[9,3],[9,4],[9,5],[9,6]],
                379:[[0,2],[0,3],[0,4],[1,1],[1,5],[1,6],[2,0],[2,7],[3,0],[3,7],[4,0],[4,7],[5,0],[5,7],[6,0],[6,7],[7,0],[7,7],[8,1],[8,5],[8,6],[9,2],[9,3],[9,4]],
                384: [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[1,3],[1,4],[2,3],[2,4],[3,3],[3,4],[4,3],[4,4],[5,3],[5,4],[6,3],[6,4],[7,3],[7,4],[8,3],[8,4],[9,3],[9,4]],
                388: [[0,0],[0,1],[0,7],[1,0],[1,1],[1,7],[2,2],[2,6],[3,3],[3,5],[4,3],[4,5],[5,4],[6,3],[6,5],[7,2],[7,6],[8,0],[8,1],[8,7],[9,0],[9,1],[9,7]]
                }

function addLetter(letter){
    console.log(letter);
    for (pixel in alphabet[letter]){
        pixelArray[alphabet[letter][pixel][0]][alphabet[letter][pixel][1]]++
    }
}

function removeLetter(letter){
    for (pixel in alphabet[letter]){
        pixelArray[alphabet[letter][pixel][0]][alphabet[letter][pixel][1]]--
    }
}

function drawScreen(){
    for(var i = 0; i < pixelArray.length; i++){
        for(var j = 0; j < pixelArray.length; j++){
            if(pixelArray[i][j]){
                ctx.beginPath();
                ctx.rect(j*pixelX + xOffset , i*pixelY + yOffset, pixelX, pixelY);
                ctx.fillStyle = "#EC722F";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

$("#reset").click(function(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    pixelArray = [[0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],]

})

$(document).keypress(function(e){
    var code = e.keyCode;
    
    if(e.shiftKey){
        code = code + 300
    }

    addLetter(code);
    drawScreen();

})

