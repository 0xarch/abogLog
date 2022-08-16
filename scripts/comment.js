 function send(frameNumber,haveData,existedData){
	if(frameNumber==1){
		if(haveData==1){
			var toSend=existedData;
		}else{
		var toSend=document.getElementById("commenter1").value;
		}
		var p=document.createElement("p");
		p.innerHTML="<hr>"+toSend+"<br>";
		document.getElementById("viewComment1").prepend(p);
	}else{
		if(haveData==1){
			var toSend=existedData;
		}else{
		var toSend=document.getElementById("commenter2").value;
		}
		var p=document.createElement("p");
		p.innerHTML="<hr>"+toSend+"<br>";
		document.getElementById("viewComment2").prepend(p);
	}
}

var blogComments="sources/commentBase.json";
function readDataBase(){$.ajax({
   url: blogComments,//json文件位置
   type: "GET",//请方式为get
   dataType: "json", //返回数据格式为json
   //xhrFields:'Access-Control-Allow-Origin':'*',
   success: function(data) {//请求成功完成后要执行的方法 
       //each循环 使用$.each方法遍历返回的数据date
      $.each(data.main,function(i, item) {
            var str = 'ID-' + item.id + '\n' + item.text;
            if(item.blogName=="博客建立"){
				send(1,1,str);
			}else if(item.blogName=="第二篇测试"){
				send(2,1,str);
			}
       })
   }
})
}
 function postDataBase(){
        $.ajax({
            type: "POST",
            url: blogComments,
            contentType: "application/text;charset=utf-8",
            //data:{"blogName":"博客建立","id":"ADMIN","text":"测试博客评论上传"},
            data:"1",
            dataType: "text",
            success:function (message) {
                //alert("提交成功"+JSON.stringify(message));
                alert("ok");
            },
            error:function (message) {
                //alert("提交失败"+JSON.stringify(message));
            }
        });
}
