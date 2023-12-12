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

function mouseClicked() {
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
    this.headSize = 60; // Larger head size
    this.isWincing = false;
    this.isLaughing = false;
  }

  display() {
    // Draw stick figure
    background(220); // Draw background to clear canvas
    stroke(0); // Set stroke color

    // Head
    noFill(); // Remove fill from head
    ellipse(this.x, this.y - this.headSize / 2, this.headSize, this.headSize);

    // Torso
    line(this.x, this.y, this.x, this.y + 80);

    // Left arm
    line(this.x, this.y + 20, this.x - 30, this.y + 20);

    // Right arm
    line(this.x, this.y + 20, this.x + 30, this.y + 20);

    // Left leg
    line(this.x, this.y + 80, this.x - 20, this.y + 120);

    // Right leg
    line(this.x, this.y + 80, this.x + 20, this.y + 120);

    // Draw facial expression based on state
    if (this.isWincing) {
      ellipse(this.x - 10, this.y - this.headSize / 2 - 10, 10, 10); // Left eye
      ellipse(this.x + 10, this.y - this.headSize / 2 - 10, 10, 10); // Right eye
      line(this.x - 5, this.y - this.headSize / 2 + 10, this.x + 5, this.y - this.headSize / 2 + 10); // Mouth (frowning)
    } else if (this.isLaughing) {
      ellipse(this.x - 10, this.y - this.headSize / 2 - 10, 10, 10); // Left eye
      ellipse(this.x + 10, this.y - this.headSize / 2 - 10, 10, 10); // Right eye
      line(this.x - 5, this.y - this.headSize / 2 + 10, this.x + 5, this.y - this.headSize / 2 + 10); // Mouth (smiling)
    } else {
      ellipse(this.x - 10, this.y - this.headSize / 2 - 10, 10, 10); // Left eye
      ellipse(this.x + 10, this.y - this.headSize / 2 - 10, 10, 10); // Right eye
      line(this.x - 5, this.y - this.headSize / 2 + 10, this.x + 5, this.y - this.headSize / 2 + 10); // Mouth (neutral)
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
