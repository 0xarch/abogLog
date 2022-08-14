function intoView(){
	nagi.style.width="10%";
	view.style.display="block";
}
function returnToMain(){
	nagi.style.width="100%";
	view.style.display="none";
}
function fopen(blog){
	var target="posts/"+blog;
	view_iframe.src=target;
}
window.onload=function(){
	fopen("__NONE__");
}
