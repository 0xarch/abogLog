#!/bin/sh
mv posts/$1.html posts_backup/
rm posts_sources/$1
sed -i '/$1/d' index.html
