var barco, barco_running;
var ground, groundImage;
function preload(){
  groundImage=loadImage("sea.png");
  barco_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 
}

function setup(){
  createCanvas(400,400);
  ground = createSprite(200,200,400,400);
 ground.addImage("ground",groundImage);
 ground.scale = 0.5;

  barco = createSprite(200,200,50,50);
 barco.addAnimation("runnig",barco_running);
 barco.scale = 0.25;
 }

function draw() {
  background("blue");
  drawSprites();
}