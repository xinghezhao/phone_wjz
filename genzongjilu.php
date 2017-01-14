<?php 
include("conn.php");
// $arr=$_POST['dJson'];json_encode($_POST)
//接收用户名和用户组 返回名下的所有设备
$name=$_GET['RID'];
$start=$_GET['start'];
$end=$_GET['end'];
// $temp=0;//信道缓冲判断
$list= array();


if (!$con)
 {
 die('Could not connect: ' . mysql_error());
 }
mysql_query("SET NAMES 'UTF8'");
mysql_select_db("xnbb_gr", $con);
$sql01="SELECT freq,snr,mcc,mnc,lac,cellid,opname from general_report where machineid='".$name."' and date>".$start." and date<".$end." limit 1";  
$result01 = mysql_query($sql01);
$row01 = mysql_fetch_array($result01);
$freq =$row01['freq'];
$snr =$row01['snr'];
$mcc =$row01['mcc'];
$mnc =$row01['mnc'];
$lac =$row01['lac'];
$cellid =$row01['cellid'];
$opname =$row01['opname'];
// $sql="SELECT arfcn,freq,power,snr,mcc,mnc,lac,cellid,opname,gps_lat,gps_long from general_report where machineid='".$name."' and date>".$t1."  order by arfcn ";
$sql="SELECT id, arfcn,power,gps_lat,gps_long from monitoring where machineid='".$name."' and date>".$start." and date<".$end.""; 
$result = mysql_query($sql);
$i=0;
while($row = mysql_fetch_array($result)){
	if($row['id']%10==0){

		$list[$i] =array("id"=>$i+1,"charts_route"=>$row['arfcn'],"charts_frequency"=>$freq,"charts_power"=>$row['power'],"charts_snr"=>$snr,"charts_mcc"=>$mcc,"charts_mnc"=>$mnc,"charts_lac"=>$lac,"charts_cellid"=>$cellid,"charts_yunyingshang"=>$opname,"long"=>$row['gps_long'],"lat"=>$row['gps_lat']);
	$i++;
	// $temp=$row['arfcn'];
	}
	else{

	}
}
echo json_encode($list);
mysql_close($con);
 ?>



