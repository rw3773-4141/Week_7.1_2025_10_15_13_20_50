function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1); 
  noStroke();
}
//check
function draw() {
  loadPixels();

  let i = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let r = (x + frameCount) % 255;
      let g = (x * 0.5 + frameCount) % 255;
      let b = (x * 0.25 + frameCount) % 255;

      pixels[i]     = r;
      pixels[i + 1] = g;
      pixels[i + 2] = b;
      pixels[i + 3] = 255;
      i += 4;
    }
  }

  updatePixels();

}