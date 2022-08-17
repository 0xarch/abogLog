var blog_count=0;
var ifOneHaveOpen=false;
var ifTwoHaveOpen=false;
function fopen(blog){
	var target="posts/"+blog+"";
	if(blog_count==0){
		intoView();
		viewIframe1.src=target;
		ShowOne();
		MaxOne();
		SwitchViewButtons("Width Height");
		ifOneHaveOpen=true;
		blog_count=1;
		
	}else{
		if(ifTwoHaveOpen==false){
			ShowTwo();
			TilingTwos();
			SwitchViewButtons("Width Height");
			ifTwoHaveOpen=true;
			viewIframe2.src=target;
		}else
		if(ifOneHaveOpen==false){
			viewIframe1.src=target;
			ShowOne();
			SwitchViewButtons("Width Height");
			TilingTwos();
			ifOneHaveOpen=true;
		}else{
			viewIframe1.src=target;
		}
		blog_count=2;
	}
	console.log("Switched Blog Count :"+blog_count);
	console.log("VWM Output: VW1 is "+ifOneHaveOpen+"  VW2 is "+ifTwoHaveOpen);
}
function InitLoad(){
	$(protect).hide();
	returnToMain();
}
window.onload=function(){
	InitLoad();
}
