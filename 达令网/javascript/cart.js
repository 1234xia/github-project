$(function(){
	// 删除商品
	$(".removegoods").bind("click",function(){
		$(this).parents(".cart-item").remove();
	})

	var $counts;
	var $countsPrice;
	$(".th-number a").bind("click",function(){
		// 加减商品数量
		var $goodsnum = $(this).parents(".cart-item").find(".goodsnum");
		var num =$goodsnum.val();
		// 判断点击的是加减号
		if ($(this).index()==0) {
			num = parseInt(num)-1;
			if (num<1) {
				// alert("热销商品，已达到销售上限！");
			}else{
				$goodsnum.val(num);
			}
		}else{
			num = parseInt(num)+1;
			if (num>5) {
				alert("热销商品，已达到销售上限！");
			}else{
				$goodsnum.val(num);
			}
		}

		// 计算单件商品总价
		// 单价
		var $unitprice = $(this).parents(".cart-item").find(".th-price span").html();
		// toFixed(2)保留小数点后两位
		var $total = ($goodsnum.val()*$unitprice).toFixed(2);
		$(this).parents(".cart-item").find(".th-total span").html($total);

		// 点击加减时，底部总计
		if ($(this).parents(".cart-item").find(".check").is(":checked")) {
			$countsPrice = 0;
			for (var i = 0; i < $(".check:checked").length; i++) {  
				$countsPrice = $countsPrice+parseFloat($(".check:checked").eq(i).parents(".cart-item").find(".th-total span").html());
			};
			$(".total-money").html($countsPrice.toFixed(2));
		};
	});

	// 全选
	$(".allchk").bind("click",function(){
		// 判断点击的全选框是哪个
		if ($(this).prop("name")=="allchk1") {
			if($(".allchk1").is(":checked")){
				$(".allchk2").prop("checked",true);
			}else{
				$(".allchk2").prop("checked",false);
			}
		}else{
			if($(".allchk2").is(":checked")){
				$(".allchk1").prop("checked",true);
			}else{
				$(".allchk1").prop("checked",false);
			}
		}
		for (var i = 0; i < $(".check").length; i++) {
			$(".check").get(i).checked = $(".allchk").is(":checked");
		};
		// 全选后，商品数量变化
		if ($(".allchk").is(":checked")) {
			$(".goodscount").html(5); 
			$countsPrice = 0;
			for (var i = 0; i < $(".check:checked").length; i++) {  
				$countsPrice = $countsPrice+parseFloat($(".check:checked").eq(i).parents(".cart-item").find(".th-total span").html());
				// alert($countsPrice);
			};
			$(".total-money").html($countsPrice.toFixed(2));
		}else{
			$(".goodscount").html(0);
			$(".total-money").html("0.00");
		}
	})

	// 单击复选框
	// 注意：attr()与prop()的区别，jquery中attr无法启动
	$(".check").bind("click",function(){
		$counts = 0;
		$countsPrice = 0;
		for (var i = 0; i < $(".check").length; i++) {
			if ($(".check").get(i).checked == false) {
				$counts++;
				// break;
			}else{
				$countsPrice = $countsPrice+parseFloat($(".check").eq(i).parents(".cart-item").find(".th-total span").html());
			}
		};
		// alert($(".check").length-$counts);
		if ($counts == 0) {
			$(".allchk").prop("checked",true);
		}else{
			$(".allchk").prop("checked",false);
		}
		$(".goodscount").html($(".check").length-$counts);

		$(".total-money").html($countsPrice.toFixed(2));
	})

	// 固定结算框
	$(window).scroll(function scrolls(){
		var scrolltop = $(this).scrollTop();
		if (scrolltop<260) {
			$(".totalbox").addClass("fixed-totalbox");
			$(".total-box").css("border","none");
		}else{
			$(".totalbox").removeClass("fixed-totalbox");
			$(".total-box").css("border","solid 1px #ccc");
		}
	})

	// 删除选中的商品
	$(".delgoods").bind("click",function(){
		$(".check:checked").parents(".cart-item").remove();
		if ($(".check:checked").length==$(".check").length) {
			// 全选框
			$(".allchk").prop("checked",false);

			// 禁止滚动事件
			$ (window).unbind ('scroll');
			// 固定结算框
			$(".totalbox").removeClass("fixed-totalbox");
			$(".total-box").css("border","solid 1px #ccc");
			$(".nogoods").css("display","block");
		};
		$(".total-money").html("0.00");
		$(".goodscount").html(0); 
	})

	// 侧边栏
	$(".cart-num").html($(".cart-item").length);
}) 