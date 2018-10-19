function setup() {
    createCanvas(1000, 1000);
}

var lion; // global
var pride; //global

function preload() {
    lion = loadImage("lion.jpg")
}

function draw() {
    background(0);
    
    image(lion,100, 100)
    
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(45);
    textFont("Comic Sans MS");
    text("When you they say food is done", 440, 750, 300);
     text("during thanksgiving", 500, 950);

}