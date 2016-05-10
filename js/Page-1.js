$('.page_num a:lt(4)').show();
$('.page_num a:gt(8)').show();
$('.page_num p:gt(7)').show();

// .page_num:first-child a{
// 	background-color: #67dab3;
// 	color: #fff;
// }

$(document).ready(function(){
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
