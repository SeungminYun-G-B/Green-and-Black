class Walker {
  
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(random(-5,5),0);
    this.acc = createVector(0,0.5);
    this.w = 10;
  }
  
  update() {
    
    this.vel.add(this.acc);
    this.vel.mult(0.97);
    this.pos.add(this.vel);
    // this.checkEdges();
  }
  
  
  checkEdges2() {
    if (this.pos.x > width) {
      this.pos.x = 0;
    } else if (this.pos.x < 0) {
      this.pos.x = width;
    }

    if (this.pos.y > height) {
      this.pos.y = 0;
    } else if (this.pos.y < 0) {
      this.pos.y = height;
    }
  }
  
  checkEdges(rWall,lWall,under,upper){
    if(this.pos.x>rWall-5 ||this.pos.x < lWall+5){
      this.vel.x *= -1;
    }
    if(this.pos.y>under-5 || this.pos.y < upper+5){
        if(this.pos.y > under-5){
      this.pos.y = under-5
    }
      
      this.vel.y *= -1;
    }
  
  }
  
  
  display() {
	ellipse(this.pos.x, this.pos.y, this.w);
  }
}