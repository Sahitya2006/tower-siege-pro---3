class Box  {
  constructor(x, y, width, height){
    var options = {
      isStatic:false
  }

  this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world, this.body);
  }
  
display(){
  push();
  console.log(this.body.speed);
  if((this.body.speed)<3){
    var pos =this.body.position;
rectMode(CENTER);
rect(pos.x, pos.y, this.width, this.height);

}else
{
  World.remove(world,this.body);
  tint(255,126);
}
}

};
