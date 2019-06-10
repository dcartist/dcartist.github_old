var img;
var dousize = 0;
var ddsize = 2;
var bgreen = 0;
var bred = 0;
var bblue = 0;
var butt = false;
var unit = 100;
var count;
var mods = [];

function preload() {
  img = loadImage('assets/doughnut.png');
}
function setup() {

//  frameRate(30)
//   createCanvas(1000,600);
 createCanvas(windowWidth, windowHeight);
  image(img, 0, 0);
  var wideCount = width / unit;
  var highCount = height / unit;
  count = wideCount * highCount;
  
  var index = 0;
  for (var y = 0; y < highCount; y++) {
    for (var x = 0; x < wideCount; x++) {
      mods[index++] = new Module(x*unit, y*unit, unit/2, unit/2, 
        random(0.05, 0.8), unit);
    }
  }
  
  
}

function draw()
{


  background(bgreen,bred,bblue);
 //  push();
//   translate(width*0.5, height*0.5);
//   rotate(frameCount/5);
//begin
//   image(img, 0, height/3, img.width/3, img.height/3);
//   image(img, 0, 0, dousize, dousize);
//   if (dousize<1000){
//   dousize++
//   } else {
//   dousize = 0;
//   }
//   
  
  
  for (var i = 0; i < count; i++) {
    mods[i].update();
    mods[i].draw();
  }

  //end
  
//   pop();
  
//   image(imag,0,0);
  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function Module(_xOff, _yOff, _x, _y, _speed, _unit) {
  this.xOff = _xOff;
  this.yOff = _yOff;
  this.x = _x;
  this.y = _y;
  this.speed = _speed;
  this.unit = _unit;
  this.xDir = 1;
  this.yDir = 1;
}

// Custom method for updating the variables
Module.prototype.update = function() {
  this.x = this.x + (this.speed * this.xDir);
  if (this.x >= this.unit || this.x <= 0) {
    this.xDir *= -1;
    this.x = this.x + (1 * this.xDir);
    this.y = this.y + (1 * this.yDir);
  }
  if (this.y >= this.unit || this.y <= 0) {
    this.yDir *= -1;
    this.y = this.y + (1 * this.yDir);
  }
}

// Custom method for drawing the object
Module.prototype.draw = function() {
image(img, this.xOff + this.x, this.yOff + this.y, 136, 136);
}


function touchStarted() {
  if (butt === false) {
    bgreen = getRandomArbitrary(0,255)
    bred = getRandomArbitrary(0,255)
    bblue = getRandomArbitrary(0,255)
    butt = true;
  } else {
    bgreen = getRandomArbitrary(0,255)
    bred = getRandomArbitrary(0,255)
    bblue = getRandomArbitrary(0,255)
    butt = false;
  }
}

 function mousePressed()
{
if (mouseButton == LEFT ){
    bgreen = getRandomArbitrary(0,255)
    bred = getRandomArbitrary(0,255)
    bblue = getRandomArbitrary(0,255)
    
  }
  
  
  


 
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}