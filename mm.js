function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(150,150);

    canvas = createCanvas(799,492.6587777777777777777777777777);
    canvas.position(1000,210);

    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotposes);
}

function draw(){
    //I gave background in css//
}

function modelDone(){
    console.log("PosetNet initiliazed!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
    }
}