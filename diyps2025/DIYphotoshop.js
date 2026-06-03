var img;
var initials = 'ar'; 
var choice = '1'; 
var lastscreenshot=61; // last screenshot never taken
let counter= 0;
let bg;
let k;

function preload() {
  img = loadImage('https://ajratley.github.io/images/fish.gif'); 
  bg = loadImage ('https://ajratley.github.io/images/ocean.jpg');
}

function setup() {
createCanvas(600, 600);  
background(bg); 
}

function draw() { 
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { 

 if (toolChoice == '1' ) {  // first brush- black pen
   
    stroke(0);
    strokeWeight(2);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second brush - white brush
  
    stroke(255);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '3') {  // third brush -orange circle brush

    strokeWeight(1)
    stroke(200,100,0);
    fill(200, 150, 0,200);
    ellipse(mouseX, mouseY, 30);
    
  } else if (toolChoice == '4') { // fourth brush - funky oval pink brush
  
    stroke(0, 255, 0);
    arbrush(color(200,random(10,80),random(10,100),150), mouseX, mouseY, pmouseX, pmouseY);

  } else if (toolChoice == '5') { // fifth brush- bubbles

     arBubbleBrush(color(random (50,100),random(30,200),random (220,250)), mouseX,mouseY);
    
  } else if (toolChoice == '6') { // sixth brush - seaweed

    arseaweed (color(30, random(100,200), random(70,120)),mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '7') { // seventh brush - rainbow
    
  colorMode(HSB); 
  counter++;
  counter = counter % 360;
  arRainbowBrush(color(counter, 100, 100), mouseX, mouseY, pmouseX, pmouseY);
  colorMode(RGB);
    
  } else if (toolChoice == '8') { // eigth brush- fish images

    image(img, mouseX-50, mouseY-50, 100, 100);
    
  } else if (toolChoice == '9') { // ninth brush- blue fish
  
   arFish(mouseX,mouseY, color(random(0,50),random(0,100),random(200,255)));
    
  } else if (toolChoice == '0') { // tenth brush- green fish
  
   arFish(mouseX,mouseY, color(random(100,150),random(200,250),random(50,200)));
    
  }
 }


function arbrush(k,lx, ly,px, py ) {
  stroke(k);
  strokeWeight (random(1,30));
  line (lx,ly,px,py);
  }

function arBubbleBrush( k, lx, ly) {
  let r = random(10);
  fill(k);
  stroke(k);
  strokeWeight(1);

  for (let i = 0; i < r; i++) {
   let lr = random(5,20);
   let srx = random(-30,30);
   let sry = random(-50,50);
   ellipse(lx+srx, ly+sry, lr, lr)
 }
}

function arRainbowBrush (k,lx, ly,px, py) {
  stroke(k);
  strokeWeight (20);
  line (lx,ly,px,py);
  }
  
function arseaweed (k, lx, ly, px, py){
  strokeWeight(random(8, 14));
  stroke(k);
  let xr = random(-50, 50);
  let yr = random(-60, 60);
  line(lx, ly, px, py);
  line(lx + xr, ly + yr, px, py);

}

function arFish(x, y,k) {
  push();
  translate(x, y);
  scale(random(0.5, 1.5));
  rotate(random(-PI / 8, PI / 8));
  noStroke();
  
  // Body
  fill(k);
  ellipse(0, 0, 60, 30);
  
  // Tail
  fill(k);
  triangle(-30, 0, -50, -15, -50, 15);
  
  // Eye
  fill(255);
  ellipse(15, -5, 10, 10);
  fill(0);
  ellipse(15, -5, 4, 4);
  
  pop();
}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(bg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
