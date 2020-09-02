var movingRect, steadyRect

function setup() {
  createCanvas(800,400);
  steadyRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(30,100,10,10);
}

function draw() {
  background('lightblue');  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  movingRect.debug = true;
  steadyRect.debug = true;

  if(movingRect.width/2 + steadyRect.width/2 > movingRect.x - steadyRect.x &&
    (movingRect.width/2 + steadyRect.width/2 > steadyRect.x - movingRect.x) &&
    (movingRect.height/2 + steadyRect.height/2 > movingRect.y - steadyRect.y) &&
    (movingRect.height/2 + steadyRect.height/2 > steadyRect.y - movingRect.y))
  
  {
    steadyRect.shapeColor = 'red';
  }

  else {
    movingRect.shapeColor = 'white';
    steadyRect.shapeColor = 'white';
  }
  
  
  
  drawSprites();

}