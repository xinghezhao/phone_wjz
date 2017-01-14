<?php 
session_start();
if(isset($_SESSION['username'])){
	if(isset($_SESSION['username'])){
echo "var user='". $_SESSION['username']."';";
echo "var userflag='". $_SESSION['userflag']."';";}
}
else{
	echo	"location.href='login.html';"; 
}

 ?>