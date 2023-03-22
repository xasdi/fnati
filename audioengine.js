var freddynose = new Audio("sounds/freddynoseboop.mp3");
var fannoise = new Audio("sounds/fan.wav");
fannoise.volume = 0.1;
var playdoor = new Audio("sounds/door.wav");
playdoor.volume = 0.2;
var flashlight = new Audio("sounds/flashlight.wav");

function playfreddynose(){
    freddynose.play();
}

function fansound(){
    fannoise.play();
}

function doorsound(){
    playdoor.play();
}

function playflashlight(){
    flashlight.play();
}

function stopflashlight(){
    flashlight.pause();
}