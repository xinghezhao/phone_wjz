<?php
include("conn.php");
// @mysql_connect("localhost","root","medex123")
// or die("连接失败1");
// @mysql_select_db("xnbb_gr")
// or die("连接失败");
//»ñÈ¡ÊäÈëµÄÐÅÏ¢
$username = $_POST['username'];
$password = $_POST['password'];
if (!$con)
 {
 die('Could not connect: ' . mysql_error());
 }
mysql_query("SET NAMES 'UTF8'");
mysql_select_db("xnbb_gr", $con);
$sql="select username,userflag,machineid from users where username ='".$username."'";  
$query = mysql_query($sql);
// $query = @mysql_query("select username,userflag,machineid from users where username ='".$username."'")
// or die("连接失败");

if($row = mysql_fetch_array($query))
{
    session_start();
            // if($_SESSION['username']!="")
{
        // echo "登陆着呢！";
}
    //ÅÐ¶ÏÈ¨ÏÞ
    if($row['userflag'] > 0){
        $_SESSION['username'] = $row['username'];
        $_SESSION['userflag'] = $row['userflag'];
        // $_SESSION['machineid'] = $row['machineid'];

echo "<script>location.href='index.html';</script>";   // 跳转到 t.php
        // echo "<a href='welcome_session_login.php'>»¶Ó­·ÃÎÊwww.cnblogs.com/txw1958</a>";
    }else{
        echo "用户名";
    }

}else{
	
echo	"<script>location.href='relogin.html';</script>"; 

  // echo "<script>location.href='login.html';</script>";   // 跳转到 t.php
}
mysql_close($con);
?>