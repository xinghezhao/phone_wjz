<?php 
include("conn.php");
// $arr=$_POST['dJson'];json_encode($_POST)
//接收用户名和用户组 返回名下的所有设备
$name=$_GET['RID'];
$start=$_GET['start'];
$end=$_GET['end'];
// $temp=0;//信道缓冲判断
$list= array();
// $t=time();
// $t1=$t-300;

if (!$con)
 {
 die('Could not connect: ' . mysql_error());
 }
mysql_query("SET NAMES 'UTF8'");
mysql_select_db("xnbb_gr", $con);

// $sql="SELECT arfcn,freq,power,snr,mcc,mnc,lac,cellid,opname,gps_lat,gps_long from general_report where machineid='".$name."' and date>".$t1."  order by arfcn ";
$sql="SELECT arfcn,freq,power,snr,mcc,mnc,lac,cellid,opname,gps_lat,gps_long from general_report where machineid='".$name."' and date>".$start." and date<".$end."";
$result = mysql_query($sql);
$i=0;
while($row = mysql_fetch_array($result)){
	if(true){

		$list[$i] =array("id"=>$i+1,"charts_route"=>$row['arfcn'],"charts_frequency"=>$row['freq'],"charts_power"=>$row['power'],"charts_snr"=>$row['snr'],"charts_mcc"=>$row['mcc'],"charts_mnc"=>$row['mnc'],"charts_lac"=>$row['lac'],"charts_cellid"=>$row['cellid'],"charts_yunyingshang"=>$row['opname'],"long"=>$row['gps_long'],"lat"=>$row['gps_lat']);
	$i++;
	// $temp=$row['arfcn'];
	}
	else{

	}
}
echo json_encode($list);
mysql_close($con);
 ?>



