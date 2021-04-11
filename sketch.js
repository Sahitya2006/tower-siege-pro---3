const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base1,base2,mainbase;
var block1,square1;
var slingshot;
var shapeObject,launcher,bcgImage;
var bg;

function preload() {
    //bcgImage = loadImage('bcg.jpg');
    getBackgroundImage()
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    mainbase = new Ground(600,590,1200,20);
    base1 = new Ground(530,530,350,20);
    base2 = new Ground(950,310,240,20);

    //base level
    block1 = new Box(400,500,30,40);
    block2 = new Box(432,500,30,40);
    block3 = new Box(464,500,30,40);
    block4 = new Box(496,500,30,40);
    block5 = new Box(528,500,30,40);
    block6 = new Box(560,500,30,40);
    block7 = new Box(592,500,30,40);
    block8 = new Box(624,500,30,40);
    block9 = new Box(656,500,30,40);

    //second level
    block10 = new Box(432,458,30,40);
    block11 = new Box(464,458,30,40);
    block12 = new Box(496,458,30,40);
    block13 = new Box(528,458,30,40);
    block14 = new Box(560,458,30,40);
    block15 = new Box(592,458,30,40);
    block16 = new Box(624,458,30,40);

    //third level
    block17 = new Box(464,415,30,40);
    block18 = new Box(496,415,30,40);
    block19 = new Box(528,415,30,40);
    block20 = new Box(560,415,30,40);
    block21 = new Box(592,415,30,40);


    //fourth level
    block22 = new Box(496,372,30,40);
    block23 = new Box(528,372,30,40);
    block24 = new Box(560,372,30,40);

    //top
    block25 = new Box(528,329,30,40);

    shapeObject = new Hexagon(110,220);
    launcher= new Launcher(shapeObject.body,{x:120,y:220});


    // base-2 blocks 1st set
    square1 = new Box(930,280,40,50);
    square2 = new Box(940,280,40,50);
    square3 = new Box(950,280,40,50);
    square4 = new Box(960,280,40,50);

    //base-2 blocks 2nd set
    square5 = new Box(940,240,40,50);
    square6 = new Box(950,240,40,50);

    //base2 blocks last piece
    square7 = new Box(948,200,40,50);
}

function draw(){
    if(bcgImage)
    background(bcgImage)
    fill("brown");
    mainbase.display();

    fill("white");
    base1.display();
    base2.display();

    fill("blue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

   fill("violet");
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

fill("yellow");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

fill("red");
    block22.display();
    block23.display();
    block24.display();

fill("orange");
    block25.display();

fill("lightblue");
    square1.display();
    square2.display();
    square3.display();
    square4.display();
fill("lightpink");
    square5.display();
    square6.display();
fill("palegreen")   
   square7.display();

//text (mouseX+","+mouseY,mouseX,mouseY)
textSize(22)
fill("darkgreen");
text ("Draw the hexagonal stone and launch it towards the block towers ",200,80)
fill("white");
stroke(6)
text ("THE  TOWER  SIEGE",480,570)

Engine.update(engine);
shapeObject.display();
keyPressed();
launcher.display();
}

function mouseDragged(){
    Matter.Body.setPosition(shapeObject.body,{x:mouseX , y:mouseY})
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if(keyCode === 32){
        launcher.attach(shapeObject.body);
    }
}

async function  getBackgroundImage(){
    var response = await fetch("http://worldclockapi.com/api/json/est/now")
    var responseType =await  response.json()
    console.log(responseType)  
  
    var dt=responseType.currentDateTime
    console.log(dt)
  
    var hr = dt.slice(11,13)
    console.log(hr)
    if(hr>=6 && hr<=19){
        bg="sprites/bcg2.jpg"
    }
    else{
        bg="sprites/bcg.jpg"
    }
  bcgImage=loadImage(bg)
  }