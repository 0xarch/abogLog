#!/bin/sh
cp $1 posts_tmp/
tmp_num=$(cat posts/__MAIN__)
let next_num=$tmp_num+1
echo $next_num > posts/__MAIN__
tmp_pic=$1
tmp_name=$2
mv posts_tmp/${tmp_pic##*/} posts_sources/$2
touch posts/$2.html
sed -i "10a <div onclick=\"fopen(\'$2.html\')\" id=\"$2\" class=\"blogs\"><img src=\"posts_sources/$2\" width=\"90%\" height=\"90%\" class=\"blog_header_img\"/><br/>$2</div>" index.html
sed -i "2a \"$2\"," scripts/search.js
echo "posts/$2.html"
echo "<!DOCTYPE html><head><meta http-equiv=\"content-type\" content=\"text/html;charset=utf-8\" /><link rel=\"stylesheet\" type=\"text/css\" href=\"../sources/style.css\"></head><body>" >>posts/$2.html
echo "<br/></body></html>" >> posts/$2.html
