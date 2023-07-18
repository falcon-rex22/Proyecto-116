beardX = 0;
beardY = 0;

function preload(){
    barba_legendaria = loadImage("https://i.postimg.cc/SRJv966y/Barba-legendaria-XD.png")
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet = ml5.poseNet(video,modelo_cargado);
    posenet.on("pose", gotPoses);
}

function modelo_cargado(){
    console.log("modelo cargado");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        beardX = results[0].pose.nose.x - 28;
        beardY = results[0].pose.nose.y - 13;
        console.log("Esta es la cordenada en X de la barbilla" + beardX + " esta es la cordenada en Y de la barbilla" + beardY);
    }
}

function draw(){
    image(video,0,0,300,300);
    image(barba_legendaria,beardX,beardY,65,65);
}

function takeSnapshot(){
    save("foto con barba.png");
}