function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(600, 200, 50, 50);
  
}

function draw() {
  background(0,0,0);  
  movingrect.x=mouseX
  movingrect.y=mouseY
 if(istouching(movingrect,fixedrect)){
  movingrect.shapeColor="red"
  fixedrect.shapeColor="red"
 }

 else{
   movingrect.shapeColor="blue"
 fixedrect.shapeColor="blue"
 }
  drawSprites();
}
