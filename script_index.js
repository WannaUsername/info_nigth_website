


function spostaDiv() {
  margin += 10;
  myDiv.style.marginLeft = margin + "px";
}   
function tryDeleteAI(box)
{
    var el = document.querySelector(".botbox")
    el.style.position="relative";
    var audio = new Audio('donMove.mp3');
    audio.play();
    var bramble=setInterval(function(){
        el.style.top="3px";
        setTimeout(function(){
            el.style.top="0px";
        },25)
    },50)
    setTimeout(function(){
        clearInterval(bramble);
        console.log("aaaaaaaa");
    },250);
    
    //insert here code for throw datas
}
window.onload = function()
{
  var cross = document.querySelector("div");
  cross.addEventListener("click", tryDeleteAI);
}