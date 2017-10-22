/*var canvas = document.getElementById("canvas");
canvas.addEventListener("click", function(){
    this.style.backgroundColor = "black";
})*/
// --------------------- Button Click Event ----------------------
//----------------------------------------------------------------
window.onload = function(){
 // RotateButton click event
var rotateButton = document.getElementById("blueRightButton");
rotateButton.addEventListener("mousedown", function(){
    this.setAttribute("src", "BlueDownButton.gif");
    rotateEffect();
})
rotateButton.addEventListener("mouseup", function(){
    this.setAttribute("src", "BlueButton.gif");
})
rotateButton.addEventListener("mousemove", function(){
    this.setAttribute("src", "BlueButton.gif");
})
//Up button click event
var upButton = document.getElementById("upButton");
upButton.addEventListener("mousedown", function(){
    this.setAttribute("src", "BlueDownButton.gif");
    upEffect();
})
upButton.addEventListener("mousemove", function(){
    this.setAttribute("src", "BlueButton.gif");
})
upButton.addEventListener("mouseup", function(){
    this.setAttribute("src", "BlueButton.gif");
})
//Down button click event
var downButton = document.getElementById("downButton");
downButton.addEventListener("mousedown", function(){
    this.setAttribute("src", "BlueDownButton.gif");
    downEffect();
})
downButton.addEventListener("mousemove", function(){
    this.setAttribute("src", "BlueButton.gif");
})
downButton.addEventListener("mouseup", function(){
    this.setAttribute("src", "BlueButton.gif");
})
//Right button click event
var rightButton = document.getElementById("rightButton");
rightButton.addEventListener("mousedown", function(){
    this.setAttribute("src", "BlueDownButton.gif");
    rightEffect();
})
rightButton.addEventListener("mousemove", function(){
    this.setAttribute("src", "BlueButton.gif");
})
rightButton.addEventListener("mouseup", function(){
    this.setAttribute("src", "BlueButton.gif");
})
//Left button click event
var leftButton = document.getElementById("leftButton");
leftButton.addEventListener("mousedown", function(){
    this.setAttribute("src", "BlueDownButton.gif");
    leftEffect();
})
leftButton.addEventListener("mousemove", function(){
    this.setAttribute("src", "BlueButton.gif");
})
leftButton.addEventListener("mouseup", function(){
    this.setAttribute("src", "BlueButton.gif");
})
// Red button click event
var firstButton = document.getElementById("firstButton");
firstButton.addEventListener("mousedown", function(){
    this.setAttribute("src", "RedDownButton.gif");
    reset();
})
firstButton.addEventListener("mousemove", function(){
    this.setAttribute("src", "RedButton.gif");
})
firstButton.addEventListener("mouseup", function(){
    this.setAttribute("src", "RedButton.gif");
})
// First Green button click event
var secondButton = document.getElementById("secondButton");
secondButton.addEventListener("mousedown", function(){
    this.setAttribute("src", "GreenDownButton.gif");
    soundEffect();
})
secondButton.addEventListener("mousemove", function(){
    this.setAttribute("src", "GreenButton.gif");
})
secondButton.addEventListener("mouseup", function(){
    this.setAttribute("src", "GreenButton.gif");
})
// Second green button click event (pause/start button)
var thirdButton = document.getElementById("thirdButton");
thirdButton.addEventListener("mousedown", function(){
    this.setAttribute("src", "GreenDownButton.gif");
    pauseEffect();
})
thirdButton.addEventListener("mousemove", function(){
    this.setAttribute("src", "GreenButton.gif");
})
thirdButton.addEventListener("mouseup", function(){
    this.setAttribute("src", "GreenButton.gif");
})
// Last green button click event
var forthButton = document.getElementById("forthButton");
forthButton.addEventListener("mousedown", function(){
    this.setAttribute("src", "GreenDownButton.gif");
})
forthButton.addEventListener("mousemove", function(){
    this.setAttribute("src", "GreenButton.gif");
})
forthButton.addEventListener("mouseup", function(){
    this.setAttribute("src", "GreenButton.gif");
})
// ------------------- Style Button----------------------
//var cvs = document.getElementById("canvas");
var bdy = document.getElementsByTagName("body")[0];
var firstStyleButton = document.getElementById("styleButtonI");
firstStyleButton.addEventListener("click", function(){
   if((gameStatus == 0) && (resetAnimeDone == 1)){
       canvas.style.backgroundColor = 'rgb(0, 173, 239)';
       drawLED("#011E3E", "#FFFFFF", "#91E1FA");
       drawWelcomePic();
   }

})
var secondStyleButton = document.getElementById("styleButtonII");
secondStyleButton.addEventListener("click", function(){
   if((gameStatus == 0) && (resetAnimeDone == 1)){
        canvas.style.backgroundColor = '#f0cd19';
        //canvas.style.borderColor = '#faf0bc';
        drawLED("#635408", "#FFFFFF", "#ffe55f");
        document.body.style.background = 'f9f3d4';
        drawWelcomePic();
   }
})

var thirdStyleButton = document.getElementById("styleButtonIII");
thirdStyleButton.addEventListener("click", function(){
   if((gameStatus == 0) && (resetAnimeDone == 1)){
       canvas.style.backgroundColor = '#09b9ac';
       drawLED("#0c5a54", "#FFFFFF", "#39fcee");
       drawWelcomePic();
   }

})

var forthStyleButton = document.getElementById("styleButtonIV");
forthStyleButton.addEventListener("click", function(){
   if((gameStatus == 0) && (resetAnimeDone == 1)){
       canvas.style.backgroundColor = '#90c400';
       drawLED("2b3a00", "#FFFFFF", "#aae700");
       drawWelcomePic();
   }

})

var fifthStyleButton = document.getElementById("styleButtonV");
fifthStyleButton.addEventListener("click", function(){
   if((gameStatus == 0) && (resetAnimeDone == 1)){
       canvas.style.backgroundColor = '#cf3b3b';
       drawLED("2c0a0a", "#FFFFFF", "#ff5050");
        drawWelcomePic();
   }

})

var sixthStyleButton = document.getElementById("styleButtonVI");
sixthStyleButton.addEventListener("click", function(){
   if((gameStatus == 0) && (resetAnimeDone == 1)){
       canvas.style.backgroundColor = '#d57856';
       drawLED("3e2218", "#FFFFFF", "#f8906a");
        drawWelcomePic();
   }

})
}
// -------------------------------------------------------------- //----------------------------------------------------------------
//----------------------------------------------------------------
//------------------ Draw Canvas --------------------------------

// color used
screenColor = 'rgb(158, 172, 136)';
defaultScColor = 'rgb(125, 138, 110)';
black = 'rgb(0,0,0)';
canvasColor = 'rgb(0, 173, 239)';
// Position parameter
//Calculate the width and height of the LED screen
scHeight = 385 - 65;
scWidth = 370 - 80;
// 4 outer gap length
outGap = 3;
// Space between little squares
squareGap = 1.5;
// Difference between gap between squares and gap between side squre and borders
gapDiff = outGap - squareGap;
// Calculate grid
gridHeight = 375-75 + outGap + gapDiff;
gridWidth = (375-75)/2 + outGap + gapDiff;
// Origin point when draw the grid
startX = 90 + outGap;
startY = 75 + outGap;
// Distance bewteen the uppleft corners of the adjacent square
squareDist = ((375-75)/2)/10;
// Little square outer side length
squareSide = squareDist - squareGap;
// Little squre inner side length
squareInnerBorderLen = 2;
squareInnerSide = squareSide - squareInnerBorderLen * 2;
// Draw square function linewidth
lineWidth = 1.5;
// ------------Graphic and animetion flags --------------
// For function reset
resetAnimeDone = 1;
//---------------------------------------------------------------- //----------------------------------------------------------------
// Game graphic
gameUnitInterval = 0;
// Initialize the game
gameGrid = [];
clearGameGrid();
gameStatus = 0; // Stop:0, Run:1, Pause:2
gameIsResume = 0; // 0: restart game; 1: resume game
gameLevel = 1; // Level 1-10
gameHighScore = 0;
gameScore = 0;
gameLines = 0;
gameSoundOff = 1; // 1: soundoff, 0: soundon
//isTouchBottom = 1; // 0: need next piece
var gameMainTimerVar;
var gamePauseTimerVar;
gamePieces = [];
gamePieces[0] = {
type:"I",
nextPre: [[0, 0, 0, 0], [1, 1, 1, 1]],
orient:0,
orientations: [[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0],
               [1, 1, 1, 1]],
              [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]]],
orientNum: 2,
outDim: 4
}
gamePieces[1] = {
type:"O",
nextPre: [[0, 1, 1, 0], [0, 1, 1, 0]],
orient:0,
orientations: [[[0, 0, 0], [1, 1, 0], [1, 1, 0]]],
orientNum: 1,
outDim: 3
}
gamePieces[2] = {
type: "T",
nextPre: [[0, 1, 0, 0], [1, 1, 1, 0]],
orient:0,
orientations: [[[0, 1, 0], [1, 1, 1], [0, 0, 0]],
               [[0, 1, 0], [1, 1, 0], [0, 1, 0]],
               [[0, 0, 0], [1, 1, 1], [0, 1, 0]],
               [[0, 1, 0], [0, 1, 1], [0, 1, 0]]],
orientNum: 4,
outDim : 3
}
gamePieces[3] = {
type: "S",
nextPre: [[0, 1, 1, 0], [1, 1, 0, 0]],
orient:0,
orientations: [[[0, 1, 1], [1, 1, 0], [0, 0, 0]],
               [[1, 0, 0], [1, 1, 0], [0, 1, 0]]],
orientNum:2,
outDim:3
}
gamePieces[4] = {
type: "Z",
nextPre: [[1, 1, 0, 0], [0, 1, 1, 0]],
orient:0,
orientations: [[[1, 1, 0], [0, 1, 1], [0, 0, 0]],
               [[0, 1, 0], [1, 1, 0], [1, 0, 0]]],
orientNum: 2,
outDim: 3
}
gamePieces[5] = {
type: "J",
nextPre: [[1, 0, 0, 0], [1, 1, 1, 0]],
orient:0,
orientations: [[[1, 0, 0], [1, 1, 1], [0, 0, 0]],
               [[0, 1, 0], [0, 1, 0], [1, 1, 0]],
               [[1, 1, 1], [0, 0, 1], [0, 0, 0]],
               [[1, 1, 0], [1, 0, 0], [1, 0, 0]]],
orientNum: 4,
outDim: 3
}
gamePieces[6] = {
type: "L",
nextPre: [[0, 0, 1, 0], [1, 1, 1, 0]],
orient:0,
orientations: [[[0, 0, 1], [1, 1, 1], [0, 0, 0]],
               [[1, 1, 0], [0, 1, 0], [0, 1, 0]],
               [[1, 1, 1], [1, 0, 0], [0, 0, 0]],
               [[1, 0, 0], [1, 0, 0], [1, 1, 0]]],
orientNum: 4,
outDim: 3
}


// Initialize current piece
curPiece = gamePieces[Math.floor(Math.random() * 7)];
curPiece.positionX = 3;
if((curPiece.type != "I") && (curPiece.type != "O")){
curPiece.positionY = 1;
}else{
curPiece.positionY = 0;
}
curPiece.curOrient = 0;
/*curPiece = [];
for(i = 0; i < 4; i++) {
curPiece[i] = new Array(4).fill(0);
}
_randomInitialPiece = gamePieces[Math.floor(Math.random() * 7)];
for(i = 0; i < 2; i++){
for(l = 0; l < 4; l++){
curPiece[i+2][l] = _randomInitialPiece[i][l];
}
}
curPiece.positionX = 3;
curPiece.positionY = 0;
curPiece.farLeft = curPiece.positionX;
curPiece.farRight = curPiece.positionX + 4;
curPiece.farBottom = curPiece.positionY;*/

//nextPiece = gamePieces[Math.floor(Math.random() * 7)].nextPre;
nextPiece = gamePieces[Math.floor(Math.random() * 7)];
//nextBlockPre = nextPiece.nextPre;
//nextBlockPre = curPiece.nextPre;
//alert(Math.floor(Math.random() * 7) + " " + nextPiece[1]);
//alert(nextPiece[1]);
canvas = document.getElementById("canvas");
ctx = canvas.getContext('2d');
drawCanvas();
//mainGame();
// Set gameupdate intervals


function drawSquare(cornerX, cornerY, bgColor, borderColor){
ctx.beginPath();
ctx.fillStyle = bgColor;
//ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(cornerX, cornerY, squareSide, squareSide);
ctx.beginPath();
ctx.lineWidth = lineWidth;
ctx.strokeStyle = borderColor
// ctx.strokeStyle = 'rgb(0, 173, 239)';
ctx.strokeRect(cornerX + squareInnerBorderLen, cornerY + squareInnerBorderLen, squareInnerSide,  squareInnerSide);
}
function drawDecSquare(cornerX, cornerY, borderColor){
ctx.beginPath();
ctx.lineWidth = 1.2;
ctx.strokStyle = borderColor;
ctx.strokeRect(cornerX, cornerY, squareSide-squareInnerBorderLen, squareSide-squareInnerBorderLen);
ctx.beginPath();
ctx.fillStyle = borderColor;
ctx.fillRect(cornerX + squareInnerBorderLen, cornerY + squareInnerBorderLen, squareSide-3*squareInnerBorderLen,  squareSide-3*squareInnerBorderLen);
}
function drawCanvas() {
drawGameConsole();
drawLED("#011E3E", "#FFFFFF", "#91E1FA");
drawWelcomePic();
//drawCurrentPiece();
}
function drawLED(topLeftColor, rightColor, bottomColor){
// fill the rectangle of LED screen
ctx.beginPath();
ctx.fillStyle = 'rgb(158, 172,136)';
ctx.fillRect(80, 65, 290, 320);
// Draw LED screen border
// NOTE: corner remain to be rounded
drawLEDBorders(topLeftColor, rightColor, bottomColor);

// Draw screen grid borders
ctx.beginPath();
ctx.strokeStyle = 'rgb(0, 0, 0)';
ctx.lineWidth = 1.5;
ctx.moveTo(90, 75);
ctx.lineTo(90, 75 + gridHeight);
ctx.lineTo(90 + gridWidth, 75 + gridHeight);
ctx.lineTo(90 + gridWidth, 75);
ctx.lineTo(90, 75);
ctx.stroke();


// Draw sidebar of screen
ctx.font = "15px Courier";
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillText("Hi-Score", 255, 90);
ctx.fillText("Score", 255, 140);
ctx.fillText("Level", 255, 190);
ctx.fillText("Lines", 255, 240);
ctx.fillText("Next", 255, 290);
ctx.font = "17px Book Antiqua";

ctx.fillText(gameHighScore, 345, 115);
//ctx.fillRect(255, 95, 105, 30);
//ctx.fillRect(255, 145, 105, 30);
ctx.fillText(gameScore, 345, 165);
ctx.fillText(gameLevel, 345, 215);
ctx.fillText(gameLines, 345, 265);
//ctx.fillText("10", 336, 265);

// Draw initialized game grid
//drawGrid();
clearGrid();

// Draw Next block
drawNextBlock();
//ctx.fillRect(255, 290+squareGap*2, 105, 40);
// Draw speaker
drawSpeakerSign();

drawPauseSign(defaultScColor);

}
// End of drawCanvas function
function drawLEDBorders(topLeftColor, rightColor, bottomColor){
ctx.beginPath();
ctx.moveTo(370, 65);
ctx.lineWidth = 3;
ctx.fillStyle = topLeftColor;
ctx.strokeStyle = topLeftColor;
ctx.lineTo(80, 65);
ctx.lineTo(80, 385);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = bottomColor;
ctx.strokeStyle = bottomColor;
ctx.moveTo(80, 385);
ctx.lineTo(370,385);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = rightColor;
ctx.strokeStyle = rightColor;
ctx.moveTo(370,385);
ctx.lineTo(370,65);
ctx.stroke();
}
function drawNextBlock(){
var nxtBlkStartX = 255 + 20;
var nxtBlkX = nxtBlkStartX;
var nxtBlkY = 290 + squareSide;
// Clear the area first
ctx.beginPath();
ctx.fillStyle = screenColor;
ctx.fillRect(255, 290+squareGap*2, 105, 40);
// Draw next block
for(i = 0 ; i < 2; i++){
for(j = 0; j < 4; j++){
    if(nextPiece.nextPre[i][j] != 0){
        drawSquare(nxtBlkX, nxtBlkY, black, screenColor);
    }
    else{
      drawSquare(nxtBlkX, nxtBlkY, defaultScColor, screenColor);
    }
    //drawSquare(nxtBlkX, nxtBlkY, defaultScColor, screenColor);
    nxtBlkX += squareDist;
}
nxtBlkX = nxtBlkStartX;
nxtBlkY += squareDist;
}
}
function drawGameConsole(){
// draw outer rectangle
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.lineWidth = 9;
ctx.moveTo(90, 40);
ctx.lineTo(55, 40);
ctx.lineTo(55, 410);
ctx.lineTo(395, 410);
ctx.lineTo(395, 40);
ctx.lineTo(360, 40);
// Three right dots on the top border
ctx.moveTo(350, 40);
ctx.lineTo(340, 40);
ctx.moveTo(330, 40);
ctx.lineTo(320, 40);
ctx.moveTo(310, 40);
ctx.lineTo(300, 40);
ctx.moveTo(290, 40);
ctx.lineTo(280, 40);
// Three left dots on the top border
ctx.moveTo(170, 40);
ctx.lineTo(160, 40);
ctx.moveTo(150, 40);
ctx.lineTo(140, 40);
ctx.moveTo(130, 40);
ctx.lineTo(120, 40);
ctx.moveTo(110, 40);
ctx.lineTo(100, 40);
//ctx.moveTo(50, 40);
ctx.stroke();

// Draw game header
ctx.font = "Bold Italic 30px Helvetica";
ctx.fillText("Game", 180, 45);
ctx.beginPath();
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.lineWidth = 9;

//----------------------------------draw side decoration -----------------------------------------------------------------------------------------------------------
// reset gap value between square
//squareGap = 1;
var leftDecStartX = 45;
var leftDecStartY = 45;
var leftDecX = leftDecStartX - squareDist;
var leftDecY = leftDecStartY + squareDist;

// Left decoration ----------------------------------------------------
drawDecSquare(leftDecX, leftDecY, black);
//drawSquare(leftDecX, leftDecY, black, canvasColor);
leftDecY += squareDist;
drawDecSquare(leftDecX, leftDecY, black);
leftDecX -= squareDist;
drawDecSquare(leftDecX, leftDecY, black);
leftDecY += squareDist;
drawDecSquare(leftDecX, leftDecY, black);
leftDecY += 2 * squareDist;
drawDecSquare(leftDecX, leftDecY, black);
leftDecY += squareDist;
drawDecSquare(leftDecX, leftDecY, black);
leftDecX += squareDist;
drawDecSquare(leftDecX, leftDecY, black);
leftDecX -= squareDist;
leftDecY += squareDist;
drawDecSquare(leftDecX, leftDecY, black);

leftDecY += 2 * squareDist;
drawDecSquare(leftDecX, leftDecY, black);
leftDecX += squareDist;
drawDecSquare(leftDecX, leftDecY, black);
leftDecY += squareDist;
drawDecSquare(leftDecX, leftDecY, black);
leftDecX -= squareDist;
drawDecSquare(leftDecX, leftDecY, black);

leftDecY += 2 * squareDist;
leftDecX += squareDist;
drawDecSquare(leftDecX, leftDecY, black);
leftDecY += squareDist;
drawDecSquare(leftDecX, leftDecY, black);
leftDecX -= squareDist;
drawDecSquare(leftDecX, leftDecY, black);
leftDecY += squareDist;
leftDecX += squareDist;
drawDecSquare(leftDecX, leftDecY, black);

leftDecY += 2 * squareDist;
leftDecX -= squareDist;
drawDecSquare(leftDecX, leftDecY, black);
leftDecX += squareDist;
drawDecSquare(leftDecX, leftDecY, black);
leftDecY += squareDist;
drawDecSquare(leftDecX, leftDecY, black);
leftDecY += squareDist;
drawDecSquare(leftDecX, leftDecY, black);

leftDecY += 2 * squareDist;
leftDecX -= squareDist;
drawDecSquare(leftDecX, leftDecY, black);
leftDecY += squareDist;
drawDecSquare(leftDecX, leftDecY, black);
leftDecY += squareDist;
drawDecSquare(leftDecX, leftDecY, black);
leftDecY += squareDist;
drawDecSquare(leftDecX, leftDecY, black);

// Right decoration -------------------------------------------------------
rightDecStartX = 395 + 25;
rightDecStartY = 45;
rightDecX = rightDecStartX - squareDist;
rightDecY = rightDecStartY + squareDist;

//rightDecX -= squareDist;
drawDecSquare(rightDecX, rightDecY, black);
//drawSquare(rightDecX, rightDecY, black, canvasColor);
rightDecY += squareDist;
drawDecSquare(rightDecX, rightDecY, black);
rightDecX += squareDist;
drawDecSquare(rightDecX, rightDecY, black);
rightDecY += squareDist;
drawDecSquare(rightDecX, rightDecY, black);

rightDecY += 2 * squareDist;
drawDecSquare(rightDecX, rightDecY, black);
rightDecY += squareDist;
drawDecSquare(rightDecX, rightDecY, black);
rightDecX -= squareDist;
drawDecSquare(rightDecX, rightDecY, black);
rightDecX += squareDist;
rightDecY += squareDist;
drawDecSquare(rightDecX, rightDecY, black);

rightDecY += 2 * squareDist;
drawDecSquare(rightDecX, rightDecY, black);
rightDecX -= squareDist;
drawDecSquare(rightDecX, rightDecY, black);
rightDecY += squareDist;
drawDecSquare(rightDecX, rightDecY, black);
rightDecX += squareDist;
drawDecSquare(rightDecX, rightDecY, black);

rightDecY += 2 * squareDist;
rightDecX -= squareDist;
drawDecSquare(rightDecX, rightDecY, black);
rightDecY += squareDist;
drawDecSquare(rightDecX, rightDecY, black);
rightDecX += squareDist;
drawDecSquare(rightDecX, rightDecY, black);
rightDecY += squareDist;
rightDecX -= squareDist;
drawDecSquare(rightDecX, rightDecY, black);

rightDecY += 2 * squareDist;
rightDecX += squareDist;
drawDecSquare(rightDecX, rightDecY, black);
rightDecX -= squareDist;
drawDecSquare(rightDecX, rightDecY, black);
rightDecY += squareDist;
drawDecSquare(rightDecX, rightDecY, black);
rightDecY += squareDist;
drawDecSquare(rightDecX, rightDecY, black);

rightDecY += 2 * squareDist;
rightDecX += squareDist;
drawDecSquare(rightDecX, rightDecY, black);
rightDecY += squareDist;
drawDecSquare(rightDecX, rightDecY, black);
rightDecY += squareDist;
drawDecSquare(rightDecX, rightDecY, black);
rightDecY += squareDist;
drawDecSquare(rightDecX, rightDecY, black);

// Draw control board---------------------------------------------------------
// Draw up/down/left/right arrow
// Up arrow
ctx.beginPath();
ctx.strokeStyle = black;
ctx.fillStyle = black;
ctx.moveTo(130, 520);
ctx.lineTo(140,520);
ctx.lineTo(135,507);
ctx.lineTo(130,520);
ctx.fill();
// Down arrow
ctx.beginPath();
ctx.strokeStyle = black;
ctx.fillStyle = black;
ctx.moveTo(130, 544);
ctx.lineTo(140,544);
ctx.lineTo(135,557);
ctx.lineTo(130,544);
ctx.fill();
// Left arrow
ctx.beginPath();
ctx.moveTo(125, 526);
ctx.lineTo(125,536);
ctx.lineTo(112,531);
ctx.lineTo(125,526);
ctx.fill();
// Right arrow
ctx.beginPath();
ctx.moveTo(145,526);
ctx.lineTo(145,536);
ctx.lineTo(158,531);
ctx.lineTo(145,526);
ctx.fill();

// Draw text below button
//Text below big blue button
ctx.font="20px Ariel";
ctx.fillStyle = black;
ctx.save();
ctx.scale(1/2, 1/2)
ctx.fillText("ROTATE", 313*2, 627*2);
//Text of down button
ctx.fillText("DOWN", 118*2, 634*2);
ctx.fillText("LEVEL-", 118*2, 644*2);
//Text of left button
ctx.fillText("LEFT", 65*2, 572*2);
ctx.fillText("LEVEL-", 55*2, 582*2);
//Text of right button
ctx.fillText("RIGHT", 180*2, 572*2);
ctx.fillText("LEVEL+", 180*2, 582*2);
//Text of right button
ctx.fillText("RIGHT", 65*2, 465*2);
ctx.fillText("LEVEL+", 65*2, 475*2);
// Text of four small buttons
ctx.fillText("RESET", 227*2, 480*2);
ctx.fillText("SOUND", 274*2, 480*2);
ctx.fillText("PAUSE", 326*2, 478*2);
ctx.fillText("START", 326*2, 488*2);
ctx.fillText("MORE", 377*2, 480*2);
ctx.restore();
}
function drawSpeakerSign(){
// check if sound is off or on
var speakerColor = (gameSoundOff == 1)? defaultScColor:black;
var smallSideLen = squareInnerSide - 1.5*squareInnerBorderLen;
// Clear the area first
ctx.beginPath();
ctx.fillStyle = screenColor;
ctx.fillRect(250, 365 - smallSideLen, 2*smallSideLen+squareInnerBorderLen*1.2, smallSideLen*3);
// Draw the speaker with color
ctx.beginPath();
ctx.fillStyle = speakerColor;
//ctx.strokeStyle = defaultScColor;
ctx.moveTo(250, 365);
ctx.lineTo(250, 365 + smallSideLen);
ctx.lineTo(250+smallSideLen/2, 365 + smallSideLen);
ctx.lineTo(250+smallSideLen, 365 + smallSideLen*3/2);
ctx.lineTo(250+smallSideLen, 365 - smallSideLen/2);
ctx.lineTo(250+smallSideLen/2, 365);
ctx.lineTo(250, 365);
ctx.fill();
ctx.beginPath();
ctx.strokeStyle = speakerColor;
ctx.lineWidth = "1px";
ctx.moveTo(250+smallSideLen+squareInnerBorderLen, 365);
ctx.lineTo(250+2*smallSideLen+squareInnerBorderLen, 365 + smallSideLen);
ctx.moveTo(250+2*smallSideLen+squareInnerBorderLen, 365);
ctx.lineTo(250+smallSideLen+squareInnerBorderLen, 365+ smallSideLen);
ctx.stroke();
}
function drawPauseSign(color){
var pauseStartX = 250 + squareInnerSide*2.1;
var pauseStartY = 363.5;
// clear the pause sign area first
ctx.beginPath();
ctx.fillStyle = screenColor;
ctx.fillRect(250 + squareInnerSide*2, 363, squareSide, squareSide);
// draw pause sign
ctx.beginPath();
ctx.fillStyle = color;
ctx.moveTo(pauseStartX, pauseStartY);
ctx.lineTo(pauseStartX, pauseStartY + squareInnerSide);
ctx.lineTo(pauseStartX+1/3*squareInnerSide, pauseStartY + squareInnerSide);
ctx.lineTo(pauseStartX+1/3*squareInnerSide, pauseStartY);
ctx.lineTo(pauseStartX, pauseStartY);
ctx.fill();
ctx.moveTo(pauseStartX+2/3*squareInnerSide, pauseStartY);
ctx.lineTo(pauseStartX+2/3*squareInnerSide, pauseStartY + squareInnerSide);
ctx.lineTo(pauseStartX+squareInnerSide, pauseStartY + squareInnerSide);
ctx.lineTo(pauseStartX+squareInnerSide, pauseStartY);
ctx.lineTo(pauseStartX+2/3*squareInnerSide, pauseStartY);
ctx.fill();
}
// Event associate with reset button
function reset(){
// Prevent animetion within double click within shor period
if(resetAnimeDone == 1){
if(gameStatus == 0){
    gameStatus = 1;
    initializeGame();
}else{
    //clear animetion remove setinterval function depend on if its pause or run
    // if game is pause
    if(gameStatus == 2){
        clearInterval(gamePauseTimerVar);
    }else{
        clearInterval(gameMainTimerVar);
    }
    //Set game status to stop
    gameStatus = 0;
    // Calculate starting coordinate starting draw from bottom
    var startingX = startX;
    var startingY = startY
    var curX = startingX;
    var curY = startY + squareDist * 19;
    resetAnimeDone = 0;
    var line = 0;
    var repline = setInterval(function(){
        if(line < 20){
            for(var k =0 ; k < 10; k++){
                drawSquare(curX, curY, black, screenColor);
                curX += squareDist;
            }
            curX = startingX;
            //if(line < 19){curY -= squareDist;}
            curY -= squareDist;
            line++;
        }
        /*else if(line >= 20 && line < 40){
            for(var k =0 ; k < 10; k++){
                drawSquare(curX, curY, defaultScColor, screenColor);
                curX += squareDist;
            }
            curX = startingX;
            curY += squareDist;
            line ++;
        }*/
        else if(line >= 20 && line < 40){
            if(line == 20){
                curY += squareDist;
            }
            // clear row first
            ctx.beginPath();
            ctx.fillStyle = screenColor;
            ctx.fillRect(startingX+squareGap/2, curY+squareGap, gridWidth-2*outGap, squareDist);
            for(var j = 0 ; j < 10; j++){
                drawSquare(curX, curY, defaultScColor, screenColor);
                curX += squareDist;
            }
            curX = startingX;
            curY += squareDist;
            line ++;
            /*if(line < 40){
                ctx.beginPath();
                ctx.fillStyle = screenColor;
                ctx.fillRect(curX+squareGap/2, curY+squareGap, gridWidth-2*outGap, squareDist);
            }*/
        }
        else if(line >= 40 && line < 49){
            if((line >=40 && line <= 42) || (line >=46 && line <= 48)){
            clearGrid();
            drawWelcomePic();
            }else{
            clearGrid();
            }
            line++;
        }else{
            clearInterval(repline);
            resetAnimeDone = 1;
            //TODO: disable rotate button and pause button

        }
    },50);

}
}

}
function drawWelcomePic(){
// Draw welcome pic
ctx.font = "20px Courier New";
ctx.strokeStyle = black;
ctx.fillStyle = black;
ctx.fillText("WELCOME", 90 + 35, 75 + 50);
ctx.beginPath();
ctx.fillStyle = black;
ctx.lineWidth = "1px";
ctx.arc(90 + gridWidth/2,75 + gridHeight/3,40,0,2*Math.PI);
ctx.stroke();
//ctx.moveTo(90 + gridWidth/2, 75 + gridHeight/3 + 30);
// Draw mouth
ctx.beginPath();
ctx.fillStyle = black;
ctx.lineWidth = "1px";
ctx.arc(90 + gridWidth/2,75 + gridHeight/3,30,0,Math.PI);
ctx.stroke();
//Draw two eyes
ctx.beginPath();
ctx.arc(90 + gridWidth/2 - 15,75 + gridHeight/3 - 10,5,0,2* Math.PI); // left eye
ctx.moveTo(90 + gridWidth/2 + 20,75 + gridHeight/3 - 10)
ctx.arc(90 + gridWidth/2 + 15,75 + gridHeight/3 - 10,5,0,2* Math.PI); // right eye
ctx.stroke();

ctx.font = "14px Courier";
ctx.fillText("TAP DIRECTION", 90 + 22, 75 + 180);
ctx.fillText("BTNS TO SELECT", 90 + 17, 75 + 195);
ctx.fillText("LEVEL & LINES", 90 + 22, 75 + 210);
ctx.fillText("TAP START TO PLAY", 90 + 7, 75 + 225);
}
function clearGrid(){
//squareGap = 1.5;
ctx.beginPath();
ctx.fillStyle = screenColor;
ctx.fillRect(90-2, 75-2, gridWidth+2*2, gridHeight+2*2);
//ctx.fillRect(startX+squareGap/2, startY+squareGap, gridWidth-2*outGap, gridHeight-1.5*outGap);
var upperLeftX = startX;
var upperLeftY = startY;
for(var j = 0; j < 20; j++){
for(var k = 0; k <10; k++){
    drawSquare(upperLeftX, upperLeftY, defaultScColor, screenColor);
    upperLeftX += squareDist;
}
upperLeftX = startX;
upperLeftY += squareDist;
}
// Draw screen grid borders
ctx.beginPath();
ctx.strokeStyle = 'rgb(0, 0, 0)';
ctx.lineWidth = 1.5;
ctx.moveTo(90, 75);
ctx.lineTo(90, 75 + gridHeight);
ctx.lineTo(90 + gridWidth, 75 + gridHeight);
ctx.lineTo(90 + gridWidth, 75);
ctx.lineTo(90, 75);
ctx.stroke();
}

/*function startGame(){
// not resume the game
if(gameIsResume == 0){
clearGrid();
initializeGameGrid();
drawGrid();
}

}*/
function rotateEffect(){
if(resetAnimeDone == 1){
if(gameStatus == 0){
    gameStatus = 1;
    initializeGame();
}else if(gameStatus == 2){
    // Clear pause effect
    clearInterval(gamePauseTimerVar);
    drawPauseSign(defaultScColor);
    gameStatus = 1;
    mainGame();
}else{
    if(canRotate()){
        curPiece.curOrient = (curPiece.curOrient + 1) % curPiece.orientNum;
    }
}
}
}
function soundEffect(){
gameSoundOff = (gameSoundOff == 1)? 0:1;
drawSpeakerSign();
}
//function updateScrn(){}
function drawGrid(){
ctx.beginPath();
ctx.fillStyle = screenColor;
ctx.fillRect(startX+squareGap/2, startY+squareGap, gridWidth-2*outGap, gridHeight-1.7*outGap);
var upperLeftX = startX;
var upperLeftY = startY;
for(var j = 0; j < 20; j++){
for(var k = 0; k <10; k++){
    if(gameGrid[j][k] == 0){
        drawSquare(upperLeftX, upperLeftY, defaultScColor, screenColor);
    }
    else{
        drawSquare(upperLeftX, upperLeftY, black, screenColor);
    }
    upperLeftX += squareDist;
}
upperLeftX = startX;
upperLeftY += squareDist;
}
}
function clearGameGrid(){
for(i=0; i<20; i++) {
gameGrid[i] = new Array(10).fill(0);
}
}
function initializeGameGrid(){
clearGameGrid();
for(var j = 0; j < gameLines; j++){
for(var k =0; k < 10; k++){
    gameGrid[19 - j][k] = Math.floor(Math.random()*2);
}
}
}
function initializeGame(){
clearGameGrid();
initializeGameGrid();
gameScore = 0;
gameUnitInterval = 0;
curPiece = nextPiece;
curPiece.positionX = 3;
if((curPiece.type != "I") && (curPiece.type != "O")){
curPiece.positionY = 1;
}else{
curPiece.positionY = 0;
}
curPiece.curOrient = 0;
nextPiece = gamePieces[Math.floor(Math.random() * 7)];

//drawLED();
// redraw the led desplay
// clearGrid();
drawGrid();
drawNextBlock();
redrawGameScore();
drawPauseSign(defaultScColor);
mainGame();
}
function rightEffect(){
// protect aginst reset animetion
if(resetAnimeDone == 1){
if(gameStatus == 0){
    gameLevel++;
    if(gameLevel > 9){
        gameLevel = 1;
    }
    redrawGameLevel();
}else if(gameStatus == 2){
    // Clear pause effect
    clearInterval(gamePauseTimerVar);
    drawPauseSign(defaultScColor);
    gameStatus = 1;
    mainGame();
}else{
    if(!isTouchRight()){
        curPiece.positionX++;
    }
}
}
}
function leftEffect(){
// protect reset animetion
if(resetAnimeDone == 1){
if(gameStatus == 0){
    gameLevel--;
    if(gameLevel <= 0){
        gameLevel = 9;
    }
    redrawGameLevel();
}else if(gameStatus == 2){
    // Clear pause effect
    clearInterval(gamePauseTimerVar);
    drawPauseSign(defaultScColor);
    gameStatus = 1;
    mainGame();
}else{
    if(!isTouchLeft()){
        curPiece.positionX--;
    }
}
}
}
function redrawGameLevel(){
ctx.beginPath();
ctx.fillStyle = screenColor;
ctx.fillRect(340, 195, 20, 30);
//ctx.fillRect(260, 200, )
ctx.font = "17px Book Antiqua";
ctx.fillStyle = black;
ctx.strokeStyle = black;
//ctx.fillText(gameHighScore, 345, 115);
//ctx.fillText(gameScore, 345, 165);
ctx.fillText(gameLevel, 345, 215);
}
function upEffect(){
// preotect reset animetion
if(resetAnimeDone == 1){
if(gameStatus == 0){
    gameLines++;
    if(gameLines > 10){
        gameLines = 0;
    }
    redrawGameLines();
}else if(gameStatus == 2){
    // Clear pause effect
    clearInterval(gamePauseTimerVar);
    drawPauseSign(defaultScColor);
    gameStatus = 1;
    mainGame();
}else if(gameStatus == 1){
    while(!isTouchBottom()){
        console.log("is not bottom");
        curPiece.positionY++;
    }
}
}
}
function downEffect(){
// protect reset animetion
if(resetAnimeDone == 1){
if(gameStatus == 0){
    gameLines--;
    if(gameLines < 0){
        gameLines = 10;
    }
    redrawGameLines();
}else if(gameStatus == 2){
    // Clear pause effect
    clearInterval(gamePauseTimerVar);
    drawPauseSign(defaultScColor);
    gameStatus = 1;
    mainGame();
}else{
    if(!isTouchBottom()){
        curPiece.positionY++;
    }
}
}

}
function redrawGameLines(){
ctx.beginPath();
ctx.fillStyle = screenColor;
ctx.fillRect(330, 245, 30, 30);
ctx.font = "17px Book Antiqua";
ctx.fillStyle = black;
ctx.strokeStyle = black;
if(gameLines == 10){
ctx.fillText("1", 335, 265);
ctx.fillText("0", 345, 265);
}else{
ctx.fillText(gameLines, 345, 265);
}

}
function redrawGameScore(){
var sGameScore = gameScore.toString();
ctx.beginPath();
// Clear the area first
ctx.fillStyle = screenColor;
ctx.fillRect(255, 145, 105, 30);
ctx.font = "17px Book Antiqua";
ctx.fillStyle = black;
ctx.strokeStyle = black;
var i = sGameScore.length - 1;
for(var j = 0; (i >=0) && (j <7); i--){
ctx.fillText(sGameScore.charAt(i), 345 - 10*j, 165);
j++;
}
}
function redrawHighGameScore(){
var sGameScore = gameHighScore.toString();
ctx.beginPath();
// Clear the area first
ctx.fillStyle = screenColor;
ctx.fillRect(255, 95, 105, 30);
ctx.font = "17px Book Antiqua";
ctx.fillStyle = black;
ctx.strokeStyle = black;
var i = sGameScore.length - 1;
for(var j = 0; (i >=0) && (j <7); i--){
ctx.fillText(sGameScore.charAt(i), 345 - 10*j, 115);
j++;
}
}
function pauseEffect(){
// protect reset animetion
if(resetAnimeDone == 1){
var pauseSignColor = black;
if(gameStatus == 1){
    gameStatus = 2;
    // Clear main game settimeinverval function
    console.log("Pause game");
    clearInterval(gameMainTimerVar);
    // Start pause sign animetion
    drawPauseSign(pauseSignColor);
    gamePauseTimerVar = setInterval(function(){
        if(pauseSignColor == black){
            pauseSignColor = defaultScColor;
        }else{
            pauseSignColor = black;
        }
        drawPauseSign(pauseSignColor);
    }, 500);
}else if(gameStatus == 2){
    // protect against reset animetion
    // restart the game
    console.log("Restart game");
    gameStatus = 1;
    clearInterval(gamePauseTimerVar);
    drawPauseSign(defaultScColor);
    mainGame();
}else if(gameStatus == 0){
    // start the game
    console.log("Start game");
    gameStatus = 1;
    initializeGame();
}
}


}
/* Check whether the line need to be cleared */
// --------------------------------------------------------------
function clearLines(){
var clearedLineNum = [];
var unClearedLineNum = [];
for(var i = 19; i>=0; i--){
var canClear = 1;
for(var j = 0; j < 10; j++){
    if(gameGrid[i][j] == 0){
        canClear = 0;
        break;
    }
}
if(canClear == 1){
   clearedLineNum.push(i);
}
else{
    unClearedLineNum.push(i);
}
}
// there exist lines to be cleared
if(clearedLineNum.length > 0){
// update game score
gameScore += clearedLineNum.length * 100;
// merged matrix (temperary variable)
var copyGameGrid = [];
var tempIndexY = 0;
for(var i=19; i>=0; i--) {
    copyGameGrid[i] = new Array(10).fill(0);
    if(tempIndexY < unClearedLineNum.length){
        for(var j=0; j<10; j++){
            copyGameGrid[i][j] = gameGrid[unClearedLineNum[tempIndexY]][j];
        }
    }
    tempIndexY++;

}


// remove the main game setInterval variable
clearInterval(gameMainTimerVar);

// Start animetion
// TODO: the animetion be protected against other button event
var lineAnimeCounter = 0;
var clearLineAnimeColor = defaultScColor;
var lineClearTimerVar = setInterval(function(){
    if(lineAnimeCounter < 4){
        var startingX = startX;
        var startingY = startY
        for(var k = 0; k < clearedLineNum.length; k++){
            var curX = startingX;
            var curY = startY + squareDist * clearedLineNum[k];
            // clear row first
            ctx.beginPath();
            ctx.fillStyle = screenColor;
            ctx.fillRect(startingX+squareGap/2, curY+squareGap, gridWidth-2*outGap, squareSide);
            if(lineAnimeCounter % 2 == 0){
                clearLineAnimeColor = defaultScColor;
            }
            else{
                clearLineAnimeColor = black;
            }
            for(var j = 0 ; j < 10; j++){
                drawSquare(curX, curY, clearLineAnimeColor, screenColor);
                curX += squareDist;
            }
        }
        lineAnimeCounter++;
    }else{
        clearInterval(lineClearTimerVar);
        // Update the game matrix
        gameGrid = copyGameGrid;
        // TODO: restore the main game setInterval variable
        mainGame();
    }

}, 100);
}


}
function mainGame(){
gameMainTimerVar = setInterval(function(){
// update screen game grid and scores
drawGrid();
// draw current piece
drawCurrentPiece();
console.log(gameStatus);
// control speed according to gamelevel
if(gameUnitInterval % (10 - gameLevel) == 0){
    if(isTouchBottom()){
        updateCurPieceToGrid();
        gameScore += 10;
        checkGameOver();
        // update current piece and next piece
        curPiece = nextPiece;
        curPiece.positionX = 3;
        if((curPiece.type != "I") && (curPiece.type != "O")){
            curPiece.positionY = 1;
        }else{
            curPiece.positionY = 0;
        }
        curPiece.curOrient = 0;
        nextPiece = gamePieces[Math.floor(Math.random() * 7)];
        // merge lines
        clearLines();
        // update game score on screen
        redrawGameScore();
        // update next block on screen
        drawNextBlock();
    }else{
        curPiece.positionY++;
    }
}
gameUnitInterval++;
}, 100);
}
function bottomPieceEachCol(sqMtrx, sqMtrxDim){
var bottomCordinates = [];
for(var i = 0; i < sqMtrxDim; i++){
bottomCordinates[i] = [];
var tempIndex = 0;
// var isBottom = false;
for(var j = sqMtrxDim -1; j >=0; j--){
    if(sqMtrx[j][i] == 1){
        bottomCordinates[i] = [i, tempIndex];
        //bottomCordinates.push([j, i]);
        break;
    }
    tempIndex++;
}
}
return bottomCordinates;
}
function leftPieceEachRow(sqMtrx, sqMtrxDim){
var leftCordinates = [];
var tempIndex = sqMtrxDim - 1;
for(var i = 0; i < sqMtrxDim; i++){
leftCordinates[i] = [];
for(var j =0; j <sqMtrxDim; j++){
    if(sqMtrx[i][j] == 1){
        leftCordinates[i] = [j, tempIndex];
        break;
    }
}
tempIndex--;
}
return leftCordinates;
}
function rightPieceEachRow(sqMtrx, sqMtrxDim){
var rightCordinates = [];
var tempIndex = sqMtrxDim - 1;
for(var i = 0; i < sqMtrxDim; i++){
rightCordinates[i] = [];
for(var j = sqMtrxDim-1; j >= 0; j--){
    if(sqMtrx[i][j]){
        rightCordinates[i] = [j, tempIndex];
        break;
    }
}
tempIndex--;
}
return rightCordinates;
}
function isTouchLeft(){
var leftCordinates = leftPieceEachRow(curPiece.orientations[curPiece.curOrient], curPiece.outDim);
for(var i = 0; i< leftCordinates.length; i++){
var leftPosition = leftCordinates[i];
if(leftPosition.length > 0){
    var leftPosX = curPiece.positionX + leftPosition[0];
    var leftPosY = curPiece.positionY - leftPosition[1];
    //console.log("isTouchLeft: leftPosX is %d; leftPosY is %d", leftPosX, leftPosY);
    if(leftPosX <= 0){
        return true;
    }
    if((leftPosY >=0) && (leftPosY < 20)){
        if(gameGrid[leftPosY][leftPosX-1] == 1){
            return true;
        }
    }
    /*
    if((leftPosX == 0)||(gameGrid[leftPosY][leftPosX-1] == 1)){
        return true;
    }*/
}

}
return false;
}
function isTouchBottom(){
var bottomCordinates = bottomPieceEachCol(curPiece.orientations[curPiece.curOrient], curPiece.outDim);
for(var i = 0; i< bottomCordinates.length; i++){
var bottomPosition = bottomCordinates[i];
if(bottomPosition.length > 0){
    var bottomPosX = curPiece.positionX + bottomPosition[0];
    var bottomPosY = curPiece.positionY - bottomPosition[1];
    //console.log("isTouchBottom: bottomPosX is %d; bottomPosY is %d", bottomPosX, bottomPosY);
    //console.log(bottomPosY);
    if(bottomPosY >= 0){
        if((bottomPosY >= 19)||(gameGrid[bottomPosY+1][bottomPosX] == 1)){
        return true;
        }
    }

}
}
return false;
}
function isTouchRight(){
var rightCordinates = rightPieceEachRow(curPiece.orientations[curPiece.curOrient], curPiece.outDim);
for(var i =0; i <rightCordinates.length;i++){
var rightPosition = rightCordinates[i];
if(rightPosition.length > 0){
    var rightPosX = curPiece.positionX + rightPosition[0];
    var rightPosY = curPiece.positionY - rightPosition[1];
    //console.log("isTouchRight: rightPosX is %d; rightPosY is %d", rightPosX, rightPosY);
    if(rightPosX >= 9){
        return true;
    }
    if((rightPosY >=0) && (rightPosY < 20)){
        if(gameGrid[rightPosY][rightPosX+1] == 1){
            return true;
        }
    }
    /*
    if((rightPosX >= 9) || (gameGrid[rightPosY][rightPosX+1] == 1)){
        return true;
    }*/
}
}
return false;
}
function canRotate(){
var rotateOrient = (curPiece.curOrient + 1) % curPiece.orientNum;
var rotateShape = curPiece.orientations[rotateOrient];
var leftCoordinates = leftPieceEachRow(rotateShape, curPiece.outDim);
var rightCoordinates = rightPieceEachRow(rotateShape, curPiece.outDim);
var bottomCoordinates = bottomPieceEachCol(rotateShape, curPiece.outDim);
// check left first
for(var i = 0; i < leftCoordinates.length; i++){
var leftPosition = leftCoordinates[i];
if(leftPosition.length > 0){
    var leftPosX = curPiece.positionX + leftPosition[0];
    var leftPosY = curPiece.positionY - leftPosition[1];
    //console.log("canRotate: leftPosX is %d; leftPosY is %d", leftPosX, leftPosY);
    if((leftPosX < 0)|| (leftPosX > 9) || (leftPosY > 19)){
        return false;
    }
    if(leftPosY >= 0){
       if(gameGrid[leftPosY][leftPosX] == 1){
           return false;
       }
    }
}
}
// check right
for(i = 0; i < rightCoordinates.length; i++){
var rightPosition = rightCoordinates[i];
if(rightPosition.length > 0){
    var rightPosX = curPiece.positionX + rightPosition[0];
    var rightPosY = curPiece.positionY - rightPosition[1];
    //console.log("canRotate: rightPosX is %d; rightPosY is %d", rightPosX, rightPosY);
    if((rightPosX > 9) || (rightPosX < 0) || (rightPosY > 19)){
        return false;
    }
    if(rightPosY >= 0){
        if(gameGrid[rightPosY][rightPosX] == 1){
            return false;
        }
    }
}
}
// check bottom
for(i = 0; i < bottomCoordinates.length; i++){
var bottomPosition = bottomCoordinates[i];
if(bottomPosition.length > 0){
    var bottomPosX = curPiece.positionX + bottomPosition[0];
    var bottomPosY = curPiece.positionY - bottomPosition[1];
    //console.log("canRotate: rightPosX is %d; rightPosY is %d", bottomPosX, bottomPosY);
    if(bottomPosY >= 0){
        if((bottomPosY > 19)|| (bottomPosX < 0) || (bottomPosX > 9) ||  (gameGrid[bottomPosY] [bottomPosX] == 1)){
            return false;
        }
    }

}
}

// check if any square is occupied by square on grid
var verticalIndex = 0;
var posX = curPiece.positionX;
var posY = curPiece.positionY;
for(i = curPiece.outDim-1; i >= 0; i--){
if((posY>=0)&&(posY<20)){
    for(var j = 0; j < curPiece.outDim; j++){
        if((posX>=0)&&(posX<20)){
            // check if both piece and grid is occupied
            if((gameGrid[posY][posX]==1)&&(rotateShape[i][j]==1)){
                return false;
            }
        }
        posX++;
    }
    posX = curPiece.positionX;
}
posY--;

}
return true;
}

function updateCurPieceToGrid(){
var tempIndexY = curPiece.outDim - 1;
for(var i = 0; i < curPiece.outDim; i++){
for(var j = 0; j < curPiece.outDim; j++){
    if(curPiece.orientations[curPiece.curOrient][i][j] == 1){
        if((curPiece.positionY - tempIndexY) >= 0){
            gameGrid[curPiece.positionY - tempIndexY][curPiece.positionX + j] = 1;
        }
    }
}
tempIndexY--;
}
}
function checkGameOver(){
for(i = 0; i < 10; i++){
// game over
if(gameGrid[0][i] == 1){
    reset();
}
}
}
function drawCurrentPiece(){
var upperLeftX = startX + curPiece.positionX * squareDist;
var upperLeftY = startY + curPiece.positionY * squareDist;
var curX = upperLeftX;
var curY = upperLeftY;

var indexX = 0;
var indexY = curPiece.outDim - 1;
for(var i = curPiece.positionY; i >(curPiece.positionY - curPiece.outDim); i--){
if(i >= 0){
    for(var j = curPiece.positionX; j < (curPiece.positionX + curPiece.outDim); j++){
        if((curPiece.orientations[curPiece.curOrient][indexY][indexX]==1)&&(j <= 9)){
            drawSquare(curX, curY, black, screenColor);
        }
        curX += squareDist;
        indexX++;
    }
    indexX = 0;
    curX = upperLeftX;
}
curY -= squareDist;
indexY--;

}
}
/*function startPauseEffect(){
if(gameStatus == 0){
clearGrid();
initializeGameGrid();
drawGrid();
//gameStatus = 1;
}
}*/
