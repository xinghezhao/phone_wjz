<?php
include("conn.php");
// $m=$_GET["m"];
$n=$_GET["n"];
// $s=$_GET["s"];
$x=$_GET["x"];
$date=time();
$date1=$date-61;
// $t=strtotime(date('Y-m-d'));
$list= array();

if (!$con)
 {
 die('Could not connect: ' . mysql_error());
 }
mysql_query("SET NAMES 'UTF8'");
mysql_select_db("xnbb_gr", $con);
// $sql="SELECT * FROM monitoring where id>".$s." and  machineid='".$n."' and arfcn=".$x." and power>-70 and power<-1 order by power desc";
$sql="SELECT * FROM monitoring where  machineid='".$n."' and arfcn=".$x." and date>".$date1." and date<".$date." and power>-70 and power<-1 order by power desc";
$result = mysql_query($sql);
$i=0;
while($row = mysql_fetch_array($result))
 {
 		// echo $row['gps_lat'].",".$row['gps_long'].",".$row['power'].",".$row['id'].";";
 		$list[$i] =array("gps_lat"=>$row['gps_lat'],"gps_long"=>$row['gps_long'],"power"=>$row['power'],"id"=>$row['id']);
 		$i++;
 }
echo json_encode($list);
mysql_close($con);
?>