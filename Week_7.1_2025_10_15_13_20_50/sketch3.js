let osc, env;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  
  osc = new p5.Oscillator('sine');
  osc.start();
  osc.amp(0);
  
  env = new p5.Envelope();
  env.setADSR(0.01, 0.1, 0.0, 0.2); 
  env.setRange(0.7, 0);
}

function draw() {
  background(240);
  fill(20);
  text('click anywhere for a beep.\nmove left/right to change pitch.', width/2, height/2);
}

function mousePressed() {
  userStartAudio();
  let f = map(mouseX, 0, width, 260, 1050);
  osc.freq(f);
  env.play(osc);
}