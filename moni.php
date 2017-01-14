<?php
$id=mysql_connect("localhost","root","medex123");
if($id){
	$ok=mysql_select_db("xnbb_gr",$id);
	if (!$id)
 {
 die('Could not connect: ' . mysql_error());
 }
	if($ok){
		#echo "xuanzechenggong";
	}

	// $machineid=$_GET['machineid'];
	$iid=$_GET['q'];
	// $para =$_GET['para'];
        
        $sql="select machineid,gps_lat,gps_long,arfcn,count,power,date from monitoring where machineid='XNBBGR07E0062802' and id=".$iid;
        $result = mysql_query($sql)  or die(mysql_error());
        // echo $sql;
        while($row = mysql_fetch_array($result)){
        $date=time();
       	$sql01="insert into monitoring (machineid,gps_lat,gps_long,arfcn,count,power,date) values('XNBBDEMO',".$row['gps_lat'].",".$row['gps_long'].",".$row['arfcn'].",".$row['count'].",".$row['power'].",".$date.") ";
       
        mysql_query($sql01);
               
  }

}
mysql_close($id);
?>