var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate",
　　　　　　 "bada", "nokia", "lg", "ucweb", "skyfire");
var browser = navigator.userAgent.toLowerCase(); 
var isMobile = false;
for (var i=0; i<mobileAgent.length; i++) {
	if (browser.indexOf(mobileAgent[i])!=-1)
	isMobile=true;
}
console.log(isMobile);
function flex(arg){
	if(isMobile==true){
		blogTo(90);
	}else{
		if(arg=="into"){
			blogTo(90);
		}else{
			blogTo(15);
		}
	}
}

function hideHeader(ifHide){
	if(ifHide==false){
		$(header).show();
		$(nagi).animate({height:"95%",top:"5%"});
		$(view).animate({height:"95%",top:"5%"});
	}else{
		$(header).hide();
		$(nagi).animate({height:"100%",top:"0%"});
		$(view).animate({height:"100%",top:"0%"});
	}
}
