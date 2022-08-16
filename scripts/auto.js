function flex(vector){
	var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate",
　　　　　　 "bada", "nokia", "lg", "ucweb", "skyfire");
     var browser = navigator.userAgent.toLowerCase(); 
     var isMobile = false;
     
     for (var i=0; i<mobileAgent.length; i++) {
        if (browser.indexOf(mobileAgent[i])!=-1) { 
            blogTo(90); 
        }else{
			if(vector=="into"){
				blogTo(90);
				return;
			}
			blogTo(15);
		}
     }
}
function hideHeader(ifHide){
	if(ifHide==1){
		$(header).show();
		$(nagi).animate({height:"95%",top:"5%"});
		$(view).animate({height:"95%",top:"5%"});
	}else{
		$(header).hide();
		$(nagi).animate({height:"100%",top:"0%"});
		$(view).animate({height:"100%",top:"0%"});
	}
}
