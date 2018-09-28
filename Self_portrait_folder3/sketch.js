/* This is my Self Portrait folder number */

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(220);
    
    var r = 0; // red;
	var g = map(mouseX, 0, width, 0, 255); // green
	var b = map(mouseY, 0, height, 0, 255); // blue
	fill(r, g, b);


    
    var r2 = map(mouseX, 0, width, 0, 255); // red;
	var g2 = 0; // green
	var b2 = map(mouseY, 0, height, 0, 255); // blue
    
     var r3 = map(mouseX, 0, width, 0, 255); // red;
	var g3 = map(mouseY, 0, height, 0, 255); // green
	var b3 = 0; // blue
    



	var x = width / 2;
	var y = height / 2;
	var s = width / 2;
	

    var ellipseX = 320;
    var ellipseY = 100;
    var ellipsediameter = 100;
    var ellipseX2=100
    var ellipseY2 = 100;
    var ellipsediameter2 = 100;
    var rectX= 250
    var rectY= 180
    var rectwidth=100
    var rectheight=100 
    var arcX=280 
    var arcY=320
    var arcW=100
    var arcH=100 
    var lineX=20
    var lineY=20
    var lineH=180
    var lineW=20
    var lineX2=100
    var lineY2=20
    var lineH2=180
    var lineW2=20
    var circle1="AQUA"
    var circle2="plum"
    var square="YELLOWGREEN"
    var mouth="LIGHTSAMON"
    
    fill(r, g, b);
    ellipse(ellipseX, ellipseY, ellipsediameter);

    fill(r, g, b);
    ellipse(ellipseX2, ellipseY2, ellipsediameter2);

    fill(r2, g2, b2);
rect(rectX,rectY,rectwidth,rectheight);

    fill(r3, g3, b3);
    arc(arcX, arcY, arcW, arcH, 0, PI);

    fill("LIGHTPINK");
    line(lineX, lineY, lineH, lineW);

    line(lineX2, lineY2, lineH2, lineW2);

}
