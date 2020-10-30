var loop1
var loop2
var loop3
var loop4
function setup() {
  createCanvas(800,400);
loop1= createSprite(300,200 ,50,50);
loop2= createSprite(400, 200, 50, 50);
loop3= createSprite(100,200,50,50);
loop4= createSprite(200,200,50,50);
  loop1.shapeColor=("lime")
}

function draw() {
  background(0,0,0);
  loop1.y=mouseY; 
  loop1.x=mouseX ;
if(boing(loop1,loop4)){
  loop1.shapeColor= ("cyan");
  loop4.shapeColor=("purple");
}
  drawSprites();
}









