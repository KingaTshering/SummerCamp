function setup() {
  createCanvas(400, 400);
  colour = 0
}

function draw() {
  background(220);
  
  
  fill(255,0,0)
  rect(0,0,100,100)
  fill(0,255,0)
  rect(100,0,100,100)
  fill(0,0,255)
  rect(200,0,100,100)
  fill(255,255,0)
  rect(300,0,100,100)
  
  if(mouseY <= 100){
    if(mouseX < 100){
      colour = 1
    }
    else if(mouseX < 200){
      colour = 2
    }
    else if(mouseX < 300){
      colour = 3
    }
    else if(mouseX < 400){
      colour = 4
    }
  }
    if(colour == 1){
      fill(255,0,0)
    }
    if(colour == 2){
      fill(0,255,0)
    }
    if(colour == 3){
      fill(0,0,255)
    }
    if(colour == 4){
      fill(255,255,0)
    }
  
  circle(mouseX, mouseY, 50)
}