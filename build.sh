<<<<<<< HEAD
SRC=src
DIST=dist

echo 'Building app ...'
echo 'Cleaning dist'
rm -rf $DIST && mkdir $DIST

cp -r $SRC/{index.html,lib,style.css,api} $DIST

uglifyjs $SRC/app/app.js $SRC/app/config.js $SRC/app/mr.filter.js $SRC/app/todos/todos.controller.js $SRC/app/todos/todos.service.js --output $DIST/app.min.js --source-map --compress --mangle --
=======
echo 'Building my app ...'
echo 'Cleaning dist'
rm -rf $DIST/*

echo 'Concatenate app.js'
cat src/app/app.js > dist/app.min.js
cat src/app/config.js >> dist/app.min.js
cat src/app/mr.filter.js >> dist/app.min.js
cat src/app/todos/todos.controller.js >> dist/app.min.js
cat src/app/todos/todos.service.js >> dist/app.min.js

echo 'Copying assets ...'
cp -r src/{lib,style.css,api,index.html,views} dist

echo 'Compressing Javascripts'
uglifyjs dist/app.min.js --output dist/app.min.js --compress --mangle
>>>>>>> session-03
