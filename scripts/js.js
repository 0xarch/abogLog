var blog_count=0;
function intoView(atFirst){
	var i=100;
	var spread = setInterval(function(){
		nagi.style.width=i+"%";
		i-=5;
		console.log(i);
		if(i<10){
			clearInterval(spread);
		}
	},5);
	view.style.display="block";
}
function returnToMain(){
	var i=10;
	view.style.display="none";
	var spread = setInterval(function(){
		nagi.style.width=i+"%";
		i+=5;
		console.log(i);
		if(i>100){
			clearInterval(spread);
		}
	},5);

	
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
		blog_count=1;
		onlyOne();
	}
	console.log(blog_count);
}
window.onload=function(){
	//fopen("__NONE__.html");
	returnToMain();
	protect.style.display="none";
}
