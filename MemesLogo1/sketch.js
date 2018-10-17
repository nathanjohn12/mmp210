function setup() {
    createCanvas(1100, 600);
}

var cheetah; // global
var deer; // global

function preload() {
    Cheetah = loadImage("cheetah.jpg")
    Deer = loadImage("deer.jpg")
}

function draw() { 
    background(0);
    
    
    if(mouseY > height/2) {
        image(Cheetah, 0, 0, width/2, height/2);
        fill(255);
        text("When hear your homies arguing", 100, 400, 300);
        text("and now you guys are fighting", 100 , 500);
        textSize(35);
    }
        
    if(mouseX > height/2) {
        image(Deer, width/2, 0, width/2, height/2);
        fill(255);
        text("When person that you were fighting for says ", 600, 400, 300);
        text("there was no reason for", 600 , 525);
        text("us to be fighting",600 , 575);
        text("it wasnt that serious", 600, 700);
        textSize(35);
    
    }
    
}