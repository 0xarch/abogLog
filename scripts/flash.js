var GlobalFlashSpeed=10;
function intoView(){
	$(nagi).animate({width:"10%"});
	$(view).show();
	$(searchIn).animate({left:"1%",width:"8%"});
	flex("into");
}
function returnToMain(){
	HideOne();
	HideTwo();
	$(nagi).animate({width:"100%"});
	$(searchIn).animate({left:"42%",width:"16%"});
	$(view).hide();
	flex("toMain");
}
var _blogs=document.getElementsByClassName("blogs");
console.log(_blogs);
function blogTo(end){
		for(var i=0;i<_blogs.length;i++){
			$(_blogs.item(i)).animate({width:end+'%'},400);
		}
}
function ShowOne(){
	$(viewIframe1Div).show();
}
function MaxOne(){
	$(viewIframe1Div).animate({width:"98%",height:"98%"});
}
function HideOne(){
	$(viewIframe1Div).hide();
	$(viewIframe1Div).animate({width:"0%",height:"0%"},500);
}
function ShowTwo(){
	$(viewIframe2Div).show();
}
function MaxTwo(){
	$(viewIframe2Div).animate({width:"94%",height:"98%"});
}
function HideTwo(){
	$(viewIframe2Div).hide();
	$(viewIframe2Div).animate({width:"0%",height:"0%"},500);
}
function TilingTwos(){
	$(viewIframe1Div).animate({width:"47%",height:"97%"});
	$(viewIframe2Div).animate({width:"47%",height:"97%"});
}
