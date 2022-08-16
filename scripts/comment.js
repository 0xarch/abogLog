 function send(frameNumber,haveData,existedData){
	if(frameNumber==1){
		if(haveData==1){
			var toSend=existedData;
		}else{
		var toSend=document.getElementById("commenter1").value;
		}
		var g=new Date();
		var p=document.createElement("p");
		p.innerHTML="<hr>"+toSend+"<br>"+g.toUTCString();
		document.getElementById("viewComment1").prepend(p);
	}
}

var blogComments="sources/commentBase";
function readDataBase(){$.ajax({
   url: blogComments,//json文件位置
   type: "GET",//请方式为get
   dataType: "json", //返回数据格式为json
   //xhrFields:'Access-Control-Allow-Origin':'*',
   success: function(data) {//请求成功完成后要执行的方法 
       //each循环 使用$.each方法遍历返回的数据date
      $.each(data.first, function(i, item) {
            var str = 'id:' + item.name + '性别：' + item.sex;
            send(1,1,str)
       })
   }
})
}
