function preload()// !!
{
    clown_nose= loadImage("https://i.postimg.cc/9Mt0s9sx/clone-nose.jpg");

}
function setup()
{
    canvas= createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);//remember// to access the camera
    video.size(300,300);
    video.hide();

    var poseNet= ml5.poseNet(video, modelLoaded);// used to initialize the poseNet
    poseNet.on("pose", gotPoses);//remember// on() is used to execute the poseNet
}

function modelLoaded()
{
    console.log("poseNet is intialized");
}

var noseX= 0;
var noseY= 0; 


function gotPoses(results)
{
    if(results.length > 0)// main part in the code!!!
    {
        console.log(results);
        
        noseX= results[0].pose.nose.x -5;
        noseY= results[0].pose.nose.y -5;  
        console.log("the nose x position is" + "" + noseX);// used to show the position of the facial part of the image!
        console.log("the nose y position is" + "" + noseY);
        console.log("the left eyes's x position is" + "" + results[0].pose.leftEye.x);// opt
        console.log("the left eyes's y position is" + "" + results[0].pose.leftEye.y);// opt
    }

}

function draw()// my fav one!
{
    image(video,0,0,300,300);// (var, x, y, width, height)

    
    // opt 1 to draw the image circle//
    //circle(noseX, noseY, 20);
    //fill(255,0,0);
    //stroke(255,0,0);

    //opt 2 to draw the image circle//
    image(clown_nose, noseX, noseY, 30, 30); // !!
}
function take_snapshot()
{
    save("MyFilterImg.png");
}