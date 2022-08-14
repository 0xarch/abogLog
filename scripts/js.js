function intoView(){
	nagi.style.width="10%";
	view.style.display="block";
	viewBg.style.display="block";
}
function returnToMain(){
	nagi.style.width="100%";
	view.style.display="none";
	viewBg.style.display="block";
}
function fopen(blog){
	var target="posts/"+blog+"";
	viewIframe.src=target;
}
window.onload=function(){
	fopen("__NONE__.html");
}
