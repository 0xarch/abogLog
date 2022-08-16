function flex(vector){
	var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate",
　　　　　　 "bada", "nokia", "lg", "ucweb", "skyfire");
     var browser = navigator.userAgent.toLowerCase(); 
     var isMobile = false;
     
     for (var i=0; i<mobileAgent.length; i++) {
        if (browser.indexOf(mobileAgent[i])!=-1) { 
            blogTo(15,90,true); 
        }else{
			if(vector=="into"){
				blogTo(15,90,true);
				return;
			}
			blogTo(90,15,false);
		}
     }
}
