/*class Box {
  constructor(x,y,width,height) {
    var options = {
      'restitution':0.8,
      'friction':0.2,
      'density':0.02
    }
    this.body = Bodies.rectangle(x,y,width,height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visibility = 255;
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    strokeWeight(3.5);
    stroke("black")
    //fill(232, 206, 237);
    rect(pos.x, pos.y, this.width, this.height);
    console.log(this.body.speed);
    
  }
}*/
class Box extends BaseClass{
  constructor(x,y,width,height){
    super(x, y, width, height);
    this.Visibility = 255;    
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed<9){
      super.display();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255, this.Visibility);
     // rect(this.body.position.x, this.body.position.y, 50, 70);
      pop();
      console.log(this.Visibility);
    }
  }
}