var arrow;
var start = false;
var scrolleft = 0;
var imageref;
var imagestyle;
var currentimageposition;
var leftimagechangeposition;
var newimageposition = 0;

function startgame(){
    leftimagechangeposition = document.getElementById("imagebackground");
    arrow = document.getElementById("leftscrollbutton");
    imageref = document.getElementById("imagebackground");
    
    

    
    
    
        
    
    
    
    
     
        
        setInterval(checkmouseposition, 500);
}

function startloops(){
    start = true;
}

function checkmouseposition(){
    console.log("sprawdzono")
    imagestyle = getComputedStyle(imageref);
    currentimageposition = imagestyle.left;
    currentimageposition = parseInt(currentimageposition, 10);
    arrow.addEventListener("mouseover", () => {
        scrolleft = 1; 
        console.log("myszka na przcisku");
    });

    arrow.addEventListener("mouseout", () => {
        scrolleft = 0;
        console.log("myszka po za przciskiem");
    });

    if(scrolleft==1 && currentimageposition <= -10){
        console.log(currentimageposition);
        newimageposition = currentimageposition + 10;
        leftimagechangeposition.style.left = newimageposition + "px";
    }

    if(scrolleft==1 && currentimageposition <= -10){
        console.log(currentimageposition);
        newimageposition = currentimageposition + 10;
        leftimagechangeposition.style.left = newimageposition + "px";
    }
}

function showzmienne(){
    console.log(scrolleft);
    console.log(imagechangeposition);

}







