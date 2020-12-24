const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies

var engine,world,ball,ground,box1,box2,box3,box4,box5,pig5,pig10,log10,log20,log30,log40
var bird


function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world
  ground=new Ground(600,380,1200,20)
  bird=new Bird(100,200)
  
  box1=new Box(700,320,70,70)
  box2=new Box(920,320,70,70)
  box3=new Box(700,240,70,70)
  box4=new Box(902,240,70,70)
  box5=new Box(810,160,70,70)
  pig5=new Pig(810,350)
  pig10=new Pig(810,220)
  log10=new Log(810,260,300,PI/2)
  log20=new Log(810,180,300,PI/2)
  log30=new Log(760,120,150,PI/7)
  log40=new Log(870,120,150,-PI/7)
}

function draw() {

  background(0);  
  Engine.update(engine);
  

 
  box1.display();
 box2.display();
  ground.display();
  pig5.display();
  pig10.display();
  log10.display();
  log20.display();
  box3.display();
  box4.display();
  box5.display();
  log30.display();
  log40.display();
  bird.display();
}