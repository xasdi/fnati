var leftarrow;
var rightarrow;
var start = false;
var scrolleft = 0;
var scrollright = 0;
var imageref;
var imagestyle;
var currentimageposition;
var imagechangeposition;
var newimageposition = 0;
var fanimage;
var fananimate = 1;
var leftdoorbutton;
var leftbuttons;
var leftlightbutton;
var background;



function startgame(){
    imagechangeposition = document.getElementById("actionboxes");
    leftarrow = document.getElementById("leftscrollbutton");
    rightarrow = document.getElementById("rightscrollbutton");
    imageref = document.getElementById("actionboxes");
    fanimage = document.getElementById("fananimation");
    leftdoorbutton = document.getElementById("leftdoorbutton");
    leftbuttons = document.getElementById("leftbuttons");
    leftlightbutton = document.getElementById("leftlightbutton");
    background = document.getElementById("imagebackground");

    leftdoorbutton.addEventListener("mousedown", () => {
        
        alert("amogus");
    })
    leftdoorbutton.addEventListener("mouseup", () => {
        
        alert("amogus1");
    })

    leftlightbutton.addEventListener("mousedown", () => {
        background.src="fnatiimages/locations/lightleft.png";
    })
    leftlightbutton.addEventListener("mouseup", () => {
        background.src="fnatiimages/locations/background.jpg";
    })

     /*fansound();
    setInterval(fansound, 100);  wentylator dziwek, loop z przerwą między audio do naprawy*/
    /*setInterval(animatefan, 80);*/
    setInterval(checkmouseposition, 20);
}

function startloops(){
    start = true;
}

function checkmouseposition(){
    /*console.log("sprawdzono")*/
    imagestyle = getComputedStyle(imageref);
    currentimageposition = imagestyle.left;
    currentimageposition = parseInt(currentimageposition, 10);
    leftarrow.addEventListener("mouseover", () => {
        scrolleft = 1; 
        /*console.log("myszka na przcisku");*/
    });

    leftarrow.addEventListener("mouseout", () => {
        scrolleft = 0;
        /*console.log("myszka po za przciskiem");*/
    });

    if(scrolleft==1 && currentimageposition <= -6){
        /*console.log(currentimageposition);*/
        newimageposition = currentimageposition + 10;
        imagechangeposition.style.left = newimageposition + "px";
    }

    rightarrow.addEventListener("mouseover", () => {
        scrollright = 1; 
        /*console.log("myszka na przcisku");*/
    });

    rightarrow.addEventListener("mouseout", () => {
        scrollright = 0;
        /*console.log("myszka po za przciskiem");*/
    });

    if(scrollright==1 && currentimageposition >= -399){
        /*console.log(currentimageposition);*/
        newimageposition = currentimageposition - 10;
        imagechangeposition.style.left = newimageposition + "px";
    }
}

function animatefan(){
    fanimage.src = 'animationimages/fan/' + fananimate + ".png";
    if(fananimate < 3){
        ++fananimate;
    } else {
        fananimate = 1;
    }
    
}




function showzmienne(){
    console.log(leftbuttons);
    console.log(imagechangeposition);

}









