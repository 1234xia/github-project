$(function(){
	$("#signupForm1").validate({
		rules:{
			username:{
				required:true
			},
			password:{
				required:true,
				rangelength:[6,18]
			}
		},
		messages:{
			username:{
				required:"账号不能为空"
			},
			password:{
				required:"请输入密码",
				rangelength:"请输入6-18位数字"
			},
		},
		errorPlacement:function(error,element){
			error.appendTo(element.next()); 
		},
		errorClass:"myerror",
	})
	$("#signupForm2").validate({
		rules:{
			phone:{
				required:true,
				number:true,
				minlength:11,
				maxlength:11
			},
			code:{
				required:true,
				minlength:6
			},
		},
		messages:{
			phone:{
				required:"请输入手机号码",
				number:"格式不正确",
				minlength:"手机号码不正确，不能少于11个字符",
				maxlength:"手机号码不正确，不能超过11个字符"
			},
			code:{
				required:"请输入验证码",
				minlength:"验证码不符合要求"
			},
		},
		errorPlacement:function(error,element){
			error.appendTo(element.parent().next()); 
		},
		errorClass:"myerror",
	})
})