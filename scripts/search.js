var blogs=[
"博客建立",
"博客建立历程",
];
function searchInBlog(){
	var needs=document.getElementById("searchIn").value;
	console.log(needs);
	for(var i=0;i<blogs.length;i++){
		
		if(blogs[i].includes(needs)){
			
			document.getElementById(blogs[i]).style.display="inline-block";
			
		}else{
			document.getElementById(blogs[i]).style.display="none";
		}
	}
}
