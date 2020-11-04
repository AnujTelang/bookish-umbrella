var wall ,thickness ;
var bullet, speed,weight;
function setup() {
  
  createCanvas(800,800);
  speed=random(223,321);
  thickness=random(22,83);
  weight=random(30,52)
  bullet =createSprite(100,300,60,60);

  bullet.velocityX=speed;
 

  wall =createSprite(600,300,60,height/2);


}


function draw() {
  background("black") 
  drawSprites();
 
  hasCollided (bullet,wall);
  if(hasCollided(bullet,wall))
  {
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
if(damage>10){
  wall.shapeColor=color(255,0,0);
}
if(damage<10){
  wall.shapeColor=color(0,255,0);
  }
}
}
function hasCollided (bullet,wall){
bulletRightEdge= bullet.x + bullet.width;
 wallLeftEdge= wall.x;
if(bulletRightEdge===wallLeftEdge)
{
return true ;
}
return false ;
}

