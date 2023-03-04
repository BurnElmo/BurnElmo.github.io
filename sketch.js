let time = 0;
let wave = [];

let nSlider;
let sSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  nSlider = createSlider(1, 100, 1);
  sSlider = createSlider(0.01, 0.1, 0.025, 0.001);
  nSlider.position(20, 20);
  sSlider.position(20, 45);
}

function draw() {
  background(22);
  translate(175, windowHeight / 2);

  let x = 0;
  let y = 0;

  for (let i = 0; i < nSlider.value(); i++) {
    let prevx = x;
    let prevy = y;
    let n = i * 2 + 1;
    let radius = 75 * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);

    fill(255);
    stroke(255);
    line(prevx, prevy, x, y);
    if (i == nSlider.value() - 1) ellipse(x, y, 8);
  }
  wave.unshift(y);

  translate(200, 0);
  line(x - 200, y, 0, wave[0]);

  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  time += sSlider.value();

  if (wave.length > 1545) {
    wave.pop();
  }
}
