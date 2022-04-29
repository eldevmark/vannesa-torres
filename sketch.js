var ball
function setup() {
  createCanvas(1000,1000);
ball = createSprite (500,500)

}

function draw()
{
  background("blue");
if (keyDown(UP_ARROW)){
ball.y = ball.y -5
}
if (keyDown(DOWN_ARROW)){
  ball.y = ball.y +5
}
drawSprites();

}




