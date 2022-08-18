var Width="94%";
var Height="92%";
var Width_Tiling="47%";

var viewWindowsContainers=document.getElementByClassName("viewIframeDivs");
var viewWindowsCores=document.getElementByClassName("viewIframes");
var viewCounts=viewWindowsContainers.length;
var viewWindowsHaveOpened=new Array();
for(var i=0;i<viewWindowsContainers.length;i++){
	viewWindowsHaveOpened[i]=false;
}
var blogCount=0;

function VOutput(Sprite,Status,Sprite_,Status_){
	console.log("VWM Output : [ "+Sprite+" is "+Status+" ];");
	if(Sprite_!=undefined){
		console.log("VWM Output : [ "+Sprite_+" is "+Status_+" ];");
	}
}

function fopen(blog){
	var target="posts/"+blog+"";
	var windowTarget=blogCount+1;
	VOutput("OpenWindow",target);
	if(blogCount<viewCounts){
		intoView();
		VWM_GiveTarget(windowTarget,target);
		VWM_Show(windowTarget);
		VWM_Max(windowTarget);
		autoSwitch("VbNb");
		viewWindowsHaveOpened[blogCount]=true;
		blogCount++;
	}else{
		VWM_GiveTarget(1,target);
	}
	VOutput("Blog Count",blogCount);
}
		
function VWM_GiveTarget(argOne,argTwo){
	viewWindowsCores.item(argOne-1).src=argTwo;
}
function VWM_Show(arg){
	$(viewWindowsContainers.item(arg-1)).show();
	VOutput("viewWindow <"+arg+"> Container","Show");
}
function VWM_Max(arg){
	$(viewWindowsContainers.item(arg-1)).animate({width:Width,height:Height});
	VOutput("viewWindow <"+arg+"> Container","Max");
}
function VWM_Hide(arg){
	$(viewWindowsContainers.item(arg-1)).animate({width:"0%",height:"0%"});
	$(viewWindowsContainers.item(arg-1)).hide();
	VOutput("viewWindow <"+arg+"> Container","Hide");
}
function TilingTwos(){
	if(isMobile==true){
		$(viewIframe1Div).animate({width:Width,height:Width_Tiling});
		$(viewIframe2Div).animate({width:Width,height:Width_Tiling});
		VOutput("viewWindow<1,2>Container","Vert-Tiling");
	}else{
		$(viewIframe1Div).animate({width:Width_Tiling,height:Height});
		$(viewIframe2Div).animate({width:Width_Tiling,height:Height});
		VOutput("viewWindow<1,2>Container","Tiling");
	}
}
function viewClose(arg){
	blogCount--;
	VWM_Hide(arg);
	viewWindowsHaveOpened[arg-1]=false;
	if(blogCount==1){
		if(arg!=1){
			VWM_Max(2);
		}else{
			VWM_Max(1);
	}else
	if(blogCount==0){
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
