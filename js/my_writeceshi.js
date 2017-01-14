// 适应手机屏幕
$(document).ready(function(){
	var width = $(window).width();
	if(width<=360) {
		$('#footer a').css({'margin-left':'10px','font-size':'15px'});
	}
	else if (width<=375) {
		$('#footer a').css({'margin-left':'25px','font-size':'15px'});	
	}
	else if (width<=435) {
		$('#footer a').css({
					'margin-left':'26px',
					'margin-right':'26px',
					'font-size':'15px'});	
	}
	else if (width<=1024) {
		$('#footer a').css({
					'margin-left':'46px',
					'margin-right':'46px',
					'font-size':'20px'});	
	}	

	//设备搜索框的宽度
	if(width <=400) {
		$('input.form-control').css('width','120px');
	}

	// 页脚切换
	var $tab_a = $('.tab_menu a');
	$tab_a.click(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		var index = $tab_a.index(this);
		$(".tab_box > div").eq(index).show().siblings().hide();
	});	
	// 页脚切换 end
	
	// 头部加号开始
	
	$('#header_add').click(function(e){
		if($('#plus_sign .plus_sign_logoin').is(':hidden')) {
			$('#plus_sign .plus_sign_logoin').show('fast');
		}
		else {
			$('#plus_sign .plus_sign_logoin').hide('fast');
		}

		$(document).one('click',function(){
			$('#plus_sign .plus_sign_logoin').hide();
		});

		e.stopPropagation();
		
	});

	$('#plus_sign .plus_sign_logoin').click(function(e) {
		e.stopPropagation();
	})
	// 头部加号 end
	

	// 在使用bootstrap 底部导航当内容超过一屏的时候
	//底部的部分内容会被固定的导航内容遮盖 开始
	
	//解决底部自动导航的问题  
	function autoNav() {
	  var bodyHeight=$('body').height();
	  var navHeight = $('.navbar_bottom').height();
	  var iHeight = document.documentElement.clientHeight||document.body.clientHeight;

	  if(bodyHeight>(iHeight-navHeight)) {
	      $('body').append('<div style="height: '+ navHeight +'px"></div>');
	    }
	}

	autoNav();


	// 在使用bootstrap 底部导航当内容超过一屏的时候
	
	//底部的部分内容会被固定的导航内容遮盖 end
	// 由扫描记录切换到历史图表开始
	$('#my_tb_chart').click(function(){
		$('.lsjl_table').show();
		$('.lsjl_map ').hide();

	});
	$('#my_tb_map').click(function(){
		$('.lsjl_table').hide();
		$('.lsjl_map ').show();

	});
	// 由扫描记录切换到历史图表 end
	

	//扫描记录 跟踪记录 开始
	
	$('#smjl').click(function(){
		$('#lishi_back').show(); //返回箭头
		$('#sb_shebei_bg').css('display','none');
		$('#lishi_my_tab').css('display','block');
		$('#myModal').modal('hide');
		$('#chart_map_tab').hide();
		$('#footer').hide();
	});

	$('#lishi_back').click(function(){
		if($('.lsjl_map').show()){
			$('.lsjl_map').hide();
			$('.lsjl_table').show();
		}

		$('#lishi_back').hide();
		$('#sb_shebei_bg').fadeIn(); //显示
		$('#lishi_my_tab').fadeOut(); //隐藏
		$('#sm_select').css('display','block');
		$('#footer').show();
	});
		
	// 设备列表页表格开始
	machine1();
	machine();
	function machine(){
	$.ajax({
		type: "POST",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		url: "machine.php",
		// data: {machineid : shebei_number,
		// 		ml:ml
		// },
		success: function(data) {
			if(refresh_mac)
			$('#list_table').bootstrapTable('load', data);
					if(timer3) {
						window.clearTimeout(timer3);
						timer3='';
					}
					timer3=window.setTimeout(function(){

					machine();
				},10000);
			}
		});
	}		
	

	// 由跟踪记录切换到历史地图开始
	$('#gzjl').click(function(){
		$('#lishi_back').show(); //返回箭头
		$('#sb_shebei_bg').css('display','none');
		$('#lishi_my_tab').css('display','block');
		$('#chart_map_tab').show();
		$('#footer').hide();
	});
	// 由扫描记录切换到历史图表 end	

	function machine1(){
	$('#list_table').bootstrapTable({
		// url: 'machine.php',
		// method:'post',
		striped: 'true', //是否显示隔行变色
		cache: 'false', //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
		pagination:'true', //是否显示分页（*）
		// showRefresh: 'true',
		minimumCountColumns: '2', //最少允许的列数
		uniqueld: 'id',
		clickToSelect: 'true', //设置true 将在点击行时，自动选择rediobox 和 checkbox
		toolbar: '#toolbar',  //一个jQuery 选择器，指明自定义的toolbar 例如:#toolbar, .toolbar.
		radio: 'true', //开启单选按钮
		onClickRow:function(row, $element, field){
         // alert(row.id);
         refresh_mac=false;  
       $("#btn3").click(); 
        // saomiao_model_number =  row.model_number; //设备型号   
        }
		});
	}

	var $table = $('#list_table');
	var $btn2 = $('#btn2');
	var $btn1 = $('#btn1');
	//模态框开始扫描
	$("#kssm").click(function(){
	var list1select=$('#list_table').bootstrapTable('getSelections');
	 saomiao_model_number=list1select[0].model_number;//重新获取设备号
	  $('#sm_select').css("display","block");
	$("#btn2").click();

	 //停止当前的跟踪 并清空地图
	 flag_gz=false;
	 map.clearOverlays();

		// $('#myModal').modal('hide');
	});
	//模态框关闭设备
	$("#gbsb").click(function(){
		var list1select=$('#list_table').bootstrapTable('getSelections');
	 saomiao_model_number_temp=list1select[0].model_number;//重新获取设备号
		$("#btn1").click();
		// $('#myModal').modal('hide');
	});
	//模态框添加设备
	$("#tjsb").click(function(){
		$("#btn0").click();
		// $('#myModal').modal('hide');
	});
	//模态框删除设备
	$("#scsb").click(function(){
		var list1select=$('#list_table').bootstrapTable('getSelections');
	    saomiao_model_number_temp=list1select[0].model_number;//重新获取设备号
		$("#btn4").click();
		// $('#myModal').modal('hide');
	});
	
	//模态框跟踪信道
$("#gzwjz").click(function(){
	var list1select=$('#jz_charts').bootstrapTable('getSelections');
	 sm_xindao_number=list1select[0].charts_route;//重新信道号
	flag_gz=true;
	$("#btn_sm_zz").click();
	// $('#myModal').modal('hide');
});
	//模态框扫描记录
$("#smjl").click(function(){
	var list1select=$('#list_table').bootstrapTable('getSelections');
	 saomiao_model_number_temp=list1select[0].model_number;//重新获取设备号
	 phpfilename="saomiaojilu.php";
	 t_start=0;
	 t_end=0;

	 $('#sm_select').css("display","none");
	 $('#my_tb_map').css("display","none");
	 $('#allmap2').css("display","none");
	 $('#hello').val(""); 
	 $('#hello2').val(""); 
	 $('#headls').html("扫描历史记录"); 
	 $('#satisc').click();
	 
});
	//模态框跟踪记录
$("#gzjl").click(function(){
	var list1select=$('#list_table').bootstrapTable('getSelections');
	 saomiao_model_number_temp=list1select[0].model_number;//重新获取设备号
	  phpfilename="genzongjilu.php";
	 t_start=0;
	 t_end=0;
	  $('.lsjl_table').hide();
	  $('.lsjl_map ').show();
	  $('#sm_select').css("display","none");
	  $('#my_tb_map').css("display","block");
	  $('#allmap2').css("display","block");
	  map2.clearOverlays();
	  $('#hello').val("");
	  $('#hello2').val("");  
	  $('#headls').html("跟踪历史记录"); 
	 $('#satisc').click();

});
//添加设备
	$("#btn0").click(function(){
  		var name=prompt("请输入设备ID","");//将输入的内容赋给变量 name ，
        if(name){
            var sql="insert into zidian (userflag,machineid,date) values("+userflag+",'"+name+"',0)";
            select(sql);
           
            alert("设备添加成功！")
	}
	});
	//本地管理
	$("#bdgl").click(function(){
		var name=prompt("请输入设备IP","");//将输入的内容赋给变量 name ，
	    if(name){
	      
	    	var index = layer.open({
				type: 2,
				content: 'http://'+name,
				area: ['320px', '195px'],
				maxmin: true
				});
			layer.full(index);
		}
	});
	//删除设备
	$("#btn4").click(function(){
         if(confirm("你确定要删除设备吗？")){
        var sql="delete from zidian where userflag="+userflag+" and machineid='"+saomiao_model_number_temp+"'";
            select(sql);
            
         }
	});
	  $(function () { $('#myModal').on('hide.bs.modal', function () {
      refresh_mac=true;
      })
   });
	  $(function () { $('#myModal2').on('hide.bs.modal', function () {
       refresh_sao=true;
       })
   });
	// 关闭按钮
	$btn1.click(function(){
		mingling(saomiao_model_number_temp,"EXTRACMD=shutdown");
	});
	var saomiao_model_number;
	var saomiao_model_number_temp;
	var phpfilename="";
	//命令格式：EXTRACMD=SCAN:gsm900  EXTRACMD=monitor:49 EXTRACMD=SCAN:gsm1800 EXTRACMD=SCAN:gsm-r	EXTRACMD=shutdown
	function mingling(shebei_number,ml) {
		// console.log(shebei_number);
		$.ajax({
			type: "GET",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			url: "mingling.php",
			data: {machineid : shebei_number,
					ml:ml
			},
			success: function(data) {
				return data;
			}
		});
	}

	// 关闭按钮end


	// 获取设备列表数据开始 扫描按钮

	$('.selected').click(function(){
		$('.shebei_list').show();
	});


	$btn2.click(function(){

        mingling(saomiao_model_number,"EXTRACMD=SCAN:gsm900");
        saomiao_table();
        
        chartAjax(saomiao_model_number) ;   
        
       
        //控制扫描显示
        $('.saomiao_chart').show();
		$('.shebei_list').hide();
		$('.shebei').removeClass('selected');
		$('.saomiao').addClass('selected');

		$('#panel_table').css('display','block');
		$('#check_sb').css('display','none');
	
				
	});	
	// 获取设备列表数据end
	
	//设备列表页表格end

	var timer1 = '';//扫描
	var timer2 = '';//跟踪
	var timer3 = '';//设备列表
	var refresh_mac=true;//是否更新设备表格
	var refresh_sao=true;//是否更新扫描列表
	var flag_gz=true;//跟踪标志
	// var datajson;
    function chartAjax(a) {
    	$.ajax({
    		type: "GET",
    		contentType: "application/json; charset=utf-8",
    		dataType: "json",
    		url: "saomiao.php",
    		data: {'RID':a},
    		success: function(data){
    			if(refresh_sao)   			
    			$('#jz_charts').bootstrapTable('load', data);
    			var heng = new Array();
				var shu = new Array();
    			var len = data.length;

    			for(i = 0;i < len;i++) {
    				//显示设备位置
            			if(i==0){
            			var point = new BMap.Point(data[0].long,data[0].lat);
						var geoc = new BMap.Geocoder();
						var pt =  point;
						var pt_z;
						var convertor = new BMap.Convertor();
				        var pointArr = [];
				        
				        pointArr.push(pt);

				        translateCallback = function (data){
					      if(data.status === 0) {

						       pt_z= data.points[0];
						       	
						       	//逆地址解析
								geoc.getLocation(pt_z, function(rs){
									var addComp = rs.addressComponents;
									var add=addComp.city + "" + addComp.district + "" + addComp.street + "" + addComp.streetNumber;
									$('#dev_address').html("设备位置："+add);
								});
					       }
					    }

				        convertor.translate(pointArr, 1, 5, translateCallback);

						}
					heng.push(parseInt(data[i].charts_route));
					shu.push(parseFloat(data[i].charts_power));
				}

				var jz_number = heng.length;
				$('.jz_number').text(jz_number);

				LoadGrid(heng, shu); //调用初始化

				heng.splice(0,heng.length);
				shu.splice(0,shu.length);
    		},
    		error: function() {
        		alert("失败，请稍后再试！");
     		}
    	});

    	if(timer1) {
			window.clearTimeout(timer1);
			timer1='';
		}

		timer1=window.setTimeout(function(){
			chartAjax(a);
		},10000)
    }    


    // 信道模式开始 gsm900 gsm1800 gsm-r
    $('#sm_select').change(function(){
	    var sm_checkValue = $('#sm_select').val();
		console.log(sm_checkValue);
		console.log(saomiao_model_number);
		mingling(saomiao_model_number,sm_checkValue)
    });


    // 信道模式end
    
	// 扫描图表界面开始
	function saomiao_table(){
		$('#jz_charts').bootstrapTable({
			// data-url:mid,
			// url: "saomiao.php?RID="+mid,
			// method:'post',
			// data:mid,
			striped: 'true', //是否显示隔行变色
			cache: 'false', //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
			pagination:'true', //是否显示分页（*）
			//showRefresh: 'true', //是否显示刷新按钮
			showColumns: 'true', //是否显示内容列下拉框
			pagination: 'true', //是否显示分页
			pageSize: '6',     //每页显示行数
			minimumCountColumns: '2', //最少允许的列数
			uniqueld: 'id',    
			clickToSelect: 'true', //设置true 将在点击行时，自动选择rediobox 和 checkbox
			toolbar: '#saomiao_zuizong',  //一个jQuery 选择器，指明自定义的toolbar 例如:#toolbar, .toolbar.
			radio: 'true', //开启单选按钮
			onClickRow:function(row, $element, field){
         	// alert(row.id);
         	refresh_sao=false;   
       		$("#btn5").click();   
       		 // sm_xindao_number =  row.charts_route; //信道号 
       		 $('#gzwjz').html("跟踪信道 ["+row.charts_route+"]");
        	},
        	rowStyle:function rowStyle(row, index) {
        		var classes = ['active', 'success', 'info', 'warning', 'danger'];
        		if (row.charts_cellid==50707) {
           			 return {
               		 	classes: classes[4]
            		 };
        		}
				return {};
			},
						
			// showColumn, 'name',  显示列
			// hideColumn:'charts_snr',  隐藏某一列
		});	
		$('#jz_charts').bootstrapTable('hideColumn', 'charts_frequency');
		$('#jz_charts').bootstrapTable('hideColumn', 'charts_snr');
		$('#jz_charts').bootstrapTable('hideColumn', 'charts_mcc');
		$('#jz_charts').bootstrapTable('hideColumn', 'charts_mnc');
		$('#jz_charts').bootstrapTable('hideColumn', 'charts_yunyingshang');
	}
	// 扫描图表界面end	
	


	// 模拟开始 定时刷新数据库
	// var qz = 128175;
	// var qz=128300;
	
	// var saomiao_model_number;
	var sm_xindao_number;	
	// 跟踪界面开始
	$('#btn_sm_zz').click(function(){
		$('.saomiao_chart').hide();
		$('.gz_map').show();
		$('.saomiao').removeClass('selected');
		$('.genzong').addClass('selected');

		mingling(saomiao_model_number,"EXTRACMD=monitor:"+sm_xindao_number)
		// simulate_mn();模拟数据插入
		mapAjax(saomiao_model_number,sm_xindao_number);
	});

    var maxtime=0;
    var power=0;
    var time_dingwei=1;
	function mapAjax(sb_number,xd_number){
		$.ajax({
			type: "GET",
			contentType: "application/json; charset=utf-8",
			dataType: 'json',
			url: "genzong.php",
			data: {
				sb_number : sb_number,
				xd_number : xd_number
			
			},
			success: function(data) {
				if(! flag_gz) return;
					if(timer2) {
						window.clearTimeout(timer2);
						timer2='';
					}

					timer2=window.setTimeout(function(){
						// mapAjax(data[0].machineid,data[0].arfcn,data[0].date);
						mapAjax(sb_number,xd_number);
						// qz=qz+3;
						// simulate_mn();模拟数据插入
						if(time_dingwei%6==0){ 
						dingwei(sb_number,xd_number);}
						time_dingwei++;
					},10000)

					if(data.length==0) return;

					if(maxtime==data[0].date) {return;};
					
                 	maxtime=data[0].date;
                 	if(time_dingwei==1){return;}
					var point = new BMap.Point(data[0].gps_long, data[0].gps_lat);
					
					power=data[0].charts_power;
					
					var convertor = new BMap.Convertor();
			        
			        var pointArr = [];
			        
			        pointArr.push(point);
			        translateCallback = function (data){
				        if(data.status === 0) {
				      	    if(power>=-53 && power<0)

					        myIcon = new BMap.Icon("images/red001.png", new BMap.Size(15, 15), {    //
								imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
							  });

					    	else if(power>=-58 && power<-53)

					    		myIcon = new BMap.Icon("images/red002.png", new BMap.Size(15, 15), {    //
								imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
							  });

					    	else if(power>=-63 && power<-58)

					    		myIcon = new BMap.Icon("images/red003.png", new BMap.Size(15, 15), {    //
								imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
							  });

					    	else if(power>=-68 && power<-63)
					    		myIcon = new BMap.Icon("images/red004.png", new BMap.Size(15, 15), {    //
								imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
							  });

					    	else if(power>=-73 && power<-68)
					    		myIcon = new BMap.Icon("images/red005.png", new BMap.Size(15, 15), {    //
								imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
							  });

					    	else if(power>=-78 && power<-73)
					    		myIcon = new BMap.Icon("images/red006.png", new BMap.Size(15, 15), {    //
								imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
							  });

					    	else 
					    		myIcon = new BMap.Icon("images/red007.png", new BMap.Size(15, 15), {    //
								imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
							  });

					       	var marker= new BMap.Marker(data.points[0],{icon:myIcon})

					        var label = new BMap.Label(""+power+" dbm",{offset:new BMap.Size(20,-10)});
					        
					        label.setStyle({borderColor:'#97CBFF' });
					        map.panTo(data.points[0]);  
					        
					         if(power==0)
					        
					        label = new BMap.Label("起点",{offset:new BMap.Size(20,-10)}); 
					                // label.setStyle({display:'none'});
					        
					        marker.addEventListener('click',function(){
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
					        
					        map.addOverlay(marker);
				        }
				    }
			        convertor.translate(pointArr, 1, 5, translateCallback);
			        //坐标转换完之后的回调函数
			    },
			error: function(){
				console.log('异常');
			}
		});
	}


		//定位
		var jlwc;//距离误差
		var EARTH_RADIUS = 6378137.0; 
		var PI = Math.PI; 
		var dingwei_mark;
		var dingwei_lab;
		// var timerer4;
		var show10;//显示定位的十个点
		var pw_10= new Array();
		function dingwei(n,x) {
		$.ajax({
			type : "GET",
			contentType: "application/json; charset=utf-8",
			dataType: 'json',
			url: "dingwei.php",
			data: {n:n,
				   x:x
			},
			success : function(dat){
								if(dat.length==0) return;
								 var jing= new Array();//全部数据中的经度
							     var wei= new Array();//全部数据中的纬度
							     var pw= new Array();//全部数据中的功率
							     var maxpow=-300;//最大功率初始化时的值
							     var zx_jing;//功率最大时的经度
								 var zx_wei;//功率最大时的纬度
							     var j500=new Array();//中心点附近500米的点的经度
							     var w500=new Array();//中心点附近500米的点的纬度
							     var p500=new Array();//中心点附近500米的点的功率
							     var ind500=0;//中心点附近500米的点的数组的索引
							     var j_ge=new Array();//一个网格内只保留一个点的经度
							     var w_ge=new Array();//一个网格内只保留一个点的纬度
							     var p_ge=new Array();//一个网格内只保留一个点的功率
							     var ind_ge=0;//一个网格内只保留一个点的数组的索引
							     var gdwg=new Array();//固定网格坐标点数组
							     var flag70=false;//如果其中一个点的功率大于-70就可以计算定位
							     var min=999999999999999;//平方和初始化值
							     var dingweij;//定位点的经度
							     var dingweiw;//定位点的纬度
							          show10=0;

							   	 // var arrb=str.split(";");
								 //得到功率最大值的点的经纬度和功率
								 for (var i in dat) {
								 	  // var arra= arrb[i].split(",");
								      wei[i]=parseFloat(dat[i].gps_lat);
								      jing[i]=parseFloat(dat[i].gps_long);
								      pw[i]=parseFloat(dat[i].power);
								      if(parseFloat(pw[i])>parseFloat(maxpow)){
								      	maxpow=pw[i];
								      	zx_jing=jing[i];
								      	zx_wei= wei[i]
								      }
								 }
								 var m=zx_jing-0.005;//以中心点为心，画正方形
								 var n=zx_jing+0.005;//
								 var p=zx_wei-0.005;//
								 var q=zx_wei+0.005;//
								 //保留中心点附近500米内的点
								 for (var i = 0; i < dat.length ; i++) {
								 	if(Math.abs(jing[i]-zx_jing)<0.005 && Math.abs(wei[i]-zx_wei)<0.005){
								 		j500[ind500]=jing[i];
								 		w500[ind500]=wei[i];
								 		p500[ind500]=pw[i];
								 		ind500++;
								 	}
								 }
								 //以(zx_jing-0.005,zx_wei-0.005)为坐标原点，画网格，每个网格只取最大的点，由于功率从大到小排序，算法为：把后来的格内数据自动去掉
								 for (var i = 0; i < ind500 ; i++) {
								 	var  wgzb_temp=parseInt((j500[i]-zx_jing+0.005)/0.0005)+"_"+parseInt((w500[i]-zx_wei+0.005)/0.0005);
								 	//等于0，表示有重复，自动去掉
								 	if($.inArray(wgzb_temp,gdwg)==-1){
								 		gdwg[ind_ge]=wgzb_temp;
								 		j_ge[ind_ge]=j500[i];
								 		w_ge[ind_ge]=w500[i];
								 		p_ge[ind_ge]=p500[i];
								 		pw_10[ind_ge]=p500[i];
								 		if(p_ge[ind_ge]>-60){
								 			flag70=true;
								 		}
								 		ind_ge++;
								 	}
								 }
								 //如果单点功率不够大，或者数据点不够，则不计算定位，返回
								 if(!flag70 && ind_ge<50){
								 	return;
								 }
								 else{
								 	for(var xxx = -30; xxx<=30; xxx=xxx+10){
								 		for(var yyy = 25; yyy<=40; yyy=yyy+5){
								 			for (var j = m; j<=n; j=parseFloat(j)+0.0001) {
								 				for (var w = p; w<=q; w=parseFloat(w)+0.0001) {
								 					var sum=0;
								 					if(ind_ge>50) ind_ge=50;
								 					for (var d = 0; d<ind_ge; d++) {
								 						// for (var d = 0; d<10; d++) {
								 						var juli=getj(w,j,w_ge[d],j_ge[d]).toFixed(1);
								 						if(juli<10){
								 							continue;
								 						}
								 						var juli_ef=parseFloat(Math.pow(10,xxx-p_ge[d]/yyy).toFixed(1));
								 						var jlbj=juli_ef;
								 						if(jlbj<juli){
								 							jlbj=juli;
								 						}
								 						
								 						sum=sum+(Math.pow(juli-juli_ef,2)/Math.pow(jlbj,2)); 
								 					}
								 					if(sum<min){
								 						min=sum;
								 						dingweij=j;
								 						dingweiw=w;
								 						ef_x=xxx;
								 						ef_y=yyy;
								 					 
								 					}
								 				}
								 			}
								 			
								 		}
								 	}
								 	jlwc=parseFloat((min*Math.pow(10,(xxx-maxpow)/yyy)).toFixed(1));
								 	var gg004 = new BMap.Point(dingweij,dingweiw);
								 	savewjz(dingweij,dingweiw);
								 	var convertor4 = new BMap.Convertor();
								 	var pointArr004 = [];
								 	pointArr004.push(gg004);
								 	convertor4.translate(pointArr004, 1, 5, translateCallback8);
								 }//
			}		
		});


	}

	translateCallback8 = function (data){
	if(data.status === 0) { 
		if(dingwei_mark){

		}
		var myDate = new Date();
		var marker= new BMap.Marker(data.points[0]);
        var marker2= new BMap.Marker(data.points[0]);//一分钟后自动被删除
        // //保存定位点
        // savewjz(data.points[0].lng,data.points[0].lat);
        setTimeout(function(){
				// map.removeOverlay(marker2);
			},60000)
        var buchong="";
        var buchong2="";
        if(myDate.getHours()<10)
       	 buchong2="0";
        if(myDate.getMinutes()<10)
          buchong="0";
        var jlwc_temp=jlwc;
        var label = new BMap.Label(""+buchong2+myDate.getHours()+":"+buchong+myDate.getMinutes()+" 误差"+jlwc_temp+"米",{offset:new BMap.Size(20,-10)});
        var label2 = new BMap.Label(""+buchong2+myDate.getHours()+":"+buchong+myDate.getMinutes()+" 误差"+jlwc_temp+"米",{offset:new BMap.Size(20,-10)});
        label.setStyle({display:'none'});//鼠标滑动时才显示，此时不显示
        marker.addEventListener('click',function(){
	        label.setStyle({    //给鼠标移入
	        	display:'block'
	        }); 
        });
        marker.addEventListener('mouseout',function(){
	        label.setStyle({    //鼠标移出
	        	display:'none'
	         }); 
        });
        marker2.setLabel(label2);
        marker.setLabel(label); //添加百度label
        map.addOverlay(marker);
        map.addOverlay(marker2);
		}
	}

	function getRad(d){ 
	return d*PI/180.0; 
	} 

	function getj(lat1,lng1,lat2,lng2){ 
	var radLat1 = getRad(lat1); 
	var radLat2 = getRad(lat2); 

	var a = radLat1 - radLat2; 
	var b = getRad(lng1) - getRad(lng2); 

	var s = 2*Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) + Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2))); 
	s = s*EARTH_RADIUS; 
	s = Math.round(s*10000)/10000.0; 
	return s; 
	} 	
//扫描记录查询
		var t_start=0;
		var t_end=0;
	$('#jz_charts2').bootstrapTable({
		// data-url:mid,
		// url: "genzongjilu.php?RID="+saomiao_model_number_temp+"&start="+t_start+"&end="+t_end,
		// method:'post',
		// data:mid,
		striped: 'true', //是否显示隔行变色
		cache: 'false', //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
		pagination:'true', //是否显示分页（*）
		//showRefresh: 'true', //是否显示刷新按钮
		showColumns: 'true', //是否显示内容列下拉框
		pagination: 'true', //是否显示分页
		pageSize: '6',     //每页显示行数
		minimumCountColumns: '2', //最少允许的列数
		uniqueld: 'id',    
		clickToSelect: 'true', //设置true 将在点击行时，自动选择rediobox 和 checkbox
		// toolbar: '#saomiao_zuizong',  //一个jQuery 选择器，指明自定义的toolbar 例如:#toolbar, .toolbar.
		radio: 'true', //开启单选按钮

	});	
$('#satisc').click(function(){
    $('#jz_charts2').bootstrapTable('refresh',{url:phpfilename+"?RID="+saomiao_model_number_temp+"&start="+t_start+"&end="+t_end});
	$('#jz_charts2').bootstrapTable('hideColumn', 'charts_frequency');
	$('#jz_charts2').bootstrapTable('hideColumn', 'charts_snr');
	$('#jz_charts2').bootstrapTable('hideColumn', 'charts_mcc');
	$('#jz_charts2').bootstrapTable('hideColumn', 'charts_mnc');
	$('#jz_charts2').bootstrapTable('hideColumn', 'charts_yunyingshang');
	if(phpfilename=="genzongjilu.php" && t_start>0){
		 map2.clearOverlays();
	    sel8(t_start,t_end,saomiao_model_number_temp);
		sel9(t_start,t_end,saomiao_model_number_temp);
		}
})

var d = new Date();
var str = 
laydate({
  elem: '#hello', //目标元素。由于laydate.js封装了一个轻量级的选择器引擎，因此elem还允许你传入class、tag但必须按照这种方式 '#id .class'
  event: 'focus', //响应事件。如果没有传入event，则按照默认的click
  format: 'YYYY-MM-DD', // 
  istoday: false, //是否显示今天

  choose: function(datas){ //选择日期完毕的回调
	    var timestamp = Date.parse(new Date(datas));
		t_start = (timestamp / 1000)-8*60*60;
	  }
});
laydate({

  elem: '#hello2', //目标元素。由于laydate.js封装了一个轻量级的选择器引擎，因此elem还允许你传入class、tag但必须按照这种方式 '#id .class'
  event: 'focus', //响应事件。如果没有传入event，则按照默认的click
  format: 'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
  istoday: false, //是否显示今天

  choose: function(datas){ //选择日期完毕的回调
	    
	    var timestamp = Date.parse(new Date(datas));
		t_end = (timestamp / 1000)-8*60*60;
		 }
});

function savewjz(j,w){
	  	var tm=Date.parse(new Date())/1000;
        var sql="insert into monitoring_wjz (date,machineid,gps_long,gps_lat) values("+tm+",'"+saomiao_model_number+"',"+j+","+w+")";
        select(sql);  
}




	// 模拟开始 定时刷新数据库 end
});

