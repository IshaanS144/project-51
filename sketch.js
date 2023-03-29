  
var towerImg, tower;
var coin, coinImg, coinGroup;
var ghost, ghostImg;
var gameState = "play"
 var score = 0

function preload(){
  towerImg = loadImage("tower.png");
  coinImg = loadImage("gold coin.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
 
 coinGroup = new Group()
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
}


function draw() {
  background(255);
 if(tower.y > 400){
      tower.y = 300
    } 
  
  if (gameState === "play") {
    
    if(keyDown("left")){
        ghost.x = ghost.x - 3;

      
    }
    if(keyDown("right")){
  
          ghost.x = ghost.x + 3;
  
    }
    if(keyDown("space")){
  
         ghost.velocityY = -10;

    
      
    }
  
  ghost.velocityY = ghost.velocityY + 0.8;
  
   
      spawnCoin();

     
    
  
  drawSprites();
  fill ("red");
      textSize(25)
      text("score" + score,400,80);
      if(coinGroup.isTouching(ghost)){
        score = score + 1
      }
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnCoin(){

  if (frameCount % 60 === 0) {
    var coin = createSprite(200, 200);
 
    coin.x = Math.round(random(100,500))
    
    coin.addImage(coinImg);
    coin.scale = 0.07;
    coin.velocityY = 3;
   
     
ghost.depth = coin.depth;
    ghost.depth +=1;
    
    

 coin.lifetime = 800;

     coinGroup.add(coin);
  ;
  }}


