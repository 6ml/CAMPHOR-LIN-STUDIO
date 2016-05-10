$(document).ready(function(){

	//轮播图
	var index = 0;
	var timer = null;
	$('.turnsnav').bind('click',function(){ //点击切换
		clearInterval(timer);
		index = $(this).index();
		showTurnsImg();
		timer = setInterval(changeTurnsAuto,3000);
	})
	function changeTurnsAuto(){ //自动轮播
		if(index != $('.turnsimg').length-1)
			index++;
		else index = 0;
		showTurnsImg();
	}
	function showTurnsImg(){  //显示轮播图
		$('.turnsimg').hide();
		$('.turnsimg').css('opacity','0.5');
		$('.turnsnav').css('backgroundColor','#c9c9c9');
		$('.turnsimg').eq(index).show();
		$('.turnsimg').eq(index).fadeTo(1000,1);
		$('.turnsnav').eq(index).css('backgroundColor','#FF7F47');
	}
	timer = setInterval(changeTurnsAuto,3000);

	//头部导航
	$('.title_li').click(function(){  
		$('.paging').hide();
		$('.paging').eq($(this).parent().index()).fadeTo(1000,1);
	})

	//业务申请中图片移入移出
	$('#busimg_web').mouseover(function(){  
		$(this).attr('src','images/webdevelopfoucs.png');
	})
	$('#busimg_web').mouseout(function(){
		$(this).attr('src','images/webdevelop.png');
	})
	$('#busimg_app').mouseover(function(){
		$(this).attr('src','images/appfoucs.png');
	})
	$('#busimg_app').mouseout(function(){
		$(this).attr('src','images/app.png');
	})
	$('#busimg_design').mouseover(function(){
		$(this).attr('src','images/designfoucs.png');
	})
	$('#busimg_design').mouseout(function(){
		$(this).attr('src','images/design.png');
	})

	//二级下拉菜单
	$('.first_level').bind('mouseover',function(){   
		$('.second_level').eq($(this).index()).slideDown();
	})
	$('.first_level').bind('mouseout',function(){
		$('.second_level').eq($(this).index()).hide();
	})
	$('.second_level').bind('mouseover',function(event){
		$(this).show();
		event.stopPropagation();
	})
})