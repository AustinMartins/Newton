
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var  bobobject1, bobobject2, bobobject3, bobobject4, bobobject5;
var roof1;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobobject1 = new bob(500,600,170);
	bobobject2 = new bob(400,600,170);
	bobobject3 = new bob(300,600,170);
	bobobject4 = new bob(200,600,170);
	bobobject5 = new bob(100,600,170);

	roof1 = new roof(400,100,600,40);

	rope1 = new rope(roof1.body,bobobject1.body,4,0);
	rope2 = new rope(roof1.body,bobobject2.body,5,10);
	rope3 = new rope(roof1.body,bobobject3.body,6,20);
	rope4 = new rope(roof1.body,bobobject4.body,7,30);
	rope5 = new rope(roof1.body,bobobject5.body,8,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(bobobject1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    bobobject5.fly();
}

