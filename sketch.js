function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(0,0,0);  
  incoming();
  drawSprites();
}

function incoming (){

  if(frameCount % random(100,200) == 0){
  var hurdle = createSprite(displayWidth,displayHeight/2 + displayHeight / 4);
  hurdle.setVelocity(1,0);
  hurdle.lifetime(200);
  }

}