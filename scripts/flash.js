var GlobalFlashSpeed=10;
function intoView(){
	var i=100;
	var spread = setInterval(function(){
		nagi.style.width=i+"%";
		//nagi.style.background_color="rgb("+i+","+i+","+i+")";
		i-=2;
		if(i<10){
			clearInterval(spread);
		}
	},GlobalFlashSpeed);
	view.style.display="block";
	searchIn.style.left="1%";
	searchIn.style.width="8%";
	flex("into");
}
function returnToMain(){
	var i=10;
	
	var spread = setInterval(function(){
		nagi.style.width=i+"%";
		//nagi.style.background_color="rgb("+i+","+i+","+i+")";
		i+=2;
		if(i>100){
			clearInterval(spread);
		}
	},GlobalFlashSpeed);
	view.style.display="none";
	searchIn.style.left="42%";
	searchIn.style.width="16%";
	flex("toMain");
}

var _blogs=document.getElementsByClassName("blogs");
console.log(_blogs);
function setter(toStatus){
		for(var i=0;i<_blogs.length;i++){
			_blogs.item(i).style.width=toStatus+"%";
		}
	}
function blogTo(start,end,ifDemo){
	if(ifDemo==true){
		if(start>=end){
			var i=start;
			var doChanging=setInterval(function(){
				setter(i);
				if(i==end){
					clearInterval(doChanging);
				}
				i--;
			},GlobalFlashSpeed);
		}else{
			var i=start;
			var doChanging=setInterval(function(){
				setter(i);
				if(i==end){
					clearInterval(doChanging);
				}
				i++;
			},GlobalFlashSpeed);
		}
	}else{
		setter(end);
	}
}
