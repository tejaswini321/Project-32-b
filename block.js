class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.02,
          'density':0.02
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.color = color(random(0,255),random(0,255),random(0,255));
      this.width = width;
      this.height = height;
      
      this.Visibility = 255;

      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<2){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        fill(this.color);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility-1;
        tint(255, this.Visibility);
        pop();
      }
    }
    score(){
        if(this.Visibility < -3 && this.Visibility >= -105){
            score++
        }
    }
  };
  