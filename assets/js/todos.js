
// // check off events clicked
// var finished = {
// 	color: "grey",
// 	"text-decoration": "line-through" //key本身是字符串,但是不能直接带-,会报错
// }

// $("li").on("click",function(){
// 	//if it is grey, change it to black
	
// 	//尽管显示color:grey,但是$(this).css("color")值为rgb(128, 128, 128)且中间有空格隔开
// 	if($(this).css("color") == "rgb(128, 128, 128)"){
// 		$(this).css("color","black")
// 	}
// 	else{
// 		//else turn it to grey
// 		$(this).css(finished);
// 	}
	
// })

// check off events clicked 简洁写法
//$("li").on("click",function(){ //尽管使用on,但是还是没法应用到新的li中,因为$(li)绑定行为一开始就执行了,此时只有三个li.
$("ul").on("click","li",function(){ //而绑定ul之后, 在click时,再去确认click是其中的哪个li,则可以解决该问题.即$()中的元素一定一开始就要存在
	$(this).toggleClass("finished");
})



//remove evert when click X before it
$("ul").on("click","span",function(e){
	$(this).parent().fadeOut(function(){
		$(this).remove(); //此处使用this,而不是parent,因为已经在fadeOut中,此时this已经指向parent
	}); //parent()方法返回父元素
	e.stopPropagation(); //span处于li,ul,body中,则事件e可能导致其他回调函数,终止传播函数stopPropagation由jQuery提供
})

$("input").on("keypress",function(e){
	if(e.which == 13){
		let newevent = $(this).val();
		 $(this).val(""); //清空输入栏
		$("ul").append("<li><span><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> </span>"+newevent+"</li>");
	}

})

$(".fa-plus").click(function(){
	$("input").slideToggle();
})