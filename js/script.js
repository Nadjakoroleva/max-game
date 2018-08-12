let pic;

function setup() {
  createCanvas(500, 500);
}

function draw() {}

function preload() {
  // preload() runs once
  pic = loadImage("hero.png");
}

function draw() {
  fill("#777777");
  ellipse(100, 100, 210, 210);
  fill("#D60F0F");
  ellipse(100, 100, 200, 200);
  fill("#000000");
  textSize(30);
  text("Play for free", 15, 110);
  if (mouseX > 0 && mouseX < 200) {
    if (mouseY > 0 && mouseY < 200) {
      fill("#FF0000");
      ellipse(100, 100, 200, 200);
      fill("#000000");
      textSize(30);
      text("Play for free", 15, 110);
    } else {
      fill("#D60F0F");
      ellipse(100, 100, 200, 200);
      fill("#000000");
      textSize(30);
      text("Play for free", 15, 110);
    }
  }
}
function mouseClicked() {
  if (mouseX > 0 && mouseX < 200) {
    if (mouseY > 0 && mouseY < 200) {
      image(pic, 50, 50);
      fill("#000000");
      textSize(39);
      text("NO MONEY - NO FUNNY!!!", 0, 400);
    }
  }
}
