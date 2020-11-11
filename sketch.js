var movingRectangle,fixItRectangle;
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
  createCanvas(1200,800);
  //createSprite(400, 200, 50, 50);
   movingRectangle=createSprite(400,800,80,30);
  fixItRectangle=createSprite(400,100,50,80);
  movingRectangle.shapeColor="pink";
  fixItRectangle.shapeColor="red";
  

  gameObject1=createSprite(100,100,50,50);
  gameObject2=createSprite(200,100,50,50);
  gameObject3=createSprite(300,100,50,50);
  gameObject4=createSprite(400,100,50,50);

  gameObject1.shapeColor="orange";
gameObject2.shapeColor="pink";
gameObject3.shapeColor="red";
gameObject4.shapeColor="green";
}

function draw() {
  background(255,255,255);
  
  movingRectangle.y =mouseY;
  movingRectangle.x =mouseX;
if(isTouching(movingRectangle,gameObject2)){
  movingRectangle.shapeColor="black";
  gameObject2.shapeColor="black";
}
  else{
    movingRectangle.shapeColor="pink";
    gameObject2.shapeColor="pink";
  }
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2 && 
    object2.x-object1.x<object2.width/2+object1.width/2 &&
    object1.y-object2.y<object1.height/2+object2.height/2 &&
    object2.y-object1.y<object2.height/2+object1.height/2){
    return true;
    }else{
     return false;
     }
     
}