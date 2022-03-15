noseX=0;
noseY=0;

difference=0;

leftWristX=0;
rightWristY=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(580,500);

    canvas=createCanvas(550,550);
    canvas.position(600,100);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
background('#969A97');
document.getElementById("square_side").innerHTML="Width and Height of the square will be"+difference+"px";
fill('#F90093');
stroke('#F90093');

square(noseX,noseY,difference);
}

function modelLoaded()
{
    console.log('Posenet is Initialised');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;

        console.log("noseY="+noseX+"noseY="+noseY);

        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX+"difference="+difference);
        
    }
}





