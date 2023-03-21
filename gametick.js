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


function startgame(){
    imagechangeposition = document.getElementById("actionboxes");
    leftarrow = document.getElementById("leftscrollbutton");
    rightarrow = document.getElementById("rightscrollbutton");
    imageref = document.getElementById("actionboxes");
    
    setInterval(checkmouseposition, 20);
}

function startloops(){
    start = true;
}

function checkmouseposition(){
    console.log("sprawdzono")
    imagestyle = getComputedStyle(imageref);
    currentimageposition = imagestyle.left;
    currentimageposition = parseInt(currentimageposition, 10);
    leftarrow.addEventListener("mouseover", () => {
        scrolleft = 1; 
        console.log("myszka na przcisku");
    });

    leftarrow.addEventListener("mouseout", () => {
        scrolleft = 0;
        console.log("myszka po za przciskiem");
    });

    if(scrolleft==1 && currentimageposition <= -6){
        console.log(currentimageposition);
        newimageposition = currentimageposition + 10;
        imagechangeposition.style.left = newimageposition + "px";
    }

    rightarrow.addEventListener("mouseover", () => {
        scrollright = 1; 
        console.log("myszka na przcisku");
    });

    rightarrow.addEventListener("mouseout", () => {
        scrollright = 0;
        console.log("myszka po za przciskiem");
    });

    if(scrollright==1 && currentimageposition >= -690){
        console.log(currentimageposition);
        newimageposition = currentimageposition - 10;
        imagechangeposition.style.left = newimageposition + "px";
    }
}

function showzmienne(){
    console.log(scrolleft);
    console.log(imagechangeposition);

}









