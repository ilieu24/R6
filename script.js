let shape = [];
let drawCircle = true;
let timer = 10;
let bg = 'pink'

function setup() {
  createCanvas(windowWidth, windowHeight);
    background('pink');
  for( let i = 0; i < 10; i++ ) 
  {
 shape[i] = {
 x: 250,
 y: 200,
 w: 100,
 c: color(random(450),random(449), random(448)),
 dy: 10,
 dx: random(1, 10),
}
}
rectMode(CENTER);
ellipseMode(RADIUS);
}

function draw() {
 background(bg)
for( let i = 0; i < shape.length; i++ ){
const b = shape[i];
fill(b.c);
if( drawCircle ) {
circle(b.x, b.y, b.w/2);
} else {
square(b.x,b.y,b.w)
}
shape[i].x += shape[i].dx;
if( shape[i].x > width || shape[i].x < 0 ) {
shape[i].dx *= -1;
shape[i].x += shape[i].dx;
}
if( shape[i].x > width ){
i = i--
}
}
textAlign(CENTER);
fill('blue'); 
textSize(50);
text(timer, 40, 50);
 if (frameCount % 60 == 0 && timer > 0) { 
   timer --;
 }
 if (timer == 0) {
   text("try switching shapes!", width/2, height*.6);
 }
}

function mouseClicked() {
  for( let i = 0; i < shape.length; i++ ) {
    shape[i].x = width/2;
  }
  drawCircle = !drawCircle;
}

function mousePressed(){
  bg='black'
}

function mouseReleased(){
  bg='pink'
}
