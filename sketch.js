
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 650, width, 10 );
	
	box1 = new Dustbin(650,635,100,20 );
	box2 = new Box(700,635,20,100 );
	box3 = new Box(600,635,20,100 );

	paper = new Paper1(25,635,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();

  box1.display();
  box2.display();
  box3.display();

  ground.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15});
	
	}
}