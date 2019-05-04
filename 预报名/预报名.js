// document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';

// !(function(doc,win) {
// 	var docEle = doc.documentElement,
// 		evt = "onorientationchange" in window ? "orientationchange" : "resize",
// 		fn = function() {
// 			var width = docEle.clientWidth;
// 			width && (docEle.style.fontSize = 100 * (width / 750) + "px");
// 		};

// 	win.addEventListener(evt, fn, false);
// 	doc.addEventListener("DOMContentLoaded", fn, false);


// }(document,window));
window.onload = function(){
    /*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
      为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
    getRem(750,100)
};
window.onresize = function(){
    getRem(750,100)
};
function getRem(pwidth,prem){
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth/pwidth*prem + "px";
}


$('#sele1').click(function(){
	$('#background1').show();
	$('#sele1').css('border','0.02rem solid #ffb324');
})
$('#background1').click(function(){
	$('#background1').hide();
	$('#sele1,#sele2').hide();
})
$('#sele2').click(function(){
	$('#background2').show();
	$('#sele2').css('border','0.02rem solid #ffb324');
})
$('#background2').click(function(){
	$('#background2').hide();
	$('#sele1,#sele2').hide();
})
$('.u1').click(function(){
	$('.selectText1').text('华南理工大学');
	$('#sele1,#sele2').hide();
})
$('.u2').click(function(){
	$('.selectText1').text('华南师范大学');
	$('#sele1,#sele2').hide();
})
$('.u3').click(function(){
	$('.selectText1').text('暨南大学');
	$('#sele1,#sele2').hide();
})
$('.u4').click(function(){
	$('.selectText1').text('广东外语外贸大学');
	$('#sele1,#sele2').hide();
})
$('.u5').click(function(){
	$('.selectText1').text('汕头大学');
	$('#sele1,#sele2').hide();
})
$('.u6').click(function(){
	$('.selectText1').text('广东财经大学');
	$('#sele1,#sele2').hide();
})
$('.m1').click(function(){
	$('.selectText2').text('计算机科学与技术');
	$('#sele1,#sele2').hide();
})
$('.m2').click(function(){
	$('.selectText2').text('土木工程');
	$('#sele1,#sele2').hide();
})
$('.m3').click(function(){
	$('.selectText2').text('工程管理');
	$('#sele1,#sele2').hide();
})
$('.m4').click(function(){
	$('.selectText2').text('数字媒体艺术');
	$('#sele1,#sele2').hide();
})
$('.m5').click(function(){
	$('.selectText2').text('汽车服务工程');
	$('#sele1,#sele2').hide();
})
$('.m6').click(function(){
	$('.selectText2').text('环境与材料工程');
	$('#sele1,#sele2').hide();
})
$('.rewrite').click(function(){
	$('.selectText1').text('华南理工大学');
	$('.selectText2').text('计算机科学与技术');
})