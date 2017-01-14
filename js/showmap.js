 var myIcon = new BMap.Icon("images/marker_blue08.png", new BMap.Size(15, 15), {    //
			imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
		  });

 var xmlHttp5

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
function sel8(t_start,t_end,saomiao_model_number_temp)
{ 

 xmlHttp5=GetXmlHttpObject()
if (xmlHttp5==null)
 {
 alert ("Browser does not support HTTP Request")
 return
 }

var url="select8.php"

url=url+"?st="+t_start+"&en="+t_end+"&n="+saomiao_model_number_temp;

url=url+"&sid="+Math.random()
xmlHttp5.onreadystatechange=stateback8 
xmlHttp5.open("GET",url,true)
xmlHttp5.send(null)

}

var pow_b=new Array();
var xx=0;
function stateback8() 
{ 
		if (xmlHttp5.readyState==4 && xmlHttp5.status ==200)
		 { 
		 var str=xmlHttp5.responseText ;
		 	 if(!str) return;

 xx=0;
	 var arrb=str.split(";");
		    for (var i = 0; i < arrb.length-1 ; i++) {

			 	 var arra= arrb[i].split(",");
      gps_lat=arra[0];
      gps_long=arra[1];
      pow_b[i]=arra[2];
     
			 var pt = new BMap.Point(arra[1], arra[0]);
			 var pointArr = [];
			 pointArr.push(pt);
			 var convertor = new BMap.Convertor();
        convertor.translate(pointArr, 1, 5, translateCallback5);

		 }


}
}

    translateCallback5 = function (data){
      if(data.status === 0) { 
        for (var i = 0; i < 1; i++) {
      if(xx==0){
      
      	 map2.panTo(data.points[0]); 
      }
        if(pow_b[xx]>=-53 && pow_b[xx]<0)
        myIcon = new BMap.Icon("images/red001.png", new BMap.Size(15, 15), {    //
			imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
		  });
    	else if(pow_b[xx]>=-58 && pow_b[xx]<-53)
    		myIcon = new BMap.Icon("images/red002.png", new BMap.Size(15, 15), {    //
			imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
		  });
    	else if(pow_b[xx]>=-63 && pow_b[xx]<-58)
    		myIcon = new BMap.Icon("images/red003.png", new BMap.Size(15, 15), {    //
			imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
		  });
    	else if(pow_b[xx]>=-68 && pow_b[xx]<-63)
    		myIcon = new BMap.Icon("images/red004.png", new BMap.Size(15, 15), {    //
			imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
		  });
    	else if(pow_b[xx]>=-73 && pow_b[xx]<-68)
    		myIcon = new BMap.Icon("images/red005.png", new BMap.Size(15, 15), {    //
			imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
		  });
    	else if(pow_b[xx]>=-78 && pow_b[xx]<-73)
    		myIcon = new BMap.Icon("images/red006.png", new BMap.Size(15, 15), {    //
			imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
		  });
    	else 
    		myIcon = new BMap.Icon("images/red007.png", new BMap.Size(15, 15), {    //
			imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
		  });
       var marker= new BMap.Marker(data.points[i],{icon:myIcon})

        var label = new BMap.Label(""+pow_b[xx]+" dbm",{offset:new BMap.Size(20,-10)});
        label.setStyle({borderColor:'#97CBFF' });
         if(pow_b[xx]==0)
        label = new BMap.Label("起点",{offset:new BMap.Size(20,-10)}); 
                label.setStyle({display:'none'});
        marker.addEventListener('mouseover',function(){
        label.setStyle({    //给label设置样式，任意的CSS都是可以的
        display:'block'
         }); 
        
         });
        marker.addEventListener('mouseout',function(){
        label.setStyle({    //给label设置样式，任意的CSS都是可以的
        display:'none'
         }); 
         });	
       marker.setLabel(label); //添加百度label
        map2.addOverlay(marker);
            xx++;
        }
      }
    }
var xmlHttp9;
 function sel9(t_start,t_end,saomiao_model_number_temp)
{ 

 xmlHttp9=GetXmlHttpObject()
if (xmlHttp9==null)
 {
 alert ("Browser does not support HTTP Request")
 return
 }

var url="select9.php"

url=url+"?st="+t_start+"&en="+t_end+"&n="+saomiao_model_number_temp;

url=url+"&sid="+Math.random()
xmlHttp9.onreadystatechange=stateback9 
xmlHttp9.open("GET",url,true)
xmlHttp9.send(null)

}

var date_b=new Array();
var yy=0;
function stateback9() 
{ 
		if (xmlHttp9.readyState==4 && xmlHttp9.status ==200)
		 { 
		 var str=xmlHttp9.responseText ;
		 	 if(!str) return;

 yy=0;
	 var arrb=str.split(";");
		    for (var i = 0; i < arrb.length-1 ; i++) {

			 	 var arra= arrb[i].split(",");
      gps_lat=arra[0];
      gps_long=arra[1];
      date_b[i]=arra[2];
     
			 var pt = new BMap.Point(arra[1], arra[0]);
			 // var pointArr = [];
			 // pointArr.push(pt);
			 // var convertor = new BMap.Convertor();
    //     convertor.translate(pointArr, 1, 5, translateCallback9);
       var marker= new BMap.Marker(pt);
      var myDate = new Date(date_b[yy]*1000);
      var buchong="";
        var buchong2="";
        if(myDate.getHours()<10)
         buchong2="0";
        if(myDate.getMinutes()<10)
          buchong="0";
     var month=  myDate.getMonth()+1;
    var label = new BMap.Label(""+buchong2+myDate.getFullYear()+"-"+month+"-"+myDate.getDate()+" "+myDate.getHours()+":"+buchong+myDate.getMinutes()+"",{offset:new BMap.Size(20,-10)});
    label.setStyle({borderColor:'#97CBFF' });
    //  if(pow_b[xx]==0)
    // label = new BMap.Label("起点",{offset:new BMap.Size(20,-10)}); 
            label.setStyle({display:'none'});
    marker.addEventListener('mouseover',function(){
    label.setStyle({    //给label设置样式，任意的CSS都是可以的
    display:'block'
     }); 
    
     });
    marker.addEventListener('mouseout',function(){
    label.setStyle({    //给label设置样式，任意的CSS都是可以的
    display:'none'
     }); 
     });  
   marker.setLabel(label); //添加百度label
    map2.addOverlay(marker);
       yy++;

		 }


  }
  }

// translateCallback9 = function (data){
//   if(data.status === 0) { 
//     for (var i = 0; i < 1; i++) {
//   // if(yy==0){
  
//   // 	 map.panTo(data.points[0]); 
//   // }

//     }
//   }
// }
