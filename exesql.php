<?php 
include("conn.php");

$sql=$_GET['exesql'];
mysql_query("SET NAMES 'UTF8'");
mysql_select_db("xnbb_gr", $con);
$result = mysql_query($sql);

mysql_close($con);
 ?>