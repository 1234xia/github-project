$(function(){

	// 顶部图片关闭
	$("header .imgclose").bind("click",function(){
		$(this).fadeOut();
		$("header .top-img").slideUp();
	})

	// 头部商品横向分类导航-精选配件-更多
	$("header .goods-bar>.goods-nav>li:nth-child(4)").hover(function(){
		$(".goods-nav-child-more").delay("slow").slideDown();
	},function(){
		$(".goods-nav-child-more").delay("slow").slideUp();
	})

	// 中间内容
	var index = 1;
	var timer;
	var adWidth = $(".showimg>img:first").width();
	function showadv(){
		$(".showimg>img").eq(index).css("display","block");
		$(".showimg>img").eq(index).css("left",adWidth+"px");
		for (var i = 0; i < $(".showimg>img").length; i++) {
			$(".showimg>img").eq(i).animate({left:"-="+adWidth+"px"},200);
			// 圆圈样式
			if (i==index) {
				$(".showimg .num a").eq(index).css("background","#00c3f5");
			}else{
				$(".showimg .num a").eq(i).css("background","rgba(0,0,0,0)");
			}
		};
		index++;
		if (index==$(".showimg>img").length) {
			index=0;
		};
	}
	// 圆圈悬浮
	$(".showimg .num a").hover(function(){
		index = $(this).index();
		showadv();
		clearInterval(timer);	
	},function(){
		timer = setInterval(showadv,2000);
	})

	timer = setInterval(showadv,2000);
	// 图片点击事件
	$(".showimg .changeimg div").click(function(){
		clearInterval(timer);
		if($(this).index()==0){	
			for (var i = 0; i < $(".showimg>img").length; i++) {
				$(".showimg>img").eq(i).animate({left:"+="+adWidth+"px"},200);
				// 圆圈样式
				if (i==index) {
					$(".showimg .num a").eq(index-2).css("background","#00c3f5");
				}else{
					$(".showimg .num a").eq(i).css("background","rgba(0,0,0,0)");
				}
			};
			index=index-1;
		}else{
			clearInterval(timer);
			showadv();
		}
		timer = setInterval(showadv,2000);
	})

	// 内容1
	var timer2;
	var step = 0;
	var bigww = $(".mid-cont1-goodsmove").width()-1;
	alert(bigww);
	function slideGoods(){		
		if (step == bigww) {
			step -= bigww;
			$(".titmove>div").eq(1).css("background","#00c3f5");
			$(".titmove>div").eq(0).css("background","#fff");
		}else{
			step += bigww;
			$(".titmove>div").eq(1).css("background","#fff");
			$(".titmove>div").eq(0).css("background","#00c3f5");
		}
		$(".mid-cont1-goodsmove>ul").animate({marginLeft:"-"+step+"px"},1000);
	}
	timer2 = setInterval(slideGoods,3000);
	// 点击事件
	$(".titmove>div").eq(0).click(function(){
		$(this).css("background","#fff");
		$(".titmove>div").eq(1).css("background","#00c3f5");
		clearInterval(timer2);
		if (step == bigww) {
			step -= bigww;
			$(".mid-cont1-goodsmove>ul").animate({marginLeft:"-"+step+"px"},1000);
		}
		timer2 = setInterval(slideGoods,3000);
	})
	$(".titmove>div").eq(1).click(function(){
		$(this).css("background","#fff");
		$(".titmove>div").eq(0).css("background","#00c3f5");
		clearInterval(timer2);
		if (step == 0) {
			step += bigww;
			$(".mid-cont1-goodsmove>ul").animate({marginLeft:"-"+step+"px"},1000);
		}
		timer2 = setInterval(slideGoods,3000);
	})
	// 浮动清除定时器
	$(".mid-cont1-goodsmove>ul>li").hover(function(){
		clearInterval(timer2);
		$(this).css("borderColor","#00c1f5");
	},function(){
		$(this).css("borderColor","#ccc");
		timer2 = setInterval(slideGoods,3000);
	})

	// 固定导航
	$(window).scroll(function scrolls(){
		var scrolltop = $(this).scrollTop();
		var imgH = $(".top-img").height();
		if (scrolltop>imgH) {
			$("header .top-nav").css({
				position:"fixed",
				top:0,
				background:"rgba(0,195,245,0.8)"
			});
			$("header .top-nav a").css({
				color:"#fff"
			});
		}else{
			$("header .top-nav").css({
				position:"relative",
				background:"#fafafc"
			})
			$("header .top-nav a").css({
				color:"#333"
			});
		}
		if (scrolltop>450){
			$(".conmsg").css({display:"block"});
			$(".conmsg").animate({
				top:scrolltop+250,
			},15);
		}else{
			$(".conmsg").css({display:"none"});
		}
	})
	$(".conmsg .gotop").click(function(){
		$("body").animate({
			scrollTop:0,
		},1000)
	})
})                               