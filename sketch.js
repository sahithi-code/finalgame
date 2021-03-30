var player ;
var skull
var shoot
var bullet
var kill = 0
var gameState = "level1"
function preload (){
plright = loadImage("player.png")
plleft = loadImage("player2.png")
pl = loadImage("player3.png")

en2 = loadImage("enemy1.png")
en3 = loadImage("enemyies1.png")

skul = loadImage("skulll.png")
bulet = loadImage("bulletright1.png")
bulet1 = loadImage("bulletleft.png")
shot = loadImage("fire.png")

bck = loadImage("bckgrnd.jpg")
falen = loadImage("fallen.png")


}
function setup() {
  createCanvas(1000,700);
  player = createSprite(500,600,50,50)
  player.addImage(pl)
  player.scale=0.4
  player.debug=true;

  shoot = createSprite(800,600,30,30)
  shoot.addImage(shot)
  shoot.scale=0.19



 enmyGroup = new Group();
  bulletGroup = new Group();
}

function draw() {
  background(bck);  
  drawSprites();
  //bullet = createSprite(500,600,30,30)
  //bullet.debug= true;
  //bullet.x =player.x
  //bullet.y = player.y
//bullet.visible=false;
//enmyGroup.setDepthEach(bullet.depth)
//if (mousePressedOver(shoot)){}

//bullets();
fill("white")
textSize(30)
text ("Kills:"+kill,800,100)

  if (keyDown("up")){
player.y = player.y-10
bullets();
  }
  if (keyDown("down")){
    player.y = player.y+10
    bullets();
  }
  if(keyDown("right")){
  //  player.x= player.x+10;
  player.addImage(plright)
  player.scale =1
  player.setCollider("rectangle",-50,0,150,150)
  bullets();
  }

  if(keyDown("left")){
   // player.x = player.x-10
    player.addImage(plleft)
    player.scale =1
    player.setCollider("rectangle",0,0,150,150)
    bullets();
  }
  
if (gameState === "level1")  {

if(frameCount %400===0){
    enemy= createSprite(950,random(200,700),30,30)
    enemy.scale= 0.25
    enmyGroup.add(enemy);
    var monster= Math.round(random(1,2))
    switch(monster){
      case 1: enemy.addImage(en2)
              enemy.velocityX=-5                 
      break;
      case 2: enemy.addImage(en3)
              enemy.x= 50
              enemy.velocityX=5
              break;
     
        default:break;
         
    }

  }
if(enmyGroup.collide(bulletGroup)){
  
  enmyGroup.destroyEach();
  // enmyGroup.setVisibleEach(false)
  bulletGroup.destroyEach();
  
  skull = createSprite(450,350,50,50)
  skull.addImage(skul)
  skull.scale=0.19
  skull.tint ="rgba(255,0)"
  
  console.log("sahithi")
  // enmyGroup.setVelocityEach(0)
  // bulletGroup.setVelocityEach(0)
  kill = kill + 1;
 
}
if (player.collide(enmyGroup)){
  gameState= "end"}
}//level1 completed








if (kill === 5){
fill("white")
textSize(30);
text("LEVEL2 STARTS",350,350)
gameState = "level2"
}
if (gameState==="level2"){

if(enmyGroup.collide(bulletGroup)){
   enmyGroup.destroyEach();
   kill = kill+ 1;
   // enmyGroup.setVisibleEach(false)
   bulletGroup.destroyEach();
   console.log("sahithi")
   // enmyGroup.setVelocityEach(0)
   // bulletGroup.setVelocityEach(0)
   
   
}

if(frameCount %250===0){
    enemy= createSprite(950,random(200,700),30,30)
    enemy.scale= 0.25
    enmyGroup.add(enemy);
    var monster= Math.round(random(1,2))
    switch(monster){
      case 1: enemy.addImage(en2)
              enemy.velocityX=-7      
      break;
      case 2: enemy.addImage(en3)
              enemy.x= 50
              enemy.velocityX=7
      break;
     
    default:break;
         
    }
}  

if (enmyGroup.collide(player)){
  gameState= "end"}

  
}//level 2 completed



 if (kill === 20){
  fill("white")
  textSize(30);
  text("LEVEL3 STARTS",350,350)
  gameState = "level3"
  }
  if (gameState==="level3"){


  
    if(frameCount %100===0){
      enemy= createSprite(950,random(200,700),30,30)
      enemy.scale= 0.25
      enmyGroup.add(enemy);
      var monster= Math.round(random(1,2))
      switch(monster){
        case 1: enemy.addImage(en2)
                enemy.velocityX=-9      
        break;
        case 2: enemy.addImage(en3)
                enemy.x= 50
                enemy.velocityX=9
                break;
       
          default:break;
           
      }
  }  
  
  if (enmyGroup.collide(player)){
 gameState= "end"}
  
  if(enmyGroup.collide(bulletGroup)){
    enmyGroup.destroyEach();
    // enmyGroup.setVisibleEach(false)
     bulletGroup.destroyEach();
        console.log("sahithi")
   // enmyGroup.setVelocityEach(0)
   // bulletGroup.setVelocityEach(0)
   kill= kill+1
   
   }
  
  }//level 3 completed

if (gameState==="end"){
fill("black")
stroke("black")
strokeWeight(5)
textSize(30)
text("YOU LOSE ",300,350)
text("Your Kills :"+kill,300,390)
text("Press R to restart ",300,430)
enmyGroup.destroyEach();
bulletGroup.destroyEach();
player.velocityX=0
player.velocityY=0
player.visible=false;


}

if (keyDown("r"))
{
gameState= "level1"
kill= 0
player.visible=true;

  
  


}

}  



function bullets(){
  
bullet = createSprite(500,600,30,30)
   bullet.debug= true;
  //bullet.x =player.x
  //bullet.y = player.y
bullet.visible=false;
bulletGroup.add(bullet)


if (keyDown("up")){
  
  bullet.y = player.y
    }

if (keyDown("down")){
    
    bullet.y = player.y
    }
if(keyDown ("right")){
    //  player.x= player.x+10;
    
  bullet.addImage(bulet)
  bullet.y = player.y
  //bullet.velocityX=10
  bullet.scale=0.19
  bullet.velocityX=2
  bullet.visible=true
    }

if(keyDown("left")){
      // player.x = player.x-10
     
    bullet.visible=true;
    bullet.addImage(bulet1)
   bullet.velocityX=-2;
   bullet.scale=0.19
   bullet.y = player.y
     }
}




