function preload() {
}

    function setup() {
    canvas=createCanvas(800,600);
    canvas.position(120,150);
    video=createCapture(VIDEO);
        video.hide();
    }
    
    function draw() {
        image(video,150,200,500,300);
        fill(0,250,0);
        stroke(0,30,0);
        rect(100,100,600,40);
        rect(100,550,600,40);
        rect(100,100,40,550);
        rect(700,100,40,550);
        fill(255,0,0);
        circle(125,125,100);
        circle(125,575,100);
        circle(725,575,100);
        circle(725,125,100);
    }
function take_snapshot(){
    save('image.png');
}