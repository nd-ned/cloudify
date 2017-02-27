var angle = 0.45;
var song;
var button;
var amp;
var slider;





function setup() {
    createCanvas(500, 500);
    song = loadSound("matter.mp3", loaded);
    slider = createSlider(0, TWO_PI, PI / 4, 0.01);
    amp = new p5.Amplitude();
}

function loaded() {
  button = createButton("play");
  button.mousePressed(togglePlaying);
}

function diam (diam) {
    diam = Math.round(map(amp.getLevel(), 0, 0.3, 10, 200));
    if (diam > 80) {
        return diam = 80;
    } else {
        return diam;
    }
}


function draw() {
    background(1);
    translate(250, height);
    angle = slider.value();
    branch(diam());
}

function branch(len) {
    line(0, 0, 0, - len);
    translate(0, - len);
    stroke(Math.floor((Math.random() * 255) + 1), Math.floor((Math.random() * 255) + 1), Math.floor((Math.random() * 255) + 1));
    
    if (len > 4) {
        push();
    rotate(angle);
    branch(len * 0.7);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.7);
    pop();
    }
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html("stop");
  } else {
    song.stop();
    button.html("play");
  }
}