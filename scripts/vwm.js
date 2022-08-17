var Width="94%";
var Height="92%";
var Width_Tiling="47%";
function fopen(blog){
	var target="posts/"+blog+"";
	console.log("VWM Input: Open View Window with "+target);
	if(blog_count==0){
		intoView();
		viewIframe1.src=target;
		ShowOne();
		MaxOne();
		SwitchViewButtons("HWM");
		ifOneHaveOpen=true;
		blog_count=1;
		
	}else{
		if(ifTwoHaveOpen==false){
			if(viewIframe1.getAttribute("src")==target){
				console.log("VWM Output: Already opened");
				return;
			}
			ShowTwo();
			TilingTwos();
			SwitchViewButtons("HWM");
			ifTwoHaveOpen=true;
			viewIframe2.src=target;
		}else
		if(ifOneHaveOpen==false){
			if(viewIframe2.getAttribute("src")==target){
				console.log("VWM Output: Already opened");
				return;
			}
			viewIframe1.src=target;
			ShowOne();
			SwitchViewButtons("HWM");
			TilingTwos();
			ifOneHaveOpen=true;
		}else{
			viewIframe1.src=target;
		}
		blog_count=2;
	}
	console.log("Switched Blog Count :"+blog_count);
	console.log("VWM Output: VW1 is "+ifOneHaveOpen+"  VW2 is "+ifTwoHaveOpen);
}
function ShowOne(){
	$(viewIframe1Div).show();
	console.log("Switched viewIframe1Div : Show");
}
function MaxOne(){
	$(viewIframe1Div).animate({width:Width,height:Height});
	console.log("Switched viewIframe1Div : Max");
}
function HideOne(){
	$(viewIframe1Div).hide();
	$(viewIframe1Div).animate({width:"0%",height:"0%"},GlobalFlashSpeed*50);
	console.log("Switched viewIframe1Div : Hide");
}
function ShowTwo(){
	$(viewIframe2Div).show();
	console.log("Switched viewIframe2Div : Show");
}
function MaxTwo(){
	$(viewIframe2Div).animate({width:Width,height:Height});
	console.log("Switched viewIfram2Div : Max");
}
function HideTwo(){
	$(viewIframe2Div).hide();
	$(viewIframe2Div).animate({width:"0%",height:"0%"},GlobalFlashSpeed*50);
	console.log("Switched viewIframe2Div : Hide");
}
function TilingTwos(){
	if(isMobile==true){
		$(viewIframe1Div).animate({width:Width,height:Width_Tiling});
		$(viewIframe2Div).animate({width:Width,height:Width_Tiling});
		console.log("Switched viewIframe2Div viewIframe2Div : Tilings ( Vert Tilings )");
	}else{
		$(viewIframe1Div).animate({width:Width_Tiling,height:Height});
		$(viewIframe2Div).animate({width:Width_Tiling,height:Height});
		console.log("Switched viewIframe1Div viewIframe2Div : Tilings");
	}
}
function viewClose(closeNumber){
	blog_count--;
	if(closeNumber==1){
		HideOne();
		ifOneHaveOpen=false;
		if(blog_count!=0){
			MaxTwo();
		}else{
			returnToMain();
		}
	}else
	if(closeNumber==2){
		HideTwo();
		ifTwoHaveOpen=false;
		if(blog_count!=0){
			MaxOne();
		}else{
			returnToMain();
		}
	}
	if(blog_count==0){
		returnToMain();
	}
}

//来自CSDN
function DynamicBackground(){
	var canvas = document.getElementById("backgroundCanvas");
	var ctx = canvas.getContext("2d");
	var particlesArray = [];
	canvas.width=innerWidth;
	canvas.height=innerHeight;
	var count = parseInt(canvas.width * canvas.height /6000);
	class Particle {
	    constructor(x, y) {
	        this.x = x;
	        this.y = y;
	        // x，y轴的移动速度  -0.5 -- 0.5
	        this.directionX = Math.random()-0.5;
	        this.directionY = Math.random()-0.5;
	    }
	
	    // 更新点的坐标
	    update() {
	        this.x += this.directionX;
	        this.y += this.directionY;
	    }
	
	    // 绘制粒子
	    draw() {
	        ctx.beginPath();
	        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
	        ctx.closePath();
	        ctx.fillStyle = "black";
	        ctx.fill();
	    }
	}
	
	// 创建粒子
	function createParticle() {
	    // 生成一个点的随机坐标
	    var x = Math.random() * innerWidth;
	    var y = Math.random() * innerHeight;
	
	    particlesArray.push(new Particle(x, y));
	}
	// 处理粒子
	// 先更新坐标，再绘制出来
	function handleParticle() {
	    for(var i = 0; i < particlesArray.length; i++) {
	        var particle = particlesArray[i];
	        particle.update();
	        particle.draw();
	        // 超出范围就将这个粒子删除
	        if(particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
	            particlesArray.splice(i, 1);
	        }
	        // 绘制两个点之间的连线
	        for(var j = i + 1; j < particlesArray.length; j++) {
	            dx = particlesArray[j].x - particlesArray[i].x;
	            dy = particlesArray[j].y - particlesArray[i].y;
	            dist = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
	            if(dist < 100) {
	                ctx.beginPath();
	                ctx.strokeStyle = "rgba(0, 0, 0, " + (1 - dist / 100);
	                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
	                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
	                ctx.closePath();
	                ctx.lineWidth = 1;
	                ctx.stroke();
	            }
	        }
	    }
	}
	
	function draw() {
	    // 首先清空画布
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
	    // 如果粒子数量小于规定数量，就生成新的粒子
	    if(particlesArray.length < count) {
	        createParticle();
	    }
	
	    // 处理粒子
	    handleParticle();
	}
	
	// 设置定时器
	setInterval(draw, 10);
}
