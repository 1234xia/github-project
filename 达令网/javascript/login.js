$(function(){
	// 注册与登录块的切换
	$(".msgbox-tit>a").bind("click",function(){
		$(this).addClass("msgbox-active").siblings().removeClass("msgbox-active");
		if ($(this).index()==0) {
			$(".login-form").css("display","block");
			$(".register-form").css("display","none");
		}else{
			$(".login-form").css("display","none");
			$(".register-form").css("display","block");
		}
	})

	// input获得焦点
	$(".login-form input").bind("focus",function(){
		$(this).parent().addClass("focus-div");
	})
	// 失去焦点
	$(".login-form input").bind("blur",function(){
		$(this).parent().removeClass("focus-div");
	})
	// input获得焦点
	$(".register-form input").bind("focus",function(){
		$(this).parent().addClass("focus-div");
	})
	// 失去焦点
	$(".register-form input").bind("blur",function(){
		$(this).parent().removeClass("focus-div");
	})

	// 随机验证码
	// 定义字符串
	var $codeitem="";
	$(".break").bind("click",changecode=function(event){
		var $codes=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		var $colors=["red","yellow","blue","pink","green","purple"];

		var $mycode="";
		for(var i=0;i<4;i++){
			var $randomColor=$colors[Math.floor(Math.random()*$colors.length)];
			var $codeitem1 = $codes[Math.floor(Math.random()*$codes.length)]
			$mycode+="<span style='color:"+$randomColor+"'>"+$codeitem1+"</span>";
			// 将随机数加入字符串中
			$codeitem+=$codeitem1;
		}

		$(".codebox").html($mycode);
	});
	changecode();
	console.log($codeitem);


	// 登录表单验证
	$("#loginForm").validate({
		rules:{
			phone:{
				required:true,
				number:true,
				minlength:11,
				maxlength:11
			},
			pwd:{
				required:true,
				number:true,
				rangelength:[6,10]
			},
		},
		messages:{
			phone:{
				required:"请输入您的手机号码",
				number:"请输入正确的手机号码",
				minlength:"请输入正确的手机号码",
				maxlength:"请输入正确的手机号码"
			},
			pwd:{
				required:"请输入密码",
				number:"密码只能是数字类型",
				rangelength:"请输入6-10位数字"
			},
		},
		errorElement:"div",
		errorPlacement:function(error,element){
			error.appendTo(element.parent()); 
		},
		errorClass:"myerror"
	})

	// 注册表单验证
	$("#registerForm").validate({
		rules:{
			phone:{
				required:true,
				number:true,
				minlength:11,
				maxlength:11
			},
			// pwds:{
			// 	required:true,
			// },
			phpwd:{
				required:true,
				rangelength:[6,10]
			},
			pwd:{
				required:true,
				number:true,
				rangelength:[6,10]
			},
			agree:{
				required:true,
			}
		},
		messages:{
			phone:{
				required:"请输入您的手机号码",
				number:"请输入正确的手机号码",
				minlength:"请输入正确的手机号码",
				maxlength:"请输入正确的手机号码"
			},
			// pwds:{
			// 	required:"请输入验证码",
			// },
			phpwd:{
				required:"请输入手机验证码",
				rangelength:"输入验证码不正确"
			},
			pwd:{
				required:"请输入密码",
				number:"密码只能是数字类型",
				rangelength:"请输入6-10位数字"
			},
			agree:{
				required:"请勾一下"
			}
		},
		errorElement:"div",
		errorPlacement:function(error,element){
			error.appendTo(element.parent()); 
		},
		errorClass:"myerror"
	})

	// 验证码验证
	$("#registerBtn").bind("click",function(){
		if ($.trim($("#pwds").val())=="") {
			$(".errordiv").html("请输入验证码");
		}else if($.trim($("#pwds").val())!=$codeitem) {
			// var $div = "<div class='errordiv' style='line-height: 30px;font-size: 12px;color:#e14958;'>验证码输入错误</div>";
			// $(this).parent().append($div);
			$(".errordiv").html("验证码输入错误");
		}else{
			$(".errordiv").remove();
		}
	})
})