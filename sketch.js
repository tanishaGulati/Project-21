
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;


	var ball_options={
		isStatic : false,
		restitution : 0.8,
		friction : 0,
		density : 1.2
	}

	ball = Bodies.circle (200,200,10,ball_options)
    World.add (world,ball)
	//Create the Bodies Here.
    ground = new Ground(600,680,1200,20)
    
	leftSide = new Ground(600,630,20,50)
	rightSide = new Ground (660,630,20,50)

	bottomSide = new Ground (630,660,80,20) 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  Engine.update (engine)
  ellipse(ball.position.x,ball.position.y,10,10)
  ground.display()
  leftSide.display()
  rightSide.display()
  bottomSide.display()
  drawSprites();

 
}



function keyReleased (){
	if (keyCode == UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:1.5,y:-2.5})
	}
}