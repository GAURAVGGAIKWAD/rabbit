
var garden,rabbit;
var gardenImg,rabbitImg;
var apple;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;


rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
 if(keyDown("RIGHT_ARROW")){
  rabbit.x=rabbit.x+6;
 }
 if(keyDown("LEFT_ARROW")){
  rabbit.x=rabbit.x-6;
 }
  edges= createEdgeSprites();
  rabbit.collide(edges);
  createapple();
  drawSprites();
}

function createapple(){

 if(frameCount % 60 === 0){
 apple = createSprite(200,10,40,10);
 apple.x = Math.round(random(10,300));
 apple.scale = 0.1;
 apple.addImage(appleImage);
 apple.velocityY = 3; 
 }
}
