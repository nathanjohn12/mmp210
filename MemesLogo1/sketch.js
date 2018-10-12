function setup() {
    createCanvas(1100, 600);
}

var Deer; // global


function preload() {
    Deer = loadImage("Deer.jpg")
}

function draw() {
    
    

//    textAlign(CENTER, CENTER);
//    textSize(45);
//    textFont("Comic Sans MS");
//    text("When you they say food is done", 440, 750, 300);
//     text("during thanksgiving", 500, 950);


    
    background(0);

    if(mouseY > height/2) {
        image(Deer, 0, 0, width/2, height/2);

image(Deer, width/2, 0, width/2, height);
    
        fill(255);
        text("When you they say food is done", 200, 250, 300);
        text("during thanksgiving", 200 , 345);
        textSize(35);
    }
}