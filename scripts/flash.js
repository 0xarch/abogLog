function intoView(){
	var i=100;
	var spread = setInterval(function(){
		nagi.style.width=i+"%";
		i-=2;
		if(i<10){
			clearInterval(spread);
		}
	},5);
	view.style.display="block";
	searchIn.style.left="1%";
	searchIn.style.width="8%";
}
function returnToMain(){
	var i=10;
	
	var spread = setInterval(function(){
		nagi.style.width=i+"%";
		i+=2;
		if(i>100){
			clearInterval(spread);
		}
	},5);
	view.style.display="none";
	searchIn.style.left="42%";
	searchIn.style.width="16%";
}
