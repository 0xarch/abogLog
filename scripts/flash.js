function intoView(){
	var i=100;
	var spread = setInterval(function(){
		nagi.style.width=i+"%";
		i-=2;
		console.log(i);
		if(i<10){
			clearInterval(spread);
		}
	},5);
	view.style.display="block";
}
function returnToMain(){
	var i=10;
	
	var spread = setInterval(function(){
		nagi.style.width=i+"%";
		i+=2;
		console.log(i);
		if(i>100){
			clearInterval(spread);
		}
	},5);
	view.style.display="none";
	
}
