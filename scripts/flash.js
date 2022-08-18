var GlobalFlashSpeed=10;
var _blogs=document.getElementsByClassName("blogs");
var _blogsHeaderImg=document.getElementsByClassName("blogsHeaderImg");
var _viewButtons=document.getElementsByClassName("viewButtons");
var _viewIframeDivs=document.getElementsByClassName("viewIframeDiv");
function intoView(){
	SwitchNagiBar("into");
	$(view).show();
	$(searchIn).animate({left:"1%",width:"8%"});
	blogFlex("into");
}
function returnToMain(){
	VWM_Hide("all");
	SwitchNagiBar();
	$(searchIn).animate({left:"42%",width:"16%"});
	$(view).hide();
	blogFlex("toMain");
}

function blogTo(arg){
		for(var i=0;i<_blogs.length;i++){
			$(_blogs.item(i)).animate({width:arg},GlobalFlashSpeed*40);
		}
}
function blogHeaderImgTo(){
	for(var i=0;i<_blogsHeaderImg.length;i++){
}
}
function autoSwitch(args){
	if(args.includes("Vb")){
		SwitchViewButtons("HWM");
	}
}
function blogFlex(arg){
	if(arg=="into"){
		blogTo("90%");
	}else{
		if(isMobile==true){
		blogTo("550px");
		}else{
			blogTo("15%");
		}
	}
}
function SwitchViewButtons(target){
	if(isMobile){
		if(target.includes("H")){
			for(var i=0;i<_viewButtons.length;i++){
				if(blogCount==1){
					$(_viewButtons.item(i)).animate({height:"4%"});
				}else{
					$(_viewButtons.item(i)).animate({height:"4%"});
				}
				console.log("Switched viewButtons : Height");
			}
		}
		if(target.includes("W")){
			for(var i=0;i<_viewButtons.length;i++){
				$(_viewButtons.item(i)).animate({width:"30%"});
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
}
function SwitchNagiBar(arg){
	if(arg=="into"){
		if(isMobile){
			$(nagi).animate({width:"20%"});
			$(view).animate({width:"80%"});
		}else{
			$(nagi).animate({width:"10%"});
			$(view).animate({width:"90%"});
		}
	}else{
		$(nagi).animate({width:"100%"});
	}
}
function SwitchHeader(ifHide){
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
