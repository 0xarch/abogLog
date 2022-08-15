var blog_count=0;
function intoView(){
	nagi.style.width="10%";
	view.style.display="block";
}
function returnToMain(){
	nagi.style.width="100%";
	view.style.display="none";
}

function onlyOne(){
	viewIframe1Div.style.width="97%";
	viewIframe1Div.style.height="97%";
	viewIframe1Div.style.display="inline-block";
	viewIframe2Div.style.display="none";
}
function haveTwo(){
	viewIframe1Div.style.width="49%";
	viewIframe2Div.style.width="49%";
	viewIframe2Div.style.height="97%";
	viewIframe2Div.style.display="inline-block";
}
function fopen(blog){
		var target="posts/"+blog+"";
		if(blog_count==0){
		viewIframe1.src=target;
		onlyOne();
		blog_count=1;
	}else{
		viewIframe2.src=target;
		haveTwo();
		blog_count=2;
	}
		intoView();
}
function viewClose(closeNumber){
	if(closeNumber==1){
		if(blog_count==2){
		viewIframe2Div.style.display="none";
		viewIframe1.src=viewIframe2.getAttribute("src");
		onlyOne();
		blog_count=1;
		}
		else{
			blog_count=0;
			viewIframe1Div.style.display="none";
			returnToMain();
		}
	}
	else if(closeNumber==2){
		viewIframe2Div.style.display="none";
	}
}
window.onload=function(){
	fopen("__NONE__.html");
}
