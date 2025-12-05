


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
function createmessage(pseudo,message){
    let retur=document.createElement("div");
    retur.setAttribute("class", "message");
    retur.appendChild(document.createElement("div"));
    retur.children[0].setAttribute("class","acronym");
    retur.children[0].appendChild(document.createElement("p"));
    retur.children[0].children[0].innerText=pseudo.concat(":");
    retur.appendChild(document.createElement("p"));
    retur.children[1].innerText=message;
    return retur;
}
function createmessage(pseudo,message,police){
    let retur=document.createElement("div");
    retur.setAttribute("class", "message");
    retur.setAttribute("style", "font-family:".concat(police));
    retur.appendChild(document.createElement("div"));
    retur.children[0].setAttribute("class","acronym");
    retur.children[0].appendChild(document.createElement("p"));
    retur.children[0].children[0].innerText=pseudo.concat(" :");
    retur.appendChild(document.createElement("p"));
    retur.children[1].innerText=message;
    return retur;
}
document.onkeydown=function(evt){
        var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
        
        console.log(keyCode);
        if(keyCode == 13)
        {
            //your function call here
            window.alert("obviously noone heard... Good for You?");
            launch_conv();
            setTimeout(function(){
                document.themessage.submit();
            },10000)
            
        }
    }
function launch_conv(){
    var chat = document.getElementsByClassName("chat")[0];
    let msg1=document.createElement("div");
        setTimeout(function(){
            msg1=createmessage("TT","douche")
            chat.appendChild(msg1);
            setTimeout(function(){
                msg1=createmessage("TT","douche")
                chat.appendChild(msg1);
            }, 2000);
        }, 2000);
}