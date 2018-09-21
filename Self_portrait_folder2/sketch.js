function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(220);

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
    
    fill(circle1);
    ellipse(ellipseX, ellipseY, ellipsediameter);

    fill(circle2);
    ellipse(ellipseX2, ellipseY2, ellipsediameter2);

    fill(square);
rect(rectX,rectY,rectwidth,rectheight);

    fill(mouth);
    arc(arcX, arcY, arcW, arcH, 0, PI);

    fill("LIGHTPINK");
    line(lineX, lineY, lineH, lineW);

    line(lineX2, lineY2, lineH2, lineW2);

}
