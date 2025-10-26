let img;
let x, y,w,h;


function preload(){
  
  img = loadImage("cat.png")
  print(img);
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  imageMode(CENTER);
  noStroke();
  
 
}


function mousePressed() {
  background(200, 250, 250);
  
  w = random(40,140)
  h = random(40,140)
  
  x = random(w / 2, width - w / 2);
  y = random(h / 2, height - h / 2);
  
  image(img, x,y,w,h);
  
  
}

