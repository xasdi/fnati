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
var background;
var leftstate = 0;
var rightstate = 0;
var jumpscaredisplay;
var jumpscaredisplayimage;
var gamelook;
var menulook;

var leftdoorbutton;
var leftbuttons;
var leftlightbutton;
var leftdoor;
var leftbuttonsimage;

var rightdoorbutton;
var rightbuttons;
var rightlightbutton;
var rightdoor;
var rightbuttonsimage;


function startgame(){

    gamelook = document.getElementById("game");
    gamelook.style.display = "block";

    menulook = document.getElementById("menu");
    menulook.style.display = "none";

    imagechangeposition = document.getElementById("actionboxes");
    leftarrow = document.getElementById("leftscrollbutton");
    rightarrow = document.getElementById("rightscrollbutton");
    imageref = document.getElementById("actionboxes");
    fanimage = document.getElementById("fananimation");
    background = document.getElementById("imagebackground");
    jumpscaredisplayimage = document.getElementById("jumpscaredisplayimage");
    jumpscaredisplay = document.getElementById("jumpscaredisplay");
    leftdoorbutton = document.getElementById("leftdoorbutton");

    leftbuttons = document.getElementById("leftbuttons");
    leftlightbutton = document.getElementById("leftlightbutton");
    leftdoor = document.getElementById("leftdoorimage");
    leftbuttonsimage = document.getElementById("leftbuttonsimage");

    rightdoorbutton = document.getElementById("rightdoorbutton");
    rightbuttons = document.getElementById("rightbuttons");
    rightlightbutton = document.getElementById("rightlightbutton");
    rightdoor = document.getElementById("rightdoorimage");
    rightbuttonsimage = document.getElementById("rightbuttonsimage");

    leftdoorbutton.addEventListener("click", () => {
        if((leftdoor.src == "http://127.0.0.1:5500/fnatiimages/doors/leftdoorbasic.png") || ( leftdoor.src == "http://127.0.0.1:5500/fnatiimages/doors/leftdooropen.gif")){
            doorsound();
            leftdoor.src = "http://127.0.0.1:5500/fnatiimages/doors/leftdoorclose.gif";
            
        } else{
            doorsound();
            leftdoor.src = "http://127.0.0.1:5500/fnatiimages/doors/leftdooropen.gif";
            
        }
        
    })

    rightdoorbutton.addEventListener("click", () => {
        if((rightdoor.src == "http://127.0.0.1:5500/fnatiimages/doors/rightdoorbasic.png") || ( rightdoor.src == "http://127.0.0.1:5500/fnatiimages/doors/rightdooropen.gif")){
            doorsound();
            rightdoor.src = "http://127.0.0.1:5500/fnatiimages/doors/rightdoorclose.gif";
            
        } else{
            doorsound();
            rightdoor.src = "http://127.0.0.1:5500/fnatiimages/doors/rightdooropen.gif";
            
        }
        
    })
    

    leftlightbutton.addEventListener("mousedown", () => {
        background.src="fnatiimages/locations/lightleft.png";
        if(leftstate == 1){
            leftbuttonsimage.src="fnatiimages/buttons/leftbuttonbothon.png";
        }else{
        leftbuttonsimage.src="fnatiimages/buttons/leftbuttonlighton.png";
        }
        playflashlight();
    })

    leftlightbutton.addEventListener("mouseup", () => {
        background.src="fnatiimages/locations/background.jpg";
        if(leftstate == 1){
            leftbuttonsimage.src="fnatiimages/buttons/leftbuttondooron.png";
        }else{
            leftbuttonsimage.src="fnatiimages/buttons/leftbuttonbasic.png";
        }
        
        stopflashlight();
        
    })

    rightlightbutton.addEventListener("mousedown", () => {
        background.src="fnatiimages/locations/lightright.png";
        if(rightstate == 1){
            rightbuttonsimage.src="fnatiimages/buttons/rightbuttonbothon.png";
        }else{
            rightbuttonsimage.src="fnatiimages/buttons/rightbuttonlighton.png";
        }
        playflashlight();
    })

    rightlightbutton.addEventListener("mouseup", () => {
        background.src="fnatiimages/locations/background.jpg";
        
        if(rightstate == 1){
            rightbuttonsimage.src="fnatiimages/buttons/rightbuttondooron.png";
        }else{
            rightbuttonsimage.src="fnatiimages/buttons/rightbuttonbasic.png";
        }
        stopflashlight();
        
    })


    
     /*fansound();
    setInterval(fansound, 100);  wentylator dziwek, loop z przerwą między audio do naprawy*/
    /*setInterval(animatefan, 80);*/
    setInterval(checkmouseposition, 20);
}

function leftbuttonhandler(){
    
    if(leftstate == 0){
        leftstate = 1;
        leftbuttonsimage.src="fnatiimages/buttons/leftbuttondooron.png"; 
    } else {
        leftstate = 0;
        leftbuttonsimage.src="fnatiimages/buttons/leftbuttonbasic.png"; 
    }

        

   
}

function rightbuttonhandler(){
    
    if(rightstate == 0){
        rightstate = 1;
        rightbuttonsimage.src="fnatiimages/buttons/rightbuttondooron.png"; 
    } else {
        rightstate = 0;
        rightbuttonsimage.src="fnatiimages/buttons/rightbuttonbasic.png"; 
    }

        

   
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

function jumpscare(){
    jumpscaredisplayimage.src = "fnatiimages/jumpscare/freddy.gif";
    jumpscaredisplay.style.display = "block";
    jumpscarescream();
    setTimeout(()=> {

        static();
  
    }, 2000);
}

function static(){
    playstaticsound();
    jumpscaredisplayimage.src = "fnatiimages/jumpscare/static.gif";

    setTimeout(()=> {

        returntomenu();
  
    }, 3000);
}

function returntomenu(){
    jumpscaredisplayimage.src = "";
    jumpscaredisplay.style.display = "none";
    gamelook.style.display = "none";
    menulook.style.display = "block";
}





function showzmienne(){
    console.log(imagechangeposition);
    console.log(leftbuttonsimage);

}









