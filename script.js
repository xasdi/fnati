var arrow;
var start = false;
var scrolleft = 0;

function startgame(){

    arrow = document.getElementById("leftscrollbutton");
    
    
    
        
    
    
    
    
     
        
        setInterval(checkmouseposition, 500);
}

function startloops(){
    start = true;
}

function checkmouseposition(){

    arrow.addEventListener("mouseover", () => {
        scrolleft = 1; 
    });

    arrow.addEventListener("mouseout", () => {
        scrolleft = 0; 
    });

    if(scrolleft==1){
        
    }
}








