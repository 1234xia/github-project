$(function(){
	// 手机号码区域框的显示
	$(".phonebox .phone-area").click(function(){
		if ($(".phone-area-box").css("display")=="none") {
			$(".phone-area-box").show("slow");
		}else{
			$(".phone-area-box").hide("slow");
		}
	})
	// 手机号码区域框的传值
	$(".phone-area-box>ul>li").click(function(){
		$(".phonebox .phone-area>span").html($(this).find("span").html());
		$(".phone-area-box").fadeOut(); 
	})
	
	// 点击切换注册样式	
	$(".box>a").click(function(){
		var index = $(this).index();
		$(".box"+index).css("display","block");
		$(".box"+index).siblings().css("display","none");
	})
	
	// 底部样式
	$("footer>.footer-msg2>a:nth-child(1)").hover(function(){
		$("footer>.footer-msg2>a:nth-child(1)>img").attr("src","images/register/weibo2.png");
	},function(){
		$("footer>.footer-msg2>a:nth-child(1)>img").attr("src","images/register/weibo1.png");
	})
	$("footer>.footer-msg2>a:nth-child(2)").hover(function(){
		$("footer>.footer-msg2>a:nth-child(2)>img").attr("src","images/register/weixin2.png");
	},function(){
		$("footer>.footer-msg2>a:nth-child(2)>img").attr("src","images/register/weixin1.png");
	})
	$("footer>.footer-msg2>a:nth-child(3)").hover(function(){
		$("footer>.footer-msg2>a:nth-child(3)>img").attr("src","images/register/qqkongjian2.png");
	},function(){
		$("footer>.footer-msg2>a:nth-child(3)>img").attr("src","images/register/qqkongjian1.png");
	})
})