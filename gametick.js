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

var leftdoorstate = 0;
var rightdoorstate = 0;

var leftlightstate = 0;
var rightlightstate = 0;

var jumpscaredisplay;
var jumpscaredisplayimage;
var gamelook;
var menulook;
var progressbar;
var playbutton;
var playdotanimation = 1;
var cams;
var camsenable = true;
var opencount = 1;
var camstatus;
var cameradisplay;
var cameraimage;
var shouldthiswork = 0;

var power = 99;
var drainagelvl = 0;



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
    shouldthiswork = 0;
    document.body.style.display = "flex";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";

    
    progressbar = document.getElementById("progress");

    gamelook = document.getElementById("game");
    gamelook.style.display = "block";

    menulook = document.getElementById("actualmenu");
    menulook.style.display = "none";

    cameraimage = document.getElementById("cameraimage");
    cameradisplay = document.getElementById("camerasdiv");
    cams = document.getElementById("cams");
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

    leftlightbutton.addEventListener("mousedown", () => {
        background.src="fnatiimages/locations/lightleft.png";
        if(leftlightstate == 1){
            leftbuttonsimage.src="fnatiimages/buttons/leftbuttonbothon.png";
        }else{
        leftbuttonsimage.src="fnatiimages/buttons/leftbuttonlighton.png";
        }
        playflashlight();
    })

    leftlightbutton.addEventListener("mouseup", () => {
        background.src="fnatiimages/locations/background.jpg";
        if(leftlightstate == 1){
            leftbuttonsimage.src="fnatiimages/buttons/leftbuttondooron.png";
        }else{
            leftbuttonsimage.src="fnatiimages/buttons/leftbuttonbasic.png";
        }
        
        stopflashlight();
        
    })

    rightlightbutton.addEventListener("mousedown", () => {
        background.src="fnatiimages/locations/lightright.png";
        if(rightlightstate == 1){
            rightbuttonsimage.src="fnatiimages/buttons/rightbuttonbothon.png";
        }else{
            rightbuttonsimage.src="fnatiimages/buttons/rightbuttonlighton.png";
        }
        playflashlight();
    })

    rightlightbutton.addEventListener("mouseup", () => {
        background.src="fnatiimages/locations/background.jpg";
        
        if(rightlightstate == 1){
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
    if(leftdoorstate == 0){
        leftdoorstate = 1;
        leftbuttonsimage.src="fnatiimages/buttons/leftbuttondooron.png";
        doorsound();
        leftdoor.src = "fnatiimages/doors/leftdoorclose.gif";

    } else {
        leftdoorstate = 0;
        leftbuttonsimage.src="fnatiimages/buttons/leftbuttonbasic.png"; 
        doorsound();
        leftdoor.src = "fnatiimages/doors/leftdooropen.gif";
    }
}

function rightbuttonhandler(){
    if(rightdoorstate == 0){
        rightdoorstate = 1;
        rightbuttonsimage.src="fnatiimages/buttons/rightbuttondooron.png"; 
        doorsound();
        rightdoor.src = "fnatiimages/doors/rightdoorclose.gif";
    } else {
        rightdoorstate = 0;
        rightbuttonsimage.src="fnatiimages/buttons/rightbuttonbasic.png"; 
        doorsound();
        rightdoor.src = "fnatiimages/doors/rightdooropen.gif";
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
        /* console.log(currentimageposition); */
        newimageposition = currentimageposition + 10;
        imagechangeposition.style.left = newimageposition + "px";
    }

    if(currentimageposition == 0){
        leftarrow.style.display = "none";
    }else{
        leftarrow.style.display = "block";
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
        /* console.log(currentimageposition); */
        newimageposition = currentimageposition - 10;
        imagechangeposition.style.left = newimageposition + "px";
    }

    

    cams.addEventListener("mouseover", () => {
        
        if(camsenable == true && opencount == 1){
            camsenable = false;
            opencount ++;
            camstatus = 1;
            cameradisplay.style.display = "block";
            screenup();
            setTimeout(()=> {

                hideactionboxes();
          
            }, 500);
            
            document.getElementById("displayyy").innerHTML = "1";
           
        }
        if(camsenable == true && opencount == 2){
            camsenable = false;
            camstatus = 1;
            screendown();
            hidebuttons();
            setTimeout(()=> {

                showactionboxes();
          
            }, 600);
            
            document.getElementById("actionboxes").style.display = "block";
            document.getElementById("displayyy").innerHTML = "2";
            opencount = 1;
        }

    });

    cams.addEventListener("mouseleave", () => {
        camsenable = true;
    }
)};

function showactionboxes(){
    cameradisplay.style.display = "none";
    document.getElementById("actionboxes").style.display = "block";
   
}

function hideactionboxes(){
    cameradisplay.style.backgroundcolor = "black";
    document.getElementById("actionboxes").style.display = "none";
    cameraimage.src = "fnatiimages/cams/camlocations/mainstaircase.jpg";
    document.getElementById("camerabuttons").style.display = "block";
    
}


function hidebuttons(){
    document.getElementById("camerabuttons").style.display = "none";
}

function screenup(){
    cameraimage.src = "fnatiimages/cams/screenanimation/screenpopon.gif";
}

function screendown(){
    document.getElementById("locationtext").innerHTML = "Główne Schody";
    cameraimage.src = "fnatiimages/cams/screenanimation/screenpopoff.gif";
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

function progressbarloadin(){
    progressbar = document.getElementById("progress");
    playbutton = document.getElementById("playbutton");
    dotanimation = document.getElementById("dotanimation");

}

async function powerusage(){
    drainagelvl = rightdoorstate + leftdoorstate + rightlightstate + leftlightstate;
    document.getElementById('powerdisplay').innerHTML = drainagelvl;
    let powerdecreasetimer
    if(drainagelvl == 0){
        powerdecreasetimer = 10;
    }
    if(drainagelvl == 1){
        powerdecreasetimer = 8;
    }
    if(drainagelvl == 2){
        powerdecreasetimer = 6;
    }
    if(drainagelvl == 3){
        powerdecreasetimer = 4;
    }
    if(drainagelvl == 4){
        powerdecreasetimer = 2;
    }
    /*for(i=drainagelvl;i>0;){
        i--;
        power--;
       
        sleep(1000)
    }*/

    setInterval(powerusage, 1000);
}

function loadImage(){
    var queue = new createjs.LoadQueue(false);


        queue.on("fileload", handleFileComplete);
        queue.on('progress', event => {
            let progress = Math.floor(event.progress * 100);
            this.progressbar.style.width = progress+'%';
            if (progress == 100) {
                console.log('all done');
            }
        })

        queue.on('complete', event => {
            playbutton.style.visibility = "visible";
            playdotanimation = 0;
        })    
       
        queue.loadManifest([
        "fnatiimages/locations/lightright.png",    
        "fnatiimages/locations/lightleft.png",

        "fnatiimages/buttons/leftbuttonbothon.png",
        "fnatiimages/buttons/leftbuttondooron.png",
        "fnatiimages/buttons/leftbuttonlighton.png",

        "fnatiimages/buttons/rightbuttonbothon.png",
        "fnatiimages/buttons/rightbuttondooron.png",
        "fnatiimages/buttons/rightbuttonlighton.png",

        "fnatiimages/doors/leftdooropen.gif",
        "fnatiimages/doors/leftdoorclose.gif",
        "fnatiimages/doors/rightdooropen.gif",
        "fnatiimages/doors/rightdoorclose.gif",

        "fnatiimages/jumpscare/freddy.gif",
        "fnatiimages/jumpscare/static.gif",

        


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    ]);
    
        function handleFileComplete(event) {
        
        
        }

        
    }

    async function dotanimationfunction(){
        if(playdotanimation == 1){
            dotanimation.innerHTML = "";
            await sleep(500);
            dotanimation.innerHTML = ".";
            await  sleep(500);
            dotanimation.innerHTML = "." + "" + ".";
            await  sleep(500);
            dotanimation.innerHTML = "." + "." + ".";
            setInterval(dotanimationfunction, 500);
        }}
        
    const sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
      };


function camerachangeimage(value) {
  switch (value) {
    case '1':
        document.getElementById("locationtext").innerHTML = "Główne Schody";
        document.getElementById("cameraimage").src = "fnatiimages/cams/camlocations/mainstaircase.jpg";
    break;
    case '2':
        document.getElementById("locationtext").innerHTML = "Korytarz A";
        document.getElementById("cameraimage").src = "fnatiimages/cams/camlocations/hallwaya.jpg";
    break;
    case '3':
        document.getElementById("locationtext").innerHTML = "Korytarz B";
        document.getElementById("cameraimage").src = "fnatiimages/cams/camlocations/hallwayb.jpg";
    break;
    case '4':
        document.getElementById("locationtext").innerHTML = "Schody B";
        document.getElementById("cameraimage").src = "fnatiimages/cams/camlocations/staircaseb.jpg";
    break;
    case '5':
        document.getElementById("locationtext").innerHTML = "Toaleta B";
        document.getElementById("cameraimage").src = "fnatiimages/cams/camlocations/kibelb.jpg";
    break;
    case '6':
        document.getElementById("locationtext").innerHTML = "Pracownia 57";
        document.getElementById("cameraimage").src = "fnatiimages/cams/camlocations/fiftysevenb.jpg";
    break;
    case '7':
        document.getElementById("locationtext").innerHTML = "Szczyt";
        document.getElementById("cameraimage").src = "fnatiimages/cams/camlocations/szczyt.jpg";
    break;
    case '8':
        document.getElementById("locationtext").innerHTML = "Steven Linux";
        document.getElementById("cameraimage").src = "fnatiimages/cams/camlocations/stiven.jpg"
    break;
    case '9':
        document.getElementById("locationtext").innerHTML = "Toaleta A";
        document.getElementById("cameraimage").src = "fnatiimages/cams/camlocations/kibela.jpg";
    break;
   
  }
}

function gotomainmenu(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("actualmenu").style.display = "block";
    document.body.style.display = "block";
    setInterval(menuflicker, 500);
    shouldthiswork = 1;
}


function menuflicker(){
    if(shouldthiswork == 1){
        var random = Math.floor(Math.random() * 10);
    if(random == 3){
        document.getElementById("menuanimatron").src = "fnatiimages/menu/kaminskyfuck.png";
        setTimeout(()=> {

            document.getElementById("menuanimatron").src = "fnatiimages/menu/kaminskymenu.png";
        }, 500);
    }
    if(random == 8){
        document.getElementById("menuanimatron").src = "fnatiimages/menu/kaminskybald.png";
        setTimeout(()=> {

            document.getElementById("menuanimatron").src = "fnatiimages/menu/kaminskymenu.png";
        }, 500);
    }
    }
    
    
}

/* ee */
