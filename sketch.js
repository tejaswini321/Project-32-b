const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine,world;
var ground,stand;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16;
var polygonSprite,polygonBody;
var slingShot;
var score = 0;
var backgroundImg;
function preload(){
     polygonIMG = loadImage("polygon.png");
     backgroundImg = loadImage("bg.png");
}
function setup(){
    createCanvas(800,400);
   engine = Engine.create();
   world = engine.world;

   polygonSprite=createSprite(100,275,30,30);
   polygonSprite.addImage(polygonIMG)
   polygonSprite.scale=0.1;

   polygonBody = Bodies.circle(150,275,30);
   polygonBody.speed = 3;
   World.add(world,polygonBody);
   
   fill("brown");
   //7 blocks-row
   block1 = new Block(510,340,30,40);
   block2 = new Block(540,340,30,40);
   block3 = new Block(570,340,30,40);
   block4 = new Block(600,340,30,40);
   block5 = new Block(630,340,30,40);
   block6 = new Block(660,340,30,40);
   block7 = new Block(690,340,30,40);
   //5 blocks-row
   block8 = new Block(540,300,30,40);
   block9 = new Block(570,300,30,40);
   block10 = new Block(600,300,30,40);
   block11 = new Block(630,300,30,40);
   block12 = new Block(660,300,30,40);
   //3 blocks-row
   block13 = new Block(570,260,30,40);
   block14 = new Block(600,260,30,40);
   block15 = new Block(630,260,30,40);
   //1 block-row
   block16 = new Block(600,220,30,40);

   ground = new Ground(400,380,800,20);
   stand = new Ground(600,360,300,15);

   slingShot = new SlingShot(this.polygonBody,{x:150,y:200});

   Engine.run(engine);
}

function draw(){
    background(backgroundImg);
    fill("white");
    textSize(20);
    text("SCORE:"+score,600,50);

    polygonSprite.x= polygonBody.position.x 
    polygonSprite.y= polygonBody.position.y 

    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();
    block5.display();
    block5.score();
    block6.display();
    block6.score();
    block7.display();
    block7.score();
    block8.display();
    block8.score();
    block9.display();
    block9.score();
    block10.display();
    block10.score();
    block11.display();
    block11.score();
    block12.display();
    block12.score();
    block13.display();
    block13.score();
    block14.display();
    block14.score();
    block15.display();
    block15.score();
    block16.display();   
    block16.score();



    ground.display();
    stand.display();


    Engine.update(engine);

    slingShot.display();
    drawSprites();

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygonBody,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
	if(keyCode == 32){
			Matter.Body.setPosition(this.polygonBody,{x:100,y:200});
			slingShot.attach(this.polygonBody);
	}
}
