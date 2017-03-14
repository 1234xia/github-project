$(function(){
	// 固定导航
	$(window).scroll(function scrolls(){
		var scrolltop = $(this).scrollTop();
		if (scrolltop>100){
			$(".conmsg").animate({
				top:scrolltop+250,
			},15);
		}
	})
	// 回到顶部
	$(".conmsg .gotop").click(function(){
		$("body").animate({
			scrollTop:0,
		},1000)
	})
	// 小图点击事件
	$(".mid1 .small-picbox>ul>li").click(function(){
		$(".picbox>.mid-pic>img").attr("src","images/goodsmsg/mid1-bigpic"+($(this).index()+1)+".jpg")
		$(".picbox>.big-pic>img").attr("src","images/goodsmsg/mid1-bigpic"+($(this).index()+1)+".jpg")
	})
	// 放大镜
	$(".mid1 .picbox .mid-pic").bind("mousemove",function(event){
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

	$(".goodsmessage-buy>#addnum").click(function(){
		var num = $(".goodsmessage-buy>#numchange").val();
		num = parseInt(num)+1;
		if (num>5) {
			alert("热销商品，已达到销售上限！");
		}else{
			$(".goodsmessage-buy>#numchange").val(num);
		}
	})
	$(".goodsmessage-buy>#delnum").click(function(){
		var num = $(".goodsmessage-buy>#numchange").val();
		num = parseInt(num)-1;
		if (num<1) {
			// alert("热销商品，已达到销售上限！");
		}else{
			$(".goodsmessage-buy>#numchange").val(num);
		}
	})
})