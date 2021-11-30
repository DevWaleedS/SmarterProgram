/*function isChecked(){
    if(document.getElementById("my-checkbox").cheaked){
        document.getElementById("message")
        TextContent="Checked";
    }
    else{
        document.getElementById("message")
        TextContent="Not Checked";
    }
    
}

*/

var a =document.getElementById("image2").style.display="none";
function show_hide(){
      
    if (document.getElementById("a").cheaked){
       document.getElementById("image1").style.display="inline";
       document.getElementById("image2").style.display="none";
      
       return a=0;
    }
    else {
       document.getElementById("image1").style.display="none";
       document.getElementById("image2").style.display="inline";
       return a=1;
    }
    
}
function show_hide2(){
    
    if (document.getElementById("b").cheaked){
       document.getElementById("image2").style.display="inline";
       document.getElementById("image1").style.display="none";
      
       return a=0;
    }
    else {
       document.getElementById("image2").style.display="none";
       document.getElementById("image1").style.display="inline";
       return a=1;
    }
    
}



var navlinks = document.getElementById("navlinks");

function showMenu(){
    navlinks.style.right="0";

}
function hideMenu(){
    navlinks.style.right="-200px";

}





/*
var a ;
function show_hide(){
    
    if (a==1){
       document.getElementById("image1").style.display="inline";
       document.getElementById("image2").style.display="none";
      
       return a=0;
    }
    else {
       document.getElementById("image1").style.display="none";
       document.getElementById("image2").style.display="inline";
       return a=1;
    }
}*/