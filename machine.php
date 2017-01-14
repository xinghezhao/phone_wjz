<?php 
include("conn.php");
session_start();   
// $arr=$_POST['dJson'];json_encode($_POST)
//接收用户名和用户组 返回名下的所有设备
// $name=$_GET['name'];
// $flag=$_GET['flag'];
$name= $_SESSION['username']; 
$list=Array();
// $mid=$_GET['mid'];

if (!$con)
 {
 die('Could not connect: ' . mysql_error());
 }
mysql_query("SET NAMES 'UTF8'");
mysql_select_db("xnbb_gr", $con);
$sql="SELECT z.machineid from zidian z,users u where u.userflag=z.userflag and u.username='".$name."'";
$result = mysql_query($sql);
$i=0; 
while($row = mysql_fetch_array($result)){
	$sql2="select date from zidian where machineid='".$row['machineid']."' limit 1";
    $result2 = mysql_query($sql2);
    $row2 = mysql_fetch_array($result2);
    $t=time();
    $t1=$row2['date'];
    if(!$t1){$t1=0;}
    if($t-$t1>20){
        $list[$i] =array("id"=>$i+1,"model_name"=>"<img src='images/shebei02.jpg' alt=''>","model_number"=>$row['machineid']);
    }
    else{
        $list[$i] =array("id"=>$i+1,"model_name"=>"<img src='images/shebei2.jpg' alt=''>","model_number"=>$row['machineid']);
    }

$i++;
}
echo json_encode($list);
mysql_close($con);
 ?>



