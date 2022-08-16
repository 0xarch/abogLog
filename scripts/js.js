var blog_count=0;
function fopen(blog){
		var target="posts/"+blog+"";
		if(blog_count==0){
		viewIframe1.src=target;
		onlyOne();
		blog_count=1;
		intoView();
	}else{
		viewIframe2.src=target;
		haveTwo();
		blog_count=2;
	}
		
}
function viewClose(closeNumber){
	if(closeNumber==1){
		if(blog_count==2){
			viewIframe1.src=viewIframe2.getAttribute("src");
			onlyOne();
			blog_count=1;
		}
		else{
			blog_count=0;
			returnToMain();
		}
	}
	else if(closeNumber==2){
		blog_count=1;
		onlyOne();
	}
	console.log(blog_count);
}
window.onload=function(){
	$(support).hide();
	$(protect).hide();
}
