const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,bird
var box1,box3,box4,box2,box5
var pig1,log1,log2,log3,log4,pig2

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig (810,350,50,50)
    pig2 = new Pig (810,220,50,50)
    log1 = new Log (810,260,300,20,PI)
    log2 = new Log (810,180,300,20,PI)
    log3 = new Log (870,120,20,150,-PI/7)
    log4 = new Log (760,120,20,150,PI/7)
    bird = new Bird (200,100,50,50)
    


}

function draw(){
    background("yellow");

    

    Engine.update(engine);

    bird.y = mouseY
    bird.x = mouseX
    
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    box5.display();
    bird.display();

   

}