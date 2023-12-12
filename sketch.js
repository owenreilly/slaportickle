let stickFigure;

function setup() {
  createCanvas(400, 400);
  stickFigure = new StickFigure(width / 2, height / 2);
}

function draw() {
  background(220);

  stickFigure.display();

  // Display bars for slap and tickle
  fill(50, 200, 50);
  rect(width - 40, 0, 40, height); // Tickle bar
  fill(200, 50, 50);
  rect(0, 0, 40, height); // Slap bar
}

function mousePressed() {
  if (mouseX > width - 40) {
    // Tickle
    stickFigure.tickle();
  } else if (mouseX < 40) {
    // Slap
    stickFigure.slap();
  }
}

class StickFigure {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.headSize = 40; // Initial head size
    this.isWincing = false;
    this.isLaughing = false;
  }

  display() {
    // Draw stick figure
    fill(0);
    ellipse(this.x, this.y - this.headSize / 2, this.headSize, this.headSize); // Head

    // Draw facial expression based on state
    if (this.isWincing) {
      ellipse(this.x - 8, this.y - this.headSize / 2 - 5, 5, 5); // Left eye
      ellipse(this.x + 8, this.y - this.headSize / 2 - 5, 5, 5); // Right eye
      noFill();
      arc(this.x, this.y - this.headSize / 2 + 5, 20, 10, 0, PI, CHORD); // Mouth (frowning)
    } else if (this.isLaughing) {
      ellipse(this.x - 8, this.y - this.headSize / 2 - 5, 5, 5); // Left eye
      ellipse(this.x + 8, this.y - this.headSize / 2 - 5, 5, 5); // Right eye
      noFill();
      arc(this.x, this.y - this.headSize / 2 + 5, 20, 10, 0, PI, CHORD); // Mouth (smiling)
    } else {
      ellipse(this.x - 8, this.y - this.headSize / 2 - 5, 5, 5); // Left eye
      ellipse(this.x + 8, this.y - this.headSize / 2 - 5, 5, 5); // Right eye
      noFill();
      line(this.x - 5, this.y - this.headSize / 2 + 5, this.x + 5, this.y - this.headSize / 2 + 5); // Mouth (neutral)
    }
  }

  slap() {
    // Slap action
    this.isWincing = true;
    this.isLaughing = false;
    setTimeout(() => {
      this.isWincing = false;
    }, 1000); // Reset wincing state after 1 second
  }

  tickle() {
    // Tickle action
    this.isWincing = false;
    this.isLaughing = true;
    setTimeout(() => {
      this.isLaughing = false;
    }, 1000); // Reset laughing state after 1 second
  }
}




// slapSound = loadSound('slap.mp3');
// tickleSound = loadSound('tickle.mp3');

// let stickFigure;
// let slapSound, tickleSound;

// function preload() {
//   slapSound = loadSound('slap.mp3'); // Replace 'slap.mp3' with your slap sound file
//   tickleSound = loadSound('tickle.mp3'); // Replace 'tickle.mp3' with your tickle sound file
// }

// function setup() {
//   createCanvas(400, 400);
//   stickFigure = new StickFigure(width / 2, height / 2);
// }

// function draw() {
//   background(220);

//   stickFigure.display();

//   // Display bars for slap and tickle
//   fill(50, 200, 50);
//   rect(width - 40, 0, 40, height); // Tickle bar
//   fill(200, 50, 50);
//   rect(0, 0, 40, height); // Slap bar
// }

// function mousePressed() {
//   if (mouseX > width - 40) {
//     // Tickle
//     stickFigure.tickle();
//   } else if (mouseX < 40) {
//     // Slap
//     stickFigure.slap();
//   }
// }

// class StickFigure {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   display() {
//     // Draw stick figure
//     fill(0);
//     ellipse(this.x, this.y - 30, 20, 20); // Head
//     line(this.x, this.y, this.x, this.y + 50); // Body
//     line(this.x, this.y + 20, this.x - 20, this.y); // Left arm
//     line(this.x, this.y + 20, this.x + 20, this.y); // Right arm
//     line(this.x, this.y + 50, this.x - 20, this.y + 80); // Left leg
//     line(this.x, this.y + 50, this.x + 20, this.y + 80); // Right leg
//   }

//   slap() {
//     // Slap action
//     slapSound.play();
//   }

//   tickle() {
//     // Tickle action
//     tickleSound.play();
//   }
// }
