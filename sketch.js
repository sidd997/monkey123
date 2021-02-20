var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananagroup, obstaclegroup
var score
var ground
var survivaltime

function preload(){
  
  
monkey_running =     loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  
  createCanvas (600,200);
  
  monkey = createSprite(120,160,10,10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,194,999999999999,10);
  
  bananagroup = new Group();
  obstaclegroup = new Group();
  
  survivaltime = 0;
  
  monkey.debug = false;
  monkey.setCollider("circle", 0 , 0 , 260)
  
  
}


function draw() {
  
  background ("white");
  
  spawnbanana();
  spawnobstacles();
  
  monkey.collide(obstaclegroup);
  
  if(bananagroup.isTouching(monkey)){
     
     survivaltime = survivaltime + 1;
     bananagroup [0].destroy();
    
     }
  
  monkey.collide(ground);
  
  ground.velocityX = -3;
  
  if (ground.x < 0){
  
   ground.x = ground.width/2;
  
}
  
   if(keyDown("space")&& monkey.y >= 150) {
     
        monkey.velocityY = -16;    
     
}
  
   monkey.velocityY = monkey.velocityY + 0.8  
  
  
  drawSprites();
  
  textSize(20);
  text("survivaltime: "+ survivaltime, 400,30);
  
}

function spawnbanana () {
  
  if(frameCount %80 === 0){
     
  banana = createSprite(240,130,10,10);
  banana.visible = true;  
  banana.y = Math.round(random(60,120))  ;
  banana.addImage(bananaImage) ; 
  banana.scale = 0.09;  
  banana.lifeTime = 50;
  banana.velocityX = -3
  
  bananagroup.add(banana);
     
}
  
}

function spawnobstacles () {
  
if(frameCount %300 ===0){
   
  obstacle = createSprite(300,170,10,10); 
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.09;
  obstacle.velocityX = -3;  
  
  obstaclegroup.add(obstacle);
  
  obstaclegroup.lifeTime = 150;
   
}
  
}





