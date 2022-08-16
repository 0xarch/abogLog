#!/bin/sh
mv posts/$1.html posts_backup/
rm posts_sources/$1
sed -ie '/$1/d' index.html
sed -ie '/$1/d' scripts/search.js
tmp_num=$(cat posts/__MAIN__)
let previous_num=$tmp_num+1
echo $previous_num > posts/__MAIN__
