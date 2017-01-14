<?php
include("conn.php");

if($con){
	$ok=mysql_select_db("xnbb_gr",$con);
	if($ok){
		#echo "xuanzechenggong";
	}
    $shijian=time();
	$machineid=$_GET['machineid'];
	$ml=$_GET['ml'];
        $sql="insert into  mingling (mid,ml,date) values('".$machineid."','".$ml."',".$shijian.")";
        $result = mysql_query($sql);
        

}
mysql_close($con);
?>