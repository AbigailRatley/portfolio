var ballX = 300;
var ballY = 300;
var ballSize = 40;
var score = 0;
var gameState = 'L0';
var img;
var img2;
var counter = 0;
var bX, bY;

function setup (){
  createCanvas (600,600);
  textAlign(CENTER);
  img = loadImage ('https://ajratley.github.io/images/beetle.png');
  img2 = loadImage ('https://ajratley.github.io/game/leaf.png');
  img3 = loadImage ('https://ajratley.github.io/game/ladybug.png');

} // end of set up

function draw () {
  //background(img2);
imageMode(CORNER);
image (img2, 0,0,600,600);
imageMode(CENTER);
   if (gameState == 'L0') {
    start();
  } 
  if (gameState == 'L1') {
    levelOne();
      text(('score: ' + score),width/2,40);
  } 
  if (gameState == 'L2') {
    levelTwo();
      text(('score: ' + score),width/2,40);
  }
  if (gameState == 'L3') {
    levelThree();
      text(('score: ' + score),width/2,40);
  }
  if (gameState == 'L4') {
    levelFour();
      text(('score: ' + score),width/2,40);
  }
   if (gameState == 'L5') {
    levelFive();
      text(('score: ' + score),width/2,40);
  }
    if (gameState == 'end') {
    end();
  }

} // end of draw

function start() {
  fill(0);
  noStroke();
  rect(180,160,240,50,15);
  fill(0);
  noStroke();
  rect(260,270,80,40,15);
  textSize(40);
  stroke(255);
  fill(255);
  image(img, 300, 450, 150, 150);
  text('Kill The Bug', width / 2, 200);

  textSize(30);
  stroke(0, 255, 0);
  fill(0, 255, 0);
  let txt = 'start';
  let x = width / 2;
  let y = height / 2;
  text(txt, x, y);

  let textW = textWidth(txt);
  let textH = 30;

  if (
    mouseIsPressed &&
    mouseX > x - textW / 2 &&
    mouseX < x + textW / 2 &&
    mouseY > y - textH / 2 &&
    mouseY < y + textH / 2
  ) {
    gameState = 'L1';
  }
}

function levelOne () {
  fill(255);
  noStroke();
  rect(240,550,120,40,15);
  fill(255);
  noStroke();
  rect(240,10,120,40,15);
  fill(0);
  stroke(0);
  textSize(30);
  text ('level 1',width/2, height-20);
  var distToBall = dist(ballX,ballY,mouseX,mouseY);
  if(distToBall < ballSize/2) {
      ballX = random(width-10);
      ballY = random(height-10);
   score = score + 1;
  }
  
  if (score >= 5) {
    gameState = 'L2';
  }
  
  line(ballX,ballY,mouseX,mouseY);
  image (img, ballX, ballY, ballSize, ballSize);
  
} // end of level one

function levelTwo () {
  fill(255);
  noStroke();
  rect(240,550,120,40,15);
  fill(255);
  noStroke();
  rect(240,10,120,40,15);
  fill(0);
  stroke(0);
  textSize(30);
  text ('level 2',width/2, height-20);
  var distToBall = dist(ballX,ballY,mouseX,mouseY);
  if(distToBall < ballSize/2) {
      ballX = random(width-10);
      ballY = random(height-10);
   score = score + 1;
  }
  
  if (score >= 10) {
    gameState = 'L3';
  }
  image (img, ballX, ballY, ballSize, ballSize);
} // end of level two


function levelThree () {
  fill(255);
  noStroke();
  rect(240,550,120,40,15);
  fill(255);
  noStroke();
  rect(235,10,130,40,15);
  fill(0);
  stroke(0);
  textSize(30);
  text ('level 3!',width/2, height-20);
  var distToBall = dist(ballX,ballY,mouseX,mouseY);
  if(distToBall < ballSize/2) {
      ballX = random(width-10);
      ballY = random(height-10);
   score = score + 1;
   ballSize = ballSize - 2;
  }
  
  if (score >= 15) {
    gameState = 'L4';
  }
  image (img, ballX, ballY, ballSize, ballSize);
  

  if (counter>60){
     bX=random(width-10);
     bY=random(height-10);
     image (img3,bX, bY, ballSize-2, ballSize-2);
     counter =0;
  } else {
        image (img3,bX, bY, ballSize-2, ballSize-2);
    counter = counter +1;
  }

  
} // end of level three

function levelFour () {
  fill(255);
  noStroke();
  rect(240,550,120,40,15);
  fill(255);
  noStroke();
  rect(235,10,130,40,15);
  fill(0);
  stroke(0);
  textSize(30);
  text ('level 4!!',width/2, height-20);
  var distToBall = dist(ballX,ballY,mouseX,mouseY);
  if(distToBall < ballSize/2) {
      ballX = random(width-10);
      ballY = random(height-10);
   score = score + 1;
   ballSize = ballSize - 2;
  }
  
  if (score >= 20) {
    gameState = 'L5';
  }
  image (img, ballX, ballY, ballSize, ballSize);
  
    if (counter>60){
     bX=random(width-10);
     bY=random(height-10);
     image (img3,bX, bY, ballSize, ballSize);
     counter =0;
  } else {
        image (img3,bX, bY, ballSize, ballSize);
    counter = counter +1;
  }
} // end of level four

function levelFive () {
  fill(255);
  noStroke();
  rect(235,550,130,40,15);
  fill(255);
  noStroke();
  rect(235,10,130,40,15);
  fill(0);
  stroke(0);
  textSize(30);
  text ('level 5!!!!',width/2, height-20);
  var distToBall = dist(ballX,ballY,mouseX,mouseY);
  if(distToBall < ballSize/2) {
      ballX = random(width-10);
      ballY = random(height-10);
   score = score + 1;
   ballSize = ballSize - 1;
  }
  
  if (score >= 30) {
    gameState = 'end';
  }
  image (img, ballX, ballY, ballSize, ballSize);
  
    if (counter>60){
     bX=random(width-10);
     bY=random(height-10);
     image (img3,bX, bY, ballSize, ballSize);
     counter =0;
  } else {
        image (img3,bX, bY, ballSize, ballSize);
    counter = counter +1;
  }
} // end of level five

function end () {
  fill(0);
  noStroke();
  rect(150,160,300,50,15);
  fill(0);
  noStroke();
  rect(250,270,100,40,15);
  textSize(40);
  stroke(255);
  fill(255);
  image (img, 300, 450, 100, 100);
  text ('Game Complete',width/2, 200);

  textSize(30);
  stroke(0,255,0);
  fill(0,255,0);
  let txt = 'restart';
  let x = width / 2;
  let y = height / 2;

  text(txt, x, y);

  let textW = textWidth(txt);
  let textH = 40; 

  if (
    mouseIsPressed &&
    mouseX > x - textW / 2 &&
    mouseX < x + textW / 2 &&
    mouseY > y - textH / 2 &&
    mouseY < y + textH / 2
  ) {
      score = 0;
      ballSize = 40;
      ballX = random(width-10);
      ballY = random(height-10);
      gameState = 'L0';
  }
}
