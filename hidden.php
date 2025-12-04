<?php
require "hidden.html";
session_start();  
//echo "truc";
if (isset($_SESSION["pseudonym"])){
    echo '
    <div class="yourself"><div class="acronym"><p>'.$_SESSION["pseudonym"].':</p></div><textarea id="trymessage" name="trymessage" rows="1" cols="33"></div>';
sleep(2);
}
sleep(2);
echo '
    <div class="message"><div class="acronym"><p>CG:</p></div><p>salut</p></div>';
sleep(2);
?>
