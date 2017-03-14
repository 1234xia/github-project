$(function(){
	// 侧边栏-回到顶部
	$(".fr-gotop").click(function(){
		$("body").animate({
			scrollTop:0,
		},300);
	})

	// 滚动事件
	$(window).scroll(function scrolls(){
		// 回到顶部
		var scrolltop = $(this).scrollTop();
		if (scrolltop>20){
			$(".fr-gotop").css({display:"block"});
		}else{
			$(".fr-gotop").css({display:"none"});
		}
		if (scrolltop>300) {
			$(".fixed-search").css({
				display:"block",
				top:0
			});
		}else{
			$(".fixed-search").css("display","none");
		}
	})

	// 小图点击事件
	$(".small-picbox>ul>li").bind("mouseover",function(){
		$(".picbox>.mid-pic>img").attr("src","img/midpic"+($(this).index()+1)+".jpg");
		$(".picbox>.big-pic>img").attr("src","img/bigpic"+($(this).index()+1)+".jpg");
	})
	// 放大镜
	$(".picbox .mid-pic").bind("mousemove",function(event){
		var mousex = event.pageX;
		var mousey = event.pageY;
		var l = mousex-$(this).offset().left-$(".overlay").width()/2;
		var t = mousey-$(this).offset().top-$(".overlay").height()/2;
		// 使透明div不离开small-img
		if(l<0){
			l=0;
		}else if(l>$(this).width()-$(".overlay").width()){
			l=$(this).width()-$(".overlay").width();
		}
		if(t<0){
			t = 0;
		}else if(t>$(this).height()-$(".overlay").height()){
			t=$(this).height()-$(".overlay").height();
		}
		$(".overlay").css({
			left:l,
			top:t
		});
		$(".big-pic img").css({
			marginLeft:-l,
			marginTop:-t
		});

	}).hover(function(){
		$(".overlay,.big-pic").show();
	},function(){
		$(".overlay,.big-pic").hide();
	})

	// 款式的点击事件
	$(".style li").bind("click",function(){
		$(this).css("borderColor","#e14958").siblings().css("borderColor","#fff");
		$(".picbox>.mid-pic>img").attr("src","img/goodstyle"+($(this).index()+1)+"-mid.jpg")
		$(".picbox>.big-pic>img").attr("src","img/goodstyle"+($(this).index()+1)+"-big.jpg")
	})

	// 尺码点击事件
	$(".goodsize li").bind("click",function(){
		$(this).css("borderColor","#e14958").siblings().css("borderColor","#d7d7d7");
	})

	// 点击数量
	$(".goodsnumber a").bind("click",function(){
		if ($(this).index()==0) {
			var num = $(".number").val();
			num = parseInt(num)+1;
			if (num>5) {
				alert("热销商品，已达到销售上限！");
			}else{
				$(".number").val(num);
			}
		}else{
			var num = $(".number").val();
			num = parseInt(num)-1;
			if (num<1) {
			}else{
				$(".number").val(num);
			}
		}
	})

	// 其他商品轮播
	var index = 1;
	var timer;
	var addWidth = $(".anothergoods-box").width();
	var len = $(".anothergoods-ul>li").length-2;

	function showimg(offset){
		var left=parseInt($(".anothergoods-ul").css("left"))+offset;
		$(".anothergoods-ul").animate({"left":left},500,function(){
			if(left>=0){
				$(".anothergoods-ul").css("left",-addWidth*len);
			}
			if(left<(-addWidth*len)){
				$(".anothergoods-ul").css("left",-addWidth);
			}
		});
		$(".pnum>span").html(index);
	}
	$(".left").click(function(){
		if ($(".anothergoods-ul").is(":animated")) {return};
		if(index==1){
			index=2;
		}else{
			index--;
		}
		showimg(addWidth);
	})
	$(".right").click(function(){
		if ($(".anothergoods-ul").is(":animated")) {return};
		if(index==2){
				index=1
			}else{
				index++;
			}
		showimg(-addWidth);
	})
})