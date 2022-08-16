var blog_count=0;
var ifOneHaveOpen=false;
var ifTwoHaveOpen=false;
function fopen(blog){
	var target="posts/"+blog+"";
	if(blog_count==0){
		ShowOne();
		MaxOne();
		ifOneHaveOpen=true;
		viewIframe1.src=target;
		blog_count=1;
		intoView();
	}else{
		if(ifTwoHaveOpen==false){	
			ShowTwo();
			TilingTwos();
			ifTwoHaveOpen=true;
			viewIframe2.src=target;
		}else
		if(ifOneHaveOpen==false){
			ShowOne();
			TilingTwos();
			ifOneHaveOpen=true;
			viewIframe1.src=target;
		}else{
			viewIframe1.src=target;
		}
		blog_count=2;
	}
	console.log("now have"+blog_count);
	console.log("One is "+ifOneHaveOpen+"  Two is "+ifTwoHaveOpen);
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
window.onload=function(){
	$(protect).hide();
	returnToMain();
}
