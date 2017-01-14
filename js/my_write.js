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
	
	// $('#btn1').click(function(){
	// 	$('.saomiao_chart').show();
	// 	$('.shebei_list').hide();
	// 	$('.shebei').removeClass('selected');
	// 	$('.saomiao').addClass('selected');
	// });

	// $('.selected').click(function(){
	// 	$('.shebei_list').show();
	// });


	
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

  $(document).ready(function(){
    autoNav();
  });

	// 在使用bootstrap 底部导航当内容超过一屏的时候
	
	//底部的部分内容会被固定的导航内容遮盖 end
	
	// 设备列表页表格开始
	$('#list_table').bootstrapTable({
		url: 'json/data.json',
		method:'post',
		striped: 'true', //是否显示隔行变色
		cache: 'false', //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
		pagination:'true', //是否显示分页（*）
		search: 'true',   //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
		showRefresh: 'true',
		showToggle: 'true',//是否显示详细视图和列表视图的切换按钮
		minimumCountColumns: '2', //最少允许的列数
		uniqueld: 'id',
		clickToSelect: 'true', //设置true 将在点击行时，自动选择rediobox 和 checkbox
		toolbar: '#toolbar',  //一个jQuery 选择器，指明自定义的toolbar 例如:#toolbar, .toolbar.
		radio: 'true', //开启单选按钮
	});

	// 获取设备列表数据开始

	$('#btn2').click(function(){
	$('.saomiao_chart').show();
	$('.shebei_list').hide();
	$('.shebei').removeClass('selected');
	$('.saomiao').addClass('selected');
	});

	$('.selected').click(function(){
		$('.shebei_list').show();
	});

	var $table = $('#list_table');
	var $btn2 = $('#btn2');
	$btn2.click(function(){
		var shebei_number = $table.bootstrapTable('getSelections')

        	// console.log(shebei_number[0].model_number); //可以直接读取

            var shebei_number = JSON.stringify($table.bootstrapTable('getSelections'))  //将JSON格式转换为字符串      

            var shebei_number = eval('('+ shebei_number + ')'); //将字符串转换为JSON格式
            
            console.log(shebei_number[0].model_number);
	});

	// 获取设备列表数据end

	//设备列表页表格end
});

