var monkey , monkey_running;
var ground;
var Banana,BananaImage;
var obstacle,obstacleImage;
var survivalTime;
var score;
function preload(){
  monkey_running=
loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
 
 BananaImage=loadImage("banana.png"); 
 obstacleImage=loadImage("obstacle.png"); 
  

 
}



function setup() {
 createCanvas(600, 600);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale=0.1;
 ground=createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width /2;
console.log(ground.x);
obstaclesGroup=new Group();
foodGroup=new Group();

var survivalTime=0;
var score=0;



}


function draw(){
background("white");
  
 monkey.collide(ground) ;
  

  
  if(ground.x < 0){
   ground.x=ground.width/2; 
  }
  if(keyDown("space")){
    monkey.velocityY=-2;
  }
   monkey.velocityY = monkey.velocityY + 0.5
 

  
 stroke("black"); 
 textSize(20);
 fill("black"); 
 survivalTime=Math.ceil(frameCount/frameRate()); 
 text("survival Time:"+survivalTime,100,50)  
 text(survivalTime=survivalTime+1);
  
 if(monkey.isTouching(obstaclesGroup)){
  monkey.velocityX=0;
 ground.velocityX=0;
  obstaclesGroup.setVelocityXEach(0);
  foodGroup.setVelocityXEach(0);
  ground.x=0; 
 } 
  
  
  
  obstacles();
  food();
  
  drawSprites();
}

function food(){
 if(World.frameCount%300===0) {
 Banana=createSprite(600,315,20,20); 
 Banana.addImage("Banana",BananaImage); 
 Banana.y=Math.round(random(100,300)); 
 Banana.velocityX=-8;  
 Banana.setLifetime=100; 
 Banana.scale=0.1;
   foodGroup.add(Banana);
 }
}
function obstacles(){
 if(World.frameCount%300===0) {
 obstacle=createSprite(400,327,20,20); 
 obstacle.addImage("obstacle",obstacleImage); 
  obstacle.velocityX=-8;  
obstacle.setLifetime=100; 
 obstacle.scale=0.1;
   obstacle.Lifetime=100; 
   obstaclesGroup.add(obstacle);
 }
}





