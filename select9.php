<?php
include("conn.php");
// $m=$_GET["m"];
$st=$_GET["st"];
$en=$_GET["en"];
$n=$_GET["n"];
// $t=strtotime(date('Y-m-d'));

// $con = mysql_connect("localhost:37021","root","xiaoniubenben@603");
if (!$con)
 {
 die('Could not connect: ' . mysql_error());
 }
mysql_query("SET NAMES 'UTF8'");
mysql_select_db("xnbb_gr", $con);
$sql="SELECT * FROM monitoring_wjz where date>".$st." and date<".$en."  and machineid='".$n."' order by id";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
 {
 	if($row['id'])
 	// echo $row['freq'].",".$row['power'].",".$row['id'];
 		echo $row['gps_lat'].",".$row['gps_long'].",".$row['date'].";";
 }
mysql_close($con);
?>