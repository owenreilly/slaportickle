let stickFigure;

function setup() {
  createCanvas(400, 400);
  stickFigure = new StickFigure(width / 2, height / 2);
}

function draw() {
  background(220);
  stickFigure.display();
  fill(50, 200, 50);
  
  rect(width - 40, 0, 40, height);
  fill(200, 50, 50); 
  rect(0, 0, 40, height);
  fill(0);
  
  textAlign(CENTER, CENTER);
  textSize(16);  
  text("Tickle", width - 20, height / 2);
  text("Slap", 20, height / 2);
  
}

function mouseClicked() {

  if (mouseX > width - 40) {
    stickFigure.tickle();
  } else if (mouseX < 40) {
    stickFigure.slap();
  }
}

class StickFigure {

  constructor(x, y) {
  
    this.x = x;
    this.y = y;
    
    this.headSize = 80;
    this.isWincing = false;
    this.isLaughing = false;   
    
  }

  display() {

    stroke(0);
    
    noFill();
    ellipse(this.x, this.y - 40, 80, 80);   
    line(this.x, this.y, this.x, this.y + 60);
    line(this.x, this.y + 15, this.x - 20, this.y + 15);
    line(this.x, this.y + 15, this.x + 20, this.y + 15);
    line(this.x, this.y + 60, this.x - 15, this.y + 90);
    line(this.x, this.y + 60, this.x + 15, this.y + 90);

    if (this.isWincing) {
 line(this.x - 7, this.y - 44, this.x + 7, this.y - 36);  
  line(this.x - 3, this.y - 36, this.x + 3, this.y - 44);
   
  line(this.x - 8, this.y - 50, this.x - 12, this.y - 46);
  line(this.x + 8, this.y - 50, this.x + 12, this.y - 46);

  // Big open mouth 
  ellipse(this.x, this.y - 25, 12, 12);

    } else if (this.isLaughing) {

  line(this.x - 10, this.y - 48, this.x - 15, this.y - 44);
  line(this.x + 10, this.y - 48, this.x + 15, this.y - 44);

  ellipse(this.x - 5, this.y - 35, 5, 10); 
  ellipse(this.x + 5, this.y - 35, 5, 10); 
  
  arc(this.x, this.y - 25, 15, 10, 0, PI);

    } else {

ellipse(this.x - 5, this.y - 40, 10, 10); 
ellipse(this.x + 5, this.y - 40, 10, 10);
line(this.x - 5, this.y - 30, this.x + 5,  this.y - 30);;  

    }
  
  }  

  slap() {
    this.isWincing = true;
    setTimeout(() => {
      this.isWincing = false;
    }, 1000);

  }

  tickle() {
    this.isLaughing = true;
    setTimeout(() => {
      this.isLaughing = false; 
    }, 1000);

  }  

}
