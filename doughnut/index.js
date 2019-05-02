var img;
var smallPoint, largePoint;

function preload() {
  img = loadImage('assets/doughnut.png');
}
function setup() {
 frameRate(50)
//  frameRate(30)
  createCanvas(720, 400);
    smallPoint = 4;
    largePoint = 20;
    imageMode(CENTER);
    noStroke();
    background(255);
    img.loadPixels();
  
}

function draw()
{
//  background(100,100,100);
// //  push();
////   translate(width*0.5, height*0.5);
////   rotate(frameCount/5);
//begin
//  image(img, 0, height/3, img.width/3, img.height/3);
  //end
  
  //Dots
  var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, pointillize, pointillize);
  //Dots
  
  
  
//   pop();
  
//   image(imag,0,0);

  
  
  
}

 function mousePressed()
{
 
}/Users/PBmini/Dropbox/!Projects/Code/coding-Javascript/ART w Code/PlaintiveDazzling3/index.html

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}