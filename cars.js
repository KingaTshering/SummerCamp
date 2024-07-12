function setup() {
  createCanvas(400, 400);
  carGreen = 0;
  carRed = 400;
}

function draw() {
  //will make all the background black
  background(0);
  noStroke();
  //colour green for the ends
  fill(120, 222, 123);
  //the end green rectangle
  rect(0, 0, 60, 400);
  rect(340, 0, 60, 400);
  
  //colour white for the stripe near the green rect
  fill(255);
  //the white stripe near the green rect
  rect(65, 0, 5, 400);
  rect(330, 0, 5, 400);
  
  //colour yellow
  fill(253, 240, 101);
  // the yellow line in the middle
  rect(width/2, 0, 5, height);
  //for red car
  circle(250, carRed-100, 20);
  circle(300, carRed-100, 20);
  //for green car
  circle(110, carGreen+100, 20);
  circle(160, carGreen+100, 20);
  
  //green car
  fill(0, 255, 0);
  rect(90, carGreen, 90, 100);
  
  //red car
  fill(255, 0, 0);
  rect(230, carRed-100, 90, 100);
  
  fill(202, 215, 224)
  rect(240, carRed-70, 70, 30);
  rect(240, carRed-20, 70, 10);
  
  rect(100, carGreen+45, 70, 30);
  rect(100, carGreen+15, 70, 10);
  
  carGreen += 1;
  carRed -= 1;
  
  
}