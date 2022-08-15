#!/bin/sh
cp $1 posts_tmp/
tmp_num=$(cat posts/__MAIN__)
let next_num=$tmp_num+1
echo $next_num > posts/__MAIN__
tmp_pic=$1
tmp_name=$2
mv posts_tmp/${tmp_pic##*/} posts_sources/$2

sed -i "10a <div onclick=\"fopen(\'$2.html\')\" id=\"$2\" class=\"blogs\"><img src=\"posts_sources/$2\" width=\"90%\" height=\"90%\" class=\"blog_header_img\"/>$2</div>" index.html
sed -i "2a \"$2\"," scripts/search.js
touch posts/$2.html
