function ShowOne(){
	$(viewIframe1Div).show();
	console.log("Switched viewIframe1Div : Show");
}
function MaxOne(){
	$(viewIframe1Div).animate({width:"99%",height:"98%"});
	console.log("Switched viewIframe1Div : Max");
}
function HideOne(){
	$(viewIframe1Div).hide();
	$(viewIframe1Div).animate({width:"0%",height:"0%"},500);
	console.log("Switched viewIframe1Div : Hide");
}
function ShowTwo(){
	$(viewIframe2Div).show();
	console.log("Switched viewIframe2Div : Show");
}
function MaxTwo(){
	$(viewIframe2Div).animate({width:"99%",height:"98%"});
	console.log("Switched viewIfram2Div : Max");
}
function HideTwo(){
	$(viewIframe2Div).hide();
	$(viewIframe2Div).animate({width:"0%",height:"0%"},500);
	console.log("Switched viewIframe2Div : Hide");
}
function TilingTwos(){
	if(isMobile==true){
		$(viewIframe1Div).animate({width:"97%",height:"49%"});
		$(viewIframe2Div).animate({width:"97%",height:"49%"});
		console.log("Switched viewIframe2Div viewIframe2Div : Tilings ( Vert Tilings )");
	}else{
		$(viewIframe1Div).animate({width:"49%",height:"97%"});
		$(viewIframe2Div).animate({width:"49%",height:"97%"});
		console.log("Switched viewIframe1Div viewIframe2Div : Tilings");
	}
}
function viewClose(closeNumber){
	blog_count--;
	if(closeNumber==1){
		HideOne();
		ifOneHaveOpen=false;
		if(blog_count!=0){
			MaxTwo();
		}else{
			returnToMain();
		}
	}else
	if(closeNumber==2){
		HideTwo();
		ifTwoHaveOpen=false;
		if(blog_count!=0){
			MaxOne();
		}else{
			returnToMain();
		}
	}
	if(blog_count==0){
		returnToMain();
	}
}
