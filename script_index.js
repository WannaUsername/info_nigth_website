


function spostaDiv() {
  margin += 10;
  myDiv.style.marginLeft = margin + "px";
}   
function tryDeleteAI(box)
{
    var el = document.querySelector(".botbox")
    el.style.position="relative";
    var bramble=setInterval(function(){
        el.style.top="5px";
        setTimeout(function(){
            el.style.top="0px";
        },55)
    },110)
    setTimeout(function(){
        clearInterval(bramble);
        console.log("aaaaaaaa");
    },1000);
    //insert here code for throw datas
}
window.onload = function()
{
  var cross = document.querySelector("div");
  cross.addEventListener("click", tryDeleteAI);
}