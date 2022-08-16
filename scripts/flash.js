var GlobalFlashSpeed=10;
function intoView(){
	$(nagi).animate({width:"10%"});
	$(view).show();
	$(searchIn).animate({left:"1%",width:"8%"});
	flex("into");
}
function returnToMain(){
	$(viewIframe1Div).hide().animate({width:"0%"}).animate({height:"0%"});
	$(nagi).animate({width:"100%"});
	$(searchIn).animate({left:"42%",width:"16%"});
	$(view).hide();
	flex("toMain");
}
var _blogs=document.getElementsByClassName("blogs");
console.log(_blogs);
function setter(toStatus){
		for(var i=0;i<_blogs.length;i++){
			$(_blogs.item(i)).animate({width:toStatus+'%'},1);
		}
	}
function blogTo(end){
		for(var i=0;i<_blogs.length;i++){
			$(_blogs.item(i)).animate({width:end+'%'},10);
		}
}
function onlyOne(){
	$(viewIframe1Div).show();
	$(viewIframe1Div).animate({width:"97%"}).animate({height:"97%"});
	$(viewIframe2Div).animate({width:"0%"}).animate({height:"0%"});
	$(viewIframe2Div).hide();
}
function haveTwo(){
	$(viewIframe2Div).show();
	$(viewIframe1Div).animate({width:"49%"});
	$(viewIframe2Div).animate({width:"49%"}).animate({height:"97%"});
	
}
