function setup() {
  createCanvas(800,400);
  ball=createSprite(400, 200, 50, 50);
  blower=createSprite(400, 200, 50, 50);
  blowerMouth=createSprite(400, 200, 50, 50);
  button=createButton("Click to Blow");
  button.position(width/2,height-100).;
  button.class("blowButton");
  button.mousePressed(blow);


}

function draw() {
  background(255,255,255);  
  drawSprites();
  show();

}
function blow(){
  Matter.body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});
}