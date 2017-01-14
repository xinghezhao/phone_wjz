 function GetXmlHttpObject()
{
		var xmlHttp=null;
		try
		 {
		 // Firefox, Opera 8.0+, Safari
		 xmlHttp=new XMLHttpRequest();
		 }
		catch (e)
		 {
		 //Internet Explorer
		 try
		  {
		  xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		  }
		 catch (e)
		  {
		  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		 }
		 return xmlHttp;
}
var  xmlHttp_sql;
function select(exesql)
{ 

 xmlHttp_sql=GetXmlHttpObject()
if (xmlHttp_sql==null)
 {
 alert ("Browser does not support HTTP Request")
 return
 }
var url="exesql.php"
url=url+"?exesql="+exesql;
url=url+"&sid="+Math.random()
xmlHttp_sql.onreadystatechange=stateback_sql 
xmlHttp_sql.open("GET",url,true)
xmlHttp_sql.send(null)
}
function select1(exesql)
{ 

 xmlHttp_sql=GetXmlHttpObject()
if (xmlHttp_sql==null)
 {
 alert ("Browser does not support HTTP Request")
 return
 }
var url="exesql1.php"
url=url+"?exesql="+exesql;
url=url+"&sid="+Math.random()
xmlHttp_sql.onreadystatechange=stateback_sql 
xmlHttp_sql.open("GET",url,true)
xmlHttp_sql.send(null)
}

function stateback_sql(){
	
} 