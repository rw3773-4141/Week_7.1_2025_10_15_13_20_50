let fireworks = []

class Fireworks {
  constructor(x,y,vx,vy,col){
    this.x = x;
    this.y = y;
    
    this.vx = vx;
    this.vy = vy;
    this.life = 50;
    this.col = col;
    this.speed = 4.5;
    this.num = 250;
    
  
  }
  move(){
    this.x += this.vx;
    this.y += this.vy;
    this.life--;
  }
  
  show(){
    let a = map(this.life,0,50,0,255);
    noStroke();
    fill(this.col[0], this.col[1], this.col[2], a);
    circle(this.x, this.y, 2);
  }
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0)
}

function draw(){
  
  noStroke(); 
  fill(0, 30); 
  rect(0,0,width,height);
  
  for(let i = fireworks.length - 1; i>= 0; i--){
    fireworks[i].move();
    fireworks[i].show();
    if (fireworks[i].life <= 0){
      fireworks.splice(i,1);
    }
  }
}

function mousePressed(){
  let col = [floor(random(80,255)),floor(random(80,255)),floor(random(80,255))]
  
  let num = 250;
  let speed = 4.5;
  
  for (let i = 0; i < num; i++){
  let angle = random(TWO_PI);
  
  let vx = cos(angle)* speed;
  let vy = sin(angle)* speed;
  fireworks.push(new Fireworks(mouseX,mouseY,vx,vy,col));
       }
}