var menu=document.getElementById("menu");

let desplegable=document.getElementById("desplegable")

var Styles=getComputedStyle(desplegable);



menu.addEventListener("click", function(){
   
    
   if (Styles.display==='grid'){
   
       desplegable.style.display='none'
   }else{
       desplegable.style.display='grid'
   }
})