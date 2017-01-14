<?php 
include("conn.php");
$name=$_GET['sb_number'];
$arfcn=$_GET['xd_number'];

$list= array();

if (!$con)
 {
 die('Could not connect: ' . mysql_error());
 }
mysql_query("SET NAMES 'UTF8'");
mysql_select_db("xnbb_gr", $con);
// $name="XNGR07E0052401";
$sql="SELECT machineid,arfcn, power,gps_lat,gps_long,date from monitoring where machineid='".$name."' and arfcn=".$arfcn." order by date desc limit 1 ";

$result = mysql_query($sql);
$i=0;
while($row = mysql_fetch_array($result)){
	
		$list[$i] =array("machineid"=>$row['machineid'],"arfcn"=>$row['arfcn'],"charts_power"=>$row['power'],"gps_lat"=>$row['gps_lat'],"gps_long"=>$row['gps_long'],"date"=>$row['date']);
		$i++;
}
echo json_encode($list);
mysql_close($con);
 ?>



