const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var paper, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/earth.PNG");
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height-10,1200,20);


    log1 = new Ground(1150,280, 40,400);
    log2 = new Ground(1010,463, 250,35);
    log3 = new Ground(880,360, 40,240);

    paper = new Paper(100,100);

    slingShot = new SlingShot(paper.body,{x:200,y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
   
    ground.display();

    log1.display();
    log2.display();
    log3.display();


    paper.display();
    slingShot.display();    
}
function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}