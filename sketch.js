let ball;
let balls = [];
let Wall = 100;


function setup() {
  createCanvas(400, 400); 
  // ball = new Walker();
  rectMode(CENTER);
}


function draw() {
  background(220);
  push();
  noFill();
  rect(width/2,height/2,Wall);
  pop();
  
  for(let b of balls){
  b.update();
  b.display();
  b.checkEdges(200+Wall/2,200-Wall/2,200+Wall/2,200-Wall/2);
  }

}

function mousePressed() {
   // b.vel.add(5,-5)
  let b = new Walker();
  balls.push(b);
  
}