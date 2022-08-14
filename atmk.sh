#!/bin/sh
cp $1 posts_tmp/
tmp_pic=$1
tmp_name=$2
mv posts_tmp/${tmp_pic##*/} posts_sources/$2

sed -i "10a <div onclick=\"fopen(\'$2.html\')\" id=\"$2\" class=\"blogs\"><img src=\"posts_sources/$2\" width=\"90%\" height=\"90%\" class=\"blog_header_img\"/>$2</div>" index.html

touch posts/$2.html
