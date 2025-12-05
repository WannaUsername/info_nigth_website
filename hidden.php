<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titre de la page</title>
    <meta name="description" content="Description de la page">
    <!-- Lien vers une feuille de style CSS externe -->
    <link rel="stylesheet" href="hidden.css">
    <script></script>
</head>
<body>
    <div class="chat">
        <div class="message"><div class="acronym"><p>CG  : </p></div><p> on pouvait pas faire cette conv sur un chat normal pour une fois</p></div>
        <div class="gastermessage"><div class="acronym"><p>WDG :</p></div><p> NEVER TOO PRECAUTIONNOUS </p></div>
        <div class="message"><div class="acronym"><p>CG  :</p></div><p> mouais</p></div>
        
    </div>
    <div class="yourself"><div class="acronym"><p>
    <?php
    session_start();  
    //echo "truc";
    $test = isset($_SESSION['chat1finished']);
    if (isset($_SESSION["pseudonym"])){
        echo $_SESSION["pseudonym"];
    }
    else{
        echo 'UNKNOWN';
    }
    echo ':</p></div><div class="mymessage"><form name="themessage" action="#" method="POST"><input class="mymessage" type="text" 
  id="trymessage1"
  name="trymessage1"
  maxlength="50"
  size="50" /><input type="hidden" name="chat1finished" value="true"></input></form></div></div>';
    

    if (isset($_POST['trymessage1'])){
        $_SESSION['message1']=$_POST['trymessage1'];
    }



?>
<script src="script_hidden.js"></script>
<script> 
    var chat = document.getElementsByClassName("chat")[0];
    console.log(chat.children);
    if(
        <?php
            if (isset($_POST['chat1finished'])){
                $_SESSION['chat1finished']=$_POST['chat1finished'];
            }
            if ((isset($_SESSION['chat1finished']))){
                echo 'true';
            }
            else{
                echo 'false';
            }
        ?>
    ){
        let msg1=document.createElement("div");
        setTimeout(function(){
            msg1=createmessage("JA ","non vraiment camarade c pas la premiere fois que tes messages et données seraient utilisés pour des saloperies","DOSVGA")
            chat.appendChild(msg1);
            setTimeout(function(){
                msg1=createmessage("CG ","t'exagere julia je sais bien qu'ça les utilisent pour leurs algo mais bon quoi de plus","DOSVGA")
                chat.appendChild(msg1);
                setTimeout(function(){
                    msg1=createmessage("WDG","ATTENDS UN PEU QUE QUELQU'UN LES LISES...","windings")
                    chat.appendChild(msg1);
                    setTimeout(function(){
                        msg1=createmessage("CG ","attends un instant g une notif","DOSVGA")
                        chat.appendChild(msg1);
                        setTimeout(function(){
                            msg1=createmessage("JA ","tu sait que t'es chiant walter à parler en windings","DOSVGA")
                            chat.appendChild(msg1);
                            setTimeout(function(){
                                msg1=createmessage("WDG","RAC","windings")
                                chat.appendChild(msg1);
                                setTimeout(function(){
                                    msg1=createmessage("JA","god dammit","DOSVGA")
                                    chat.appendChild(msg1);
                                },0);
                            },0);
                        },0);
                    }, 0);
                }, 0);
            }, 0);
        }, 0);
    }
    else{
        let msg1=document.createElement("div");
        setTimeout(function(){
            msg1=createmessage("TT","douche")
            chat.appendChild(msg1);
            console.log("a eu lieu2");
            console.log(chat.children)
        }, 2000);
    }
    console.log("finito")
    
    
</script>
</body>
</html>