let gameState = 'start';
let customFont;
let button;
let selectedFace = null;
let selectedHair = null;
let selectedEyebrows = null;
let selectedEyes = null;
let selectedMouth = null;
let selectedNose = null;
let selectedExtra = null;

let downloadButton;
let restartButton;

let bg1;
let bg2;
let bg3;
let bg4;
let bg5;
let bg6;

let carly;
let lilly;

let assets = [];

let extraAssetSettings = {
  79: { x: 195, y: 220, w: 85, h: 30 },
  80: { x: 200, y: 250, w: 60, h: 10 },
  248: { x: 250, y: 210, w: 10, h: 10 },
  289: { x: 220, y: 265, w: 10, h: 10 },
  82: { x: 180, y: 175, w: 110, h: 85 },
  81: { x: 195, y: 300, w: 75, h: 70 },
};

function preload(){
customFont= loadFont ('https://ajratley.github.io/final_project/assets/font1.ttf');
bg1 = loadImage('https://ajratley.github.io/final_project/assets/Asset%201.png');
bg2 = loadImage('https://ajratley.github.io/final_project/assets/Asset%202.png');
bg3 = loadImage('https://ajratley.github.io/final_project/assets/Asset%203.png');
bg4 = loadImage('https://ajratley.github.io/final_project/assets/Asset%204.png');
bg5 = loadImage('https://ajratley.github.io/final_project/assets/Asset%206.png');
bg6 = loadImage('https://ajratley.github.io/final_project/assets/Asset%205.png');

carly = loadImage('assets/Carly.png');
lilly = loadImage('assets/lilly.png');

  for (let i = 1; i < 290; i++) {
    let filename = 'https://ajratley.github.io/final_project/assets/Asset%20' + i + '.png';
    assets[i] = loadImage(filename);
  }

}


function setup (){
createCanvas (960,540);
background(75,60,150);
textFont(customFont);
}

function draw () {

    if (gameState == 'start') {
        start();
      } 
     else if (gameState == 'face') {
        face();
      } 
      else if (gameState == 'hair') {
        hair();
      }
      else if (gameState == 'eyes') {
        eyes();
      }
      else if (gameState == 'mouth') {
        mouth();
      }
      else if (gameState == 'nose') {
        nose();
      }
      else if (gameState == 'extra') {
        extra();
      }
      else if (gameState == 'end') {
            end();
      }
    

if (gameState !== 'start' && gameState !== 'end') {
    if (selectedHair !== null && assets[selectedHair]) {
    image(assets[selectedHair], 170, 165,assets[selectedHair].width*1.3,assets[selectedHair].height*1.3);
  }
  if (selectedFace !== null && assets[selectedFace]) {
    image(assets[selectedFace], 175, 175);
  }
  if (selectedEyebrows !== null && assets[selectedEyebrows]) {
    image(assets[selectedEyebrows], 195, 210,75,10);
  }
  if (selectedEyes !== null && assets[selectedEyes]) {
    image(assets[selectedEyes], 238, 225, 28,18);
    image(assets[selectedEyes], 198, 225, 28,18);
  }
  if (selectedMouth !== null && assets[selectedMouth]) {
    image(assets[selectedMouth], 210, 280,assets[selectedMouth].width/4,assets[selectedMouth].height/4);
  }
  if (selectedNose !== null && assets[selectedNose]) {
    image(assets[selectedNose], 220, 248,assets[selectedNose].width/4, assets[selectedNose].height/4);
  }
if (selectedExtra !== null && assets[selectedExtra]) {
  let config = extraAssetSettings[selectedExtra];
  if (config) {
    image(assets[selectedExtra], config.x, config.y, config.w, config.h);
  } 
}
}

if (gameState !== 'end' && downloadButton) {
  downloadButton.remove();
  downloadButton = null;
}

    } 



function start(){
  background(75,60,150);
    textSize(100);
    stroke(255);
    fill(255);
    textAlign(CENTER,CENTER)
    text('Mini Me', width / 2, 150);

    if (!button) {
        button = createButton('play');
        button.position(width/2-50, height/2+25);
        button.size(100,60);
        button.style('font-size', '40px');
        button.class('custom-font');
        button.mousePressed(() => {
            gameState = 'face';
            button.remove();
            button = null; 
        });
    }

    image(carly, 100,250,150,200);
    image(lilly, 700,250,150,200);
}

function face(){
  background(bg1);
  }


function hair(){
  background(bg2);

}
function eyes(){
  background(bg3);

}
function mouth(){
  background(bg4);

}
function nose(){
  background(bg5);

}
function extra(){
  background(bg6);

}
function end() {
  background(100,180,200);

    textSize(100);
    stroke(255);
    fill(255);
    textAlign(CENTER,CENTER)
    text('Mini Me', width / 2, 100);

  // Draw only the final avatar
  if (selectedHair && assets[selectedHair]) {
    image(assets[selectedHair], 170, 165, assets[selectedHair].width * 1.3, assets[selectedHair].height * 1.3);
  }
  if (selectedFace && assets[selectedFace]) {
    image(assets[selectedFace], 175, 175);
  }
  if (selectedEyebrows && assets[selectedEyebrows]) {
    image(assets[selectedEyebrows], 195, 210, 75, 10);
  }
  if (selectedEyes && assets[selectedEyes]) {
    image(assets[selectedEyes], 238, 225, 28, 18);
    image(assets[selectedEyes], 198, 225, 28, 18);
  }
  if (selectedMouth && assets[selectedMouth]) {
    image(assets[selectedMouth], 210, 280, assets[selectedMouth].width / 4, assets[selectedMouth].height / 4);
  }
  if (selectedNose && assets[selectedNose]) {
    image(assets[selectedNose], 220, 248, assets[selectedNose].width / 4, assets[selectedNose].height / 4);
  }
  if (selectedExtra && assets[selectedExtra]) {
    let config = extraAssetSettings[selectedExtra];
    if (config) {
      image(assets[selectedExtra], config.x, config.y, config.w, config.h);
    }
  }

  // Create the download button once
  if (!downloadButton) {
    downloadButton = createButton('Download Avatar');
    downloadButton.position(230, 400);
    downloadButton.size(150, 40);
    downloadButton.style('font-size', '18px');
    downloadButton.mousePressed(() => {
      saveCanvas('my-avatar', 'png');
    });
  }
    if (!restartButton) {
    restartButton = createButton('Restart');
    restartButton.position(580, 400);
    restartButton.size(150, 40);
    restartButton.style('font-size', '18px');
    restartButton.mousePressed(() => {
      // Reset selections
      selectedFace = null;
      selectedHair = null;
      selectedEyebrows = null;
      selectedEyes = null;
      selectedMouth = null;
      selectedNose = null;
      selectedExtra = null;

      // Change game state
      gameState = 'start';

      // Remove buttons
      if (downloadButton) {
        downloadButton.remove();
        downloadButton = null;
      }
      if (restartButton) {
        restartButton.remove();
        restartButton = null;
      }
    });
  }
}

function mousePressed() {

  if (gameState === 'hair' || 'eyes' || 'mouth' || 'nose' || 'extra' 
  ) {
    if (mouseX >= 480 && mouseX <= 555 && mouseY >= 61 && mouseY <= 136) {
      gameState = 'face';
    }
  }
  if (gameState === 'face' || 'eyes' || 'mouth' || 'nose' || 'extra' 
  ) {
    if (mouseX >= 555 && mouseX <= 630 && mouseY >= 61 && mouseY <= 136) {
      gameState = 'hair';
    }
  }
  if (gameState === 'hair' || 'face' || 'mouth' || 'nose' || 'extra' 
  ) {
    if (mouseX >= 630 && mouseX <= 705 && mouseY >= 61 && mouseY <= 136) {
      gameState = 'eyes';
    }
  }
  if (gameState === 'hair' || 'eyes' || 'face' || 'nose' || 'extra' 
  ) {
    if (mouseX >= 705 && mouseX <= 780 && mouseY >= 61 && mouseY <= 136) {
      gameState = 'mouth';
    }
  }
  if (gameState === 'hair' || 'eyes' || 'mouth' || 'face' || 'extra' 
  ) {
    if (mouseX >= 780 && mouseX <= 855 && mouseY >= 61 && mouseY <= 136) {
      gameState = 'nose';
    }
  }
  if (gameState === 'hair' || 'eyes' || 'mouth' || 'nose' || 'face' 
  ) {
    if (mouseX >= 855 && mouseX <= 930 && mouseY >= 61 && mouseY <= 136) {
      gameState = 'extra';
    }

    if (gameState === 'hair' || 'eyes' || 'mouth' || 'nose' || 'face' || 'extra') {
  if (mouseX >= 50 && mouseX <= 450 && mouseY >= 50 && mouseY <= 400) {
    gameState = 'end';
  }
}
  }


  // --- FACE SELECTION ---
  if (gameState === 'face') {
    if (mouseX >= 507 && mouseX <= 623 && mouseY >= 175 && mouseY <= 290) {
      selectedFace = 189;
    } else if (mouseX >= 647 && mouseX <= 763 && mouseY >= 175 && mouseY <= 290) {
      selectedFace = 188;
    } else if (mouseX >= 787 && mouseX <= 903 && mouseY >= 175 && mouseY <= 290) {
      selectedFace = 187;
    } else if (mouseX >= 507 && mouseX <= 623 && mouseY >= 325 && mouseY <= 440) {
      selectedFace = 186;
    } else if (mouseX >= 647 && mouseX <= 763 && mouseY >= 325 && mouseY <= 440) {
      selectedFace = 185;
    } else if (mouseX >= 787 && mouseX <= 903 && mouseY >= 325 && mouseY <= 440) {
      selectedFace = 184;
    }
  }

  // --- HAIR and EYEBROW SELECTION ---
  if (gameState === 'hair') {
    if (mouseX >= 507 && mouseX <= 623 && mouseY >= 175 && mouseY <= 290) {
      selectedHair = 254;
    selectedEyebrows = 288;
    } else if (mouseX >= 647 && mouseX <= 763 && mouseY >= 175 && mouseY <= 290) {
      selectedHair = 253;
    selectedEyebrows = 288;
    } else if (mouseX >= 787 && mouseX <= 903 && mouseY >= 175 && mouseY <= 290) {
      selectedHair = 250;
    selectedEyebrows = 288;
    } else if (mouseX >= 507 && mouseX <= 623 && mouseY >= 325 && mouseY <= 440) {
      selectedHair = 252;
    selectedEyebrows = 288;
    } else if (mouseX >= 647 && mouseX <= 763 && mouseY >= 325 && mouseY <= 440) {
      selectedHair = 251;
    selectedEyebrows = 288;
    } else if (mouseX >= 787 && mouseX <= 903 && mouseY >= 325 && mouseY <= 440) {
      selectedHair = 249;
    selectedEyebrows = 288;
    }
  }

  // --- EYES SELECTION ---
  if (gameState === 'eyes') {
    if (mouseX >= 507 && mouseX <= 623 && mouseY >= 175 && mouseY <= 290) {
      selectedEyes = 243;
    } else if (mouseX >= 647 && mouseX <= 763 && mouseY >= 175 && mouseY <= 290) {
      selectedEyes = 241;
    } else if (mouseX >= 787 && mouseX <= 903 && mouseY >= 175 && mouseY <= 290) {
      selectedEyes = 240;
    } else if (mouseX >= 507 && mouseX <= 623 && mouseY >= 325 && mouseY <= 440) {
      selectedEyes = 242;
    } else if (mouseX >= 647 && mouseX <= 763 && mouseY >= 325 && mouseY <= 440) {
      selectedEyes = 239;
    } else if (mouseX >= 787 && mouseX <= 903 && mouseY >= 325 && mouseY <= 440) {
      selectedEyes = 238;
    }
  }

  // --- MOUTH SELECTION ---
  if (gameState === 'mouth') {
    if (mouseX >= 507 && mouseX <= 623 && mouseY >= 175 && mouseY <= 290) {
      selectedMouth = 247;
    } else if (mouseX >= 647 && mouseX <= 763 && mouseY >= 175 && mouseY <= 290) {
      selectedMouth = 246;
    } else if (mouseX >= 787 && mouseX <= 903 && mouseY >= 175 && mouseY <= 290) {
      selectedMouth = 245;
    }
  }

  // --- NOSE SELECTION ---
  if (gameState === 'nose') {
    if (mouseX >= 507 && mouseX <= 623 && mouseY >= 175 && mouseY <= 290) {
      selectedNose = 87;
    } else if (mouseX >= 647 && mouseX <= 763 && mouseY >= 175 && mouseY <= 290) {
      selectedNose = 86;
    } else if (mouseX >= 787 && mouseX <= 903 && mouseY >= 175 && mouseY <= 290) {
      selectedNose = 85;
    } else if (mouseX >= 507 && mouseX <= 623 && mouseY >= 325 && mouseY <= 440) {
      selectedNose = 84;
    } else if (mouseX >= 647 && mouseX <= 763 && mouseY >= 325 && mouseY <= 440) {
      selectedNose = 83;
    } 
  }

  // --- EXTRA SELECTION ---
  if (gameState === 'extra') {
    if (mouseX >= 507 && mouseX <= 623 && mouseY >= 175 && mouseY <= 290) {
      selectedExtra = 79;
    } else if (mouseX >= 647 && mouseX <= 763 && mouseY >= 175 && mouseY <= 290) {
      selectedExtra = 80;
    } else if (mouseX >= 787 && mouseX <= 903 && mouseY >= 175 && mouseY <= 290) {
      selectedExtra = 248;
    } else if (mouseX >= 507 && mouseX <= 623 && mouseY >= 325 && mouseY <= 440) {
      selectedExtra = 289;
    } else if (mouseX >= 647 && mouseX <= 763 && mouseY >= 325 && mouseY <= 440) {
      selectedExtra = 82;
    } else if (mouseX >= 787 && mouseX <= 903 && mouseY >= 325 && mouseY <= 440) {
      selectedExtra = 81;
    }
  }

  // FACE TONES
  else if (selectedFace === 189 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 183;
  } else if (selectedFace === 189 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 153;
  } else if (selectedFace === 189 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 177;
  } else if (selectedFace === 189 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 165;
  } else if (selectedFace === 189 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 147;
  } else if (selectedFace === 189 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 171;
  } else if (selectedFace === 189 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 159;
  } else if (selectedFace === 189 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 141;
  }

  else if (selectedFace === 188 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 182;
  } else if (selectedFace === 188 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 153;
  } else if (selectedFace === 188 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 176;
  } else if (selectedFace === 188 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 164;
  } else if (selectedFace === 188 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 146;
  } else if (selectedFace === 188 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 170;
  } else if (selectedFace === 188 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 158;
  } else if (selectedFace === 188 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 140;
  }

  else if (selectedFace === 187 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 181;
  } else if (selectedFace === 187 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 152;
  } else if (selectedFace === 187 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 175;
  } else if (selectedFace === 187 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 163;
  } else if (selectedFace === 187 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 145;
  } else if (selectedFace === 187 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 169;
  } else if (selectedFace === 187 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 157;
  } else if (selectedFace === 187 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 139;
  }

  else if (selectedFace === 186 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 180;
  } else if (selectedFace === 186 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 151;
  } else if (selectedFace === 186 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 174;
  } else if (selectedFace === 186 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 162;
  } else if (selectedFace === 186 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 144;
  } else if (selectedFace === 186 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 168;
  } else if (selectedFace === 186 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 156;
  } else if (selectedFace === 186 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 138;
  }

  else if (selectedFace === 185 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 179;
  } else if (selectedFace === 185 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 150;
  } else if (selectedFace === 185 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 173;
  } else if (selectedFace === 185 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 161;
  } else if (selectedFace === 185 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 143;
  } else if (selectedFace === 185 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 167;
  } else if (selectedFace === 185 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 155;
  } else if (selectedFace === 185 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 137;
  }

  else if (selectedFace === 184 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 178;
  } else if (selectedFace === 184 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 149;
  } else if (selectedFace === 184 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 172;
  } else if (selectedFace === 184 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 160;
  } else if (selectedFace === 184 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 142;
  } else if (selectedFace === 184 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 166;
  } else if (selectedFace === 184 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 154;
  } else if (selectedFace === 184 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 136;
  }




    // HAIR COLOURS
if (selectedHair === 254 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) selectedHair = 72;
if (selectedHair === 254 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) selectedHair = 66;
if (selectedHair === 254 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) selectedHair = 60;
if (selectedHair === 254 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) selectedHair = 54;
if (selectedHair === 254 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) selectedHair = 48;
if (selectedHair === 254 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) selectedHair = 42;
if (selectedHair === 254 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) selectedHair = 36;
if (selectedHair === 254 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) selectedHair = 30;
if (selectedHair === 254 && mouseX >= 68 && mouseX <= 108 && mouseY >= 467 && mouseY <= 547) selectedHair = 272;
if (selectedHair === 254 && mouseX >= 108 && mouseX <= 148 && mouseY >= 467 && mouseY <= 547) selectedHair = 266;
if (selectedHair === 254 && mouseX >= 148 && mouseX <= 180 && mouseY >= 467 && mouseY <= 547) selectedHair = 260;
if (selectedHair === 254 && mouseX >= 180 && mouseX <= 231 && mouseY >= 467 && mouseY <= 547) selectedHair = 254;
if (selectedHair === 254 && mouseX >= 231 && mouseX <= 272 && mouseY >= 467 && mouseY <= 547) selectedHair = 24;
if (selectedHair === 254 && mouseX >= 272 && mouseX <= 314 && mouseY >= 467 && mouseY <= 547) selectedHair = 18;
if (selectedHair === 254 && mouseX >= 314 && mouseX <= 355 && mouseY >= 467 && mouseY <= 547) selectedHair = 12;
if (selectedHair === 254 && mouseX >= 355 && mouseX <= 400 && mouseY >= 467 && mouseY <= 547) selectedHair = 78;

if (selectedHair === 253 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) selectedHair = 71;
if (selectedHair === 253 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) selectedHair = 65;
if (selectedHair === 253 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) selectedHair = 59;
if (selectedHair === 253 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) selectedHair = 53;
if (selectedHair === 253 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) selectedHair = 47;
if (selectedHair === 253 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) selectedHair = 41;
if (selectedHair === 253 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) selectedHair = 35;
if (selectedHair === 253 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) selectedHair = 29;
if (selectedHair === 253 && mouseX >= 68 && mouseX <= 108 && mouseY >= 467 && mouseY <= 547) selectedHair = 271;
if (selectedHair === 253 && mouseX >= 108 && mouseX <= 148 && mouseY >= 467 && mouseY <= 547) selectedHair = 265;
if (selectedHair === 253 && mouseX >= 148 && mouseX <= 180 && mouseY >= 467 && mouseY <= 547) selectedHair = 259;
if (selectedHair === 253 && mouseX >= 180 && mouseX <= 231 && mouseY >= 467 && mouseY <= 547) selectedHair = 253;
if (selectedHair === 253 && mouseX >= 231 && mouseX <= 272 && mouseY >= 467 && mouseY <= 547) selectedHair = 23;
if (selectedHair === 253 && mouseX >= 272 && mouseX <= 314 && mouseY >= 467 && mouseY <= 547) selectedHair = 17;
if (selectedHair === 253 && mouseX >= 314 && mouseX <= 355 && mouseY >= 467 && mouseY <= 547) selectedHair = 11;
if (selectedHair === 253 && mouseX >= 355 && mouseX <= 400 && mouseY >= 467 && mouseY <= 547) selectedHair = 77;

if (selectedHair === 252 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) selectedHair = 70;
if (selectedHair === 252 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) selectedHair = 64;
if (selectedHair === 252 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) selectedHair = 58;
if (selectedHair === 252 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) selectedHair = 52;
if (selectedHair === 252 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) selectedHair = 46;
if (selectedHair === 252 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) selectedHair = 40;
if (selectedHair === 252 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) selectedHair = 34;
if (selectedHair === 252 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) selectedHair = 28;
if (selectedHair === 252 && mouseX >= 68 && mouseX <= 108 && mouseY >= 467 && mouseY <= 547) selectedHair = 270;
if (selectedHair === 252 && mouseX >= 108 && mouseX <= 148 && mouseY >= 467 && mouseY <= 547) selectedHair = 264;
if (selectedHair === 252 && mouseX >= 148 && mouseX <= 180 && mouseY >= 467 && mouseY <= 547) selectedHair = 258;
if (selectedHair === 252 && mouseX >= 180 && mouseX <= 231 && mouseY >= 467 && mouseY <= 547) selectedHair = 252;
if (selectedHair === 252 && mouseX >= 231 && mouseX <= 272 && mouseY >= 467 && mouseY <= 547) selectedHair = 22;
if (selectedHair === 252 && mouseX >= 272 && mouseX <= 314 && mouseY >= 467 && mouseY <= 547) selectedHair = 16;
if (selectedHair === 252 && mouseX >= 314 && mouseX <= 355 && mouseY >= 467 && mouseY <= 547) selectedHair = 10;
if (selectedHair === 252 && mouseX >= 355 && mouseX <= 400 && mouseY >= 467 && mouseY <= 547) selectedHair = 76;

if (selectedHair === 251 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) selectedHair = 69;
if (selectedHair === 251 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) selectedHair = 63;
if (selectedHair === 251 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) selectedHair = 57;
if (selectedHair === 251 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) selectedHair = 51;
if (selectedHair === 251 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) selectedHair = 45;
if (selectedHair === 251 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) selectedHair = 39;
if (selectedHair === 251 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) selectedHair = 33;
if (selectedHair === 251 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) selectedHair = 27;
if (selectedHair === 251 && mouseX >= 68 && mouseX <= 108 && mouseY >= 467 && mouseY <= 547) selectedHair = 269;
if (selectedHair === 251 && mouseX >= 108 && mouseX <= 148 && mouseY >= 467 && mouseY <= 547) selectedHair = 263;
if (selectedHair === 251 && mouseX >= 148 && mouseX <= 180 && mouseY >= 467 && mouseY <= 547) selectedHair = 257;
if (selectedHair === 251 && mouseX >= 180 && mouseX <= 231 && mouseY >= 467 && mouseY <= 547) selectedHair = 251;
if (selectedHair === 251 && mouseX >= 231 && mouseX <= 272 && mouseY >= 467 && mouseY <= 547) selectedHair = 21;
if (selectedHair === 251 && mouseX >= 272 && mouseX <= 314 && mouseY >= 467 && mouseY <= 547) selectedHair = 15;
if (selectedHair === 251 && mouseX >= 314 && mouseX <= 355 && mouseY >= 467 && mouseY <= 547) selectedHair = 9;
if (selectedHair === 251 && mouseX >= 355 && mouseX <= 400 && mouseY >= 467 && mouseY <= 547) selectedHair = 75;

if (selectedHair === 250 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) selectedHair = 68;
if (selectedHair === 250 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) selectedHair = 62;
if (selectedHair === 250 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) selectedHair = 56;
if (selectedHair === 250 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) selectedHair = 50;
if (selectedHair === 250 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) selectedHair = 44;
if (selectedHair === 250 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) selectedHair = 38;
if (selectedHair === 250 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) selectedHair = 32;
if (selectedHair === 250 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) selectedHair = 26;
if (selectedHair === 250 && mouseX >= 68 && mouseX <= 108 && mouseY >= 467 && mouseY <= 547) selectedHair = 268;
if (selectedHair === 250 && mouseX >= 108 && mouseX <= 148 && mouseY >= 467 && mouseY <= 547) selectedHair = 262;
if (selectedHair === 250 && mouseX >= 148 && mouseX <= 180 && mouseY >= 467 && mouseY <= 547) selectedHair = 256;
if (selectedHair === 250 && mouseX >= 180 && mouseX <= 231 && mouseY >= 467 && mouseY <= 547) selectedHair = 250;
if (selectedHair === 250 && mouseX >= 231 && mouseX <= 272 && mouseY >= 467 && mouseY <= 547) selectedHair = 20;
if (selectedHair === 250 && mouseX >= 272 && mouseX <= 314 && mouseY >= 467 && mouseY <= 547) selectedHair = 14;
if (selectedHair === 250 && mouseX >= 314 && mouseX <= 355 && mouseY >= 467 && mouseY <= 547) selectedHair = 8;
if (selectedHair === 250 && mouseX >= 355 && mouseX <= 400 && mouseY >= 467 && mouseY <= 547) selectedHair = 74;

if (selectedHair === 249 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) selectedHair = 67;
if (selectedHair === 249 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) selectedHair = 61;
if (selectedHair === 249 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) selectedHair = 55;
if (selectedHair === 249 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) selectedHair = 49;
if (selectedHair === 249 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) selectedHair = 43;
if (selectedHair === 249 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) selectedHair = 37;
if (selectedHair === 249 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) selectedHair = 31;
if (selectedHair === 249 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) selectedHair = 25;
if (selectedHair === 249 && mouseX >= 68 && mouseX <= 108 && mouseY >= 467 && mouseY <= 547) selectedHair = 267;
if (selectedHair === 249 && mouseX >= 108 && mouseX <= 148 && mouseY >= 467 && mouseY <= 547) selectedHair = 261;
if (selectedHair === 249 && mouseX >= 148 && mouseX <= 180 && mouseY >= 467 && mouseY <= 547) selectedHair = 255;
if (selectedHair === 249 && mouseX >= 180 && mouseX <= 231 && mouseY >= 467 && mouseY <= 547) selectedHair = 249;
if (selectedHair === 249 && mouseX >= 231 && mouseX <= 272 && mouseY >= 467 && mouseY <= 547) selectedHair = 19;
if (selectedHair === 249 && mouseX >= 272 && mouseX <= 314 && mouseY >= 467 && mouseY <= 547) selectedHair = 13;
if (selectedHair === 249 && mouseX >= 314 && mouseX <= 355 && mouseY >= 467 && mouseY <= 547) selectedHair = 7;
if (selectedHair === 249 && mouseX >= 355 && mouseX <= 400 && mouseY >= 467 && mouseY <= 547) selectedHair = 73;

// EYEBROWS
if ((selectedHair >= 7 && selectedHair <= 272) && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) {
  selectedEyebrows = 273;
}
if ((selectedHair >= 7 && selectedHair <= 272) && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) {
  selectedEyebrows = 280;
}
if ((selectedHair >= 7 && selectedHair <= 272) && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) {
  selectedEyebrows = 279;
}
if ((selectedHair >= 7 && selectedHair <= 272) && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) {
  selectedEyebrows = 278;
}
if ((selectedHair >= 7 && selectedHair <= 272) && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) {
  selectedEyebrows = 277;
}
if ((selectedHair >= 7 && selectedHair <= 272) && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) {
  selectedEyebrows = 282;
}
if ((selectedHair >= 7 && selectedHair <= 272) && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) {
  selectedEyebrows = 281;
}
if ((selectedHair >= 7 && selectedHair <= 272) && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) {
  selectedEyebrows = 287;
}
if ((selectedHair >= 7 && selectedHair <= 272) && mouseX >= 68 && mouseX <= 108 && mouseY >= 467 && mouseY <= 547) {
  selectedEyebrows = 276;
}
if ((selectedHair >= 7 && selectedHair <= 272) && mouseX >= 108 && mouseX <= 148 && mouseY >= 467 && mouseY <= 547) {
  selectedEyebrows = 275;
}
if ((selectedHair >= 7 && selectedHair <= 272) && mouseX >= 148 && mouseX <= 180 && mouseY >= 467 && mouseY <= 547) {
  selectedEyebrows = 274;
}
if ((selectedHair >= 7 && selectedHair <= 272) && mouseX >= 180 && mouseX <= 231 && mouseY >= 467 && mouseY <= 547) {
  selectedEyebrows = 288;
}
if ((selectedHair >= 7 && selectedHair <= 272) && mouseX >= 231 && mouseX <= 272 && mouseY >= 467 && mouseY <= 547) {
  selectedEyebrows = 286;
}
if ((selectedHair >= 7 && selectedHair <= 272) && mouseX >= 272 && mouseX <= 314 && mouseY >= 467 && mouseY <= 547) {
  selectedEyebrows = 285;
}
if ((selectedHair >= 7 && selectedHair <= 272) && mouseX >= 314 && mouseX <= 355 && mouseY >= 467 && mouseY <= 547) {
  selectedEyebrows = 284;
}
if ((selectedHair >= 7 && selectedHair <= 272) && mouseX >= 355 && mouseX <= 400 && mouseY >= 467 && mouseY <= 547) {
  selectedEyebrows = 283;
}

//EYE COLOURS
else if (selectedEyes === 243 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 195;
} else if (selectedEyes === 243 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 237;
} else if (selectedEyes === 243 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 231;
} else if (selectedEyes === 243 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 225;
} else if (selectedEyes === 243 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 219;
} else if (selectedEyes === 243 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 213;
} else if (selectedEyes === 243 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes= 207;
} else if (selectedEyes === 243 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 201;
} else if (selectedEyes === 243 && mouseX >= 68 && mouseX <= 108 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 135;
} else if (selectedEyes === 243 && mouseX >= 108 && mouseX <= 148 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 129;
} else if (selectedEyes === 243 && mouseX >= 148 && mouseX <= 180 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes= 123;
} else if (selectedEyes === 243 && mouseX >= 180 && mouseX <= 230 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes= 117;
}else if (selectedEyes === 243 && mouseX >= 230 && mouseX <= 280 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes= 111;
}
else if (selectedEyes === 241 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 193;
} else if (selectedEyes === 241 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 235;
} else if (selectedEyes === 241 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 229;
} else if (selectedEyes === 241 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 223;
} else if (selectedEyes === 241 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 217;
} else if (selectedEyes === 241 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 211;
} else if (selectedEyes === 241 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 205;
} else if (selectedEyes === 241 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 199;
} else if (selectedEyes === 241 && mouseX >= 68 && mouseX <= 108 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 133;
} else if (selectedEyes === 241 && mouseX >= 108 && mouseX <= 148 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 127;
} else if (selectedEyes === 241 && mouseX >= 148 && mouseX <= 180 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 121;
} else if (selectedEyes === 241 && mouseX >= 180 && mouseX <= 230 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 115;
} else if (selectedEyes === 241 && mouseX >= 230 && mouseX <= 280 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 109;
}
else if (selectedEyes === 240 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 192;
} else if (selectedEyes === 240 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 234;
} else if (selectedEyes === 240 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 228;
} else if (selectedEyes === 240 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 222;
} else if (selectedEyes === 240 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 216;
} else if (selectedEyes === 240 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 210;
} else if (selectedEyes === 240 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 204;
} else if (selectedEyes === 240 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 198;
} else if (selectedEyes === 240 && mouseX >= 68 && mouseX <= 108 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 132;
} else if (selectedEyes === 240 && mouseX >= 108 && mouseX <= 148 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 126;
} else if (selectedEyes === 240 && mouseX >= 148 && mouseX <= 180 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 120;
} else if (selectedEyes === 240 && mouseX >= 180 && mouseX <= 230 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 114;
} else if (selectedEyes === 240 && mouseX >= 230 && mouseX <= 280 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 108;
}
else if (selectedEyes === 242 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 194;
} else if (selectedEyes === 242 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 236;
} else if (selectedEyes === 242 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 230;
} else if (selectedEyes === 242 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 224;
} else if (selectedEyes === 242 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 218;
} else if (selectedEyes === 242 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 212;
} else if (selectedEyes === 242 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 206;
} else if (selectedEyes === 242 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 200;
} else if (selectedEyes === 242 && mouseX >= 68 && mouseX <= 108 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 134;
} else if (selectedEyes === 242 && mouseX >= 108 && mouseX <= 148 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 128;
} else if (selectedEyes === 242 && mouseX >= 148 && mouseX <= 180 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 122;
} else if (selectedEyes === 242 && mouseX >= 180 && mouseX <= 230 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 116;
} else if (selectedEyes === 242 && mouseX >= 230 && mouseX <= 280 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 110;
}
else if (selectedEyes === 239 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 191;
} else if (selectedEyes === 239 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 233;
} else if (selectedEyes === 239 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 227;
} else if (selectedEyes === 239 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 221;
} else if (selectedEyes === 239 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 215;
} else if (selectedEyes === 239 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 209;
} else if (selectedEyes === 239 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 203;
} else if (selectedEyes === 239 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 197;
} else if (selectedEyes === 239 && mouseX >= 68 && mouseX <= 108 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 131;
} else if (selectedEyes === 239 && mouseX >= 108 && mouseX <= 148 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 125;
} else if (selectedEyes === 239 && mouseX >= 148 && mouseX <= 180 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 119;
} else if (selectedEyes === 239 && mouseX >= 180 && mouseX <= 230 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 113;
} else if (selectedEyes === 39 && mouseX >= 230 && mouseX <= 280 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 107;
}
else if (selectedEyes === 238 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 190;
} else if (selectedEyes === 238 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 232;
} else if (selectedEyes === 238 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 226;
} else if (selectedEyes === 238 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 220;
} else if (selectedEyes === 238 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 214;
} else if (selectedEyes === 238 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 208;
} else if (selectedEyes === 238 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 202;
} else if (selectedEyes === 238 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) {
  selectedEyes = 196;
} else if (selectedEyes === 238 && mouseX >= 68 && mouseX <= 108 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 130;
} else if (selectedEyes === 238 && mouseX >= 108 && mouseX <= 148 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 124;
} else if (selectedEyes === 238 && mouseX >= 148 && mouseX <= 180 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 118;
} else if (selectedEyes === 238 && mouseX >= 180 && mouseX <= 230 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 112;
} else if (selectedEyes === 238 && mouseX >= 230 && mouseX <= 280 && mouseY >= 467 && mouseY <= 547) {
  selectedEyes = 106;
}


//  lip color
 else if (selectedMouth === 247 &&  mouseX >= 50 && mouseX <= 90 && mouseY >= 427 && mouseY <= 467) {
  selectedMouth = 105;
} else if (selectedMouth === 247 && mouseX >= 90 && mouseX <= 130 && mouseY >= 427 && mouseY <= 467) {
  selectedMouth = 102;
} else if (selectedMouth === 247 && mouseX >= 130 && mouseX <= 170 && mouseY >= 427 && mouseY <= 467) {
  selectedMouth = 99;
} else if (selectedMouth === 247 && mouseX >= 170 && mouseX <= 210 && mouseY >= 427 && mouseY <= 467) {
  selectedMouth = 96;
} else if (selectedMouth === 247 && mouseX >= 210 && mouseX <= 250 && mouseY >= 427 && mouseY <= 467) {
  selectedMouth = 93;
} else if (selectedMouth === 247 && mouseX >= 250 && mouseX <= 290 && mouseY >= 427 && mouseY <= 467) {
  selectedMouth = 90;
}
 else if (selectedMouth === 246 && mouseX >= 50 && mouseX <= 90 && mouseY >= 427 && mouseY <= 467) {
  selectedMouth = 104;
} else if (selectedMouth === 246 && mouseX >= 90 && mouseX <= 130 && mouseY >= 427 && mouseY <= 467) {
  selectedMouth = 101;
} else if (selectedMouth === 246 && mouseX >= 130 && mouseX <= 170 && mouseY >= 427 && mouseY <= 467) {
  selectedMouth = 98;
} else if (selectedMouth === 246 && mouseX >= 170 && mouseX <= 210 && mouseY >= 427 && mouseY <= 467) {
  selectedMouth = 95;
} else if (selectedMouth === 246 && mouseX >= 210 && mouseX <= 250 && mouseY >= 427 && mouseY <= 467) {
  selectedMouth = 92;
} else if (selectedMouth === 246 && mouseX >= 250 && mouseX <= 290 && mouseY >= 427 && mouseY <= 467) {
  selectedMouth = 89;
}
 else if (selectedMouth === 245 && mouseX >= 50 && mouseX <= 90 && mouseY >= 427 && mouseY <= 467) {
  selectedMouth = 103;
} else if (selectedMouth === 245 && mouseX >= 90 && mouseX <= 130 && mouseY >= 427 && mouseY <= 467) {
  selectedMouth = 100;
} else if (selectedMouth === 245 && mouseX >= 130 && mouseX <= 170 && mouseY >= 427 && mouseY <= 467) {
  selectedMouth = 97;
} else if (selectedMouth === 245 && mouseX >= 170 && mouseX <= 210 && mouseY >= 427 && mouseY <= 467) {
  selectedMouth = 94;
} else if (selectedMouth === 245 && mouseX >= 210 && mouseX <= 250 && mouseY >= 427 && mouseY <= 467) {
  selectedMouth = 91;
} else if (selectedMouth === 245 && mouseX >= 250 && mouseX <= 290 && mouseY >= 427 && mouseY <= 467) {
  selectedMouth = 88;
}
}