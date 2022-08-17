var GlobalFlashSpeed=10;
var _blogs=document.getElementsByClassName("blogs");
var _viewButtons=document.getElementsByClassName("viewButtons");
var _viewIframeDivs=document.getElementsByClassName("viewIframeDiv");
function intoView(){
	$(nagi).animate({width:"10%"});
	$(view).show();
	$(searchIn).animate({left:"1%",width:"8%"});
	blogFlex("into");
}
function returnToMain(){
	HideOne();
	HideTwo();
	$(nagi).animate({width:"100%"});
	$(searchIn).animate({left:"42%",width:"16%"});
	$(view).hide();
	blogFlex("toMain");
}

function blogTo(end){
		for(var i=0;i<_blogs.length;i++){
			$(_blogs.item(i)).animate({width:end+'%'},400);
		}
}
function blogFlex(arg){
	if(isMobile==true){
		blogTo(90);
	}else{
		if(arg=="into"){
			blogTo(90);
		}else{
			blogTo(15);
		}
	}
}
function SwitchViewButtons(target){
	if(target.includes("H")){
		for(var i=0;i<_viewButtons.length;i++){
			$(_viewButtons.item(i)).css("height","8%");
			console.log("Switched viewButtons : Height");
		}
	}
	if(target.includes("W")){
		for(var i=0;i<_viewButtons.length;i++){
			$(_viewButtons.item(i)).animate({width:"90%"});
			console.log("Switched viewButtons : Width");
		}
	}
	if(target.includes("M")){
		for(var i=0;i<_viewButtons.length;i++){
			$(_viewButtons.item(i)).css("margin","0px auto");
			console.log("Switched viewButtons : Margin");
		}
	}
}
function HideHeader(ifHide){
	if(ifHide==false){
		$(header).show();
		$(nagi).animate({height:"95%",top:"5%"});
		$(view).animate({height:"95%",top:"5%"});
	}else{
		$(header).hide();
		$(nagi).animate({height:"100%",top:"0%"});
		$(view).animate({height:"100%",top:"0%"});
	}
}
