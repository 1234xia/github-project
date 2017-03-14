$(function(){

	// 侧边栏-回到顶部
	$(".fr-gotop").click(function(){
		$("body").animate({
			scrollTop:0,
		},300);
	})

	// 左边侧边栏——改变样式
	function changeCss(i,color1,color2,width,img,size){
		$(".fixed-left>li:nth-child("+i+")").css("background",color1);
		$(".fixed-left>li:nth-child("+i+")>a").css("color",color2);
		$(".fixed-left>li:nth-child("+i+")>a>i").css({
			width:width,
			backgroundImage:img,
			backgroundSize:size
		});
	}

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

		// 左边侧边栏
		if (scrolltop>780){
			$(".fixed-left").css({
				position:"fixed",
				top:"100px",
				transition:"all 1s"
			});
		}else{
			$(".fixed-left").css({
				position:"absolute",
				top:"880px",
				transition:"all 1s"
			});
		}
		// 左边侧边栏的显示隐藏
		if (scrolltop>4200){
			$(".fixed-left").css({
				opacity:0,
				transition:"opacity 0.8s",
			});
		}else{
			$(".fixed-left").css({
				opacity:1,
				transition:"opacity 0.8s",
			});
		}

		// 滚动改变样式
		var $distances2 = [0,900,1300,2700,3300,4200];
		for (var j = 0; j < 5; j++) {
			if (scrolltop>$distances2[j]&&scrolltop<$distances2[j+1]) {
				for (var i = 1; i < 6; i++) {
					if (i==j+1) {
						changeCss(j+1,"#e14958","#fff","25px","url(img/fixed-after-icon"+(j+1)+".png)","26px");
					}else{
						changeCss(i,"#fff","#3e3e3e","20px","url(img/fixed-before-icon"+i+".png)","20px");
					}
				};
			};
		};
	})
	// 点击事件
	var $distances = [700,1020,1520,3100,3720];//滚动距离数组
	$(".fixed-left>li").click(function(){
		$("body").animate({
			scrollTop:$distances[$(this).index()],
		},300);
	})
	// 悬浮事件
	// $(".fixed-left>li").hover(function(){
	// 	changeCss($(this).index()+1,"#e14958","#fff","25px","url(img/fixed-after-icon"+($(this).index()+1)+".png)","26px");
	// },function(){
	// 	if (true) {};
	// 	changeCss($(this).index()+1,"#fff","#3e3e3e","20px","url(img/fixed-before-icon"+($(this).index()+1)+".png)","20px");
	// })

	// 海报轮播——淡入淡出
	var index = 0;
	var timer;
	var $length = $(".banner li").length;
	function showadv(){
		index++;
	    if (index>=$length) {
	    	index=0;
	    };
	    $(".banner li").eq(index).fadeIn("slow").siblings().fadeOut("slow");
	    $(".bannernum>a").eq(index).css("background","#6b4185").siblings().css("background","#888");
	}
	// 图片轮播-图片下标
	$(".banner-box>.bannernum>a").hover(function(){
		index = $(this).index()-1;
		showadv();
		clearInterval(timer);	
	},function(){
		timer = setInterval(showadv,3000);
	})
	timer = setInterval(showadv,3000);

	// 海报区域——公告轮播
	var index2 = 1;
	var timer2;
	var adHeight = $(".broadcast-box>li:first").height();
	function showBroadcast(){
		$(".broadcast-box>li").eq(index2).css("display","block");
		$(".broadcast-box>li").eq(index2).css("top",adHeight+"px");
		for (var i = 0; i < $(".broadcast-box>li").length; i++) {
			$(".broadcast-box>li").eq(i).animate({top:"-="+adHeight+"px"},500);
		};	
		index2++;
		if (index2==$(".broadcast-box>li").length) {
			index2=0;
		};
	}
	timer2 = setInterval(showBroadcast,2000);

	// 今日上新——缓动
	var timer3;
	var step = 0;
	var bigww = $(".news-box").width()+20;
	function slideGoods(){		
		if (step == bigww) {
			step -= bigww;
			$(".tit-right>a").eq(1).css("background","#895ca5").siblings().css("background","#f9f9f9");
		}else{
			step += bigww;
			$(".tit-right>a").eq(0).css("background","#895ca5").siblings().css("background","#f9f9f9");
		}
		$(".news-box>ul").animate({marginLeft:"-"+step+"px"},1000);
	}
	timer3 = setInterval(slideGoods,3000);
	// 点击事件
	$(".tit-right>a").eq(0).click(function(){
		$(this).css("background","#f9f9f9").siblings().css("background","#895ca5");
		clearInterval(timer3);
		if (step == bigww) {
			step -= bigww;
			$(".news-box>ul").animate({marginLeft:"-"+step+"px"},1000);
		}
		timer3 = setInterval(slideGoods,3000);
	})
	$(".tit-right>a").eq(1).click(function(){
		$(this).css("background","#f9f9f9").siblings().css("background","#895ca5");
		clearInterval(timer3);
		if (step == 0) {
			step += bigww;
			$(".news-box>ul").animate({marginLeft:"-"+step+"px"},1000);
		}
		timer3 = setInterval(slideGoods,3000);
	})
	// 浮动清除定时器
	$(".news-box>ul>li").hover(function(){
		clearInterval(timer3);
	},function(){
		timer3 = setInterval(slideGoods,3000);
	}) 


	// 大家都说好——悬浮显示隐藏
	$(".worth-box2-tit>ul>li").bind("mouseover",function(){
		$(this).addClass("worth-box2-tit-hover1").siblings().removeClass("worth-box2-tit-hover1");
		$(".worth-box2-cont>ul").eq($(this).index()).css("display","block").siblings().css("display","none");
	})

	// 销售排行榜——悬浮事件
	$(".rankingbox>li:not(.ranking-tit)").bind("mouseover",function(){
		$(this).addClass("rankingbox-li-hover").siblings().removeClass("rankingbox-li-hover");
		$(this).removeClass("rankingbox-li-before").siblings().addClass("rankingbox-li-before");
	})

	// 今日闪购——倒计时
	function countTime(){
		$date=new Date();
        $year=$date.getFullYear();
        $month=$date.getMonth();
        $day=$date.getDate()+1;
        $date2=new Date($year,$month,$day,20);

        var $inttime=($date2-$date)/1000;
        var hours = Math.floor($inttime%(24*60*60)/(60*60));
        var minutes = Math.floor($inttime%(24*60*60)%(60*60)/60);
        var seconds = Math.floor($inttime%(24*60*60)%(60*60)%60);
        if (hours<=9) hours = '0' + hours;
		if (minutes <= 9) minutes = '0' + minutes;
   		if (seconds <= 9) seconds = '0' + seconds;
   		$(".hours").html(hours);
   		$(".minutes").html(minutes);
   		$(".seconds").html(seconds);
	}
	setInterval(countTime,1000);
})