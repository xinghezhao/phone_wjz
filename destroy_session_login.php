<?php
session_start();
unset($_SESSION['username']);
unset($_SESSION['passcode']);
unset($_SESSION['userflag']);
// echo "注销成功";
echo	"<script>location.href='login.html';</script>"; 
?>