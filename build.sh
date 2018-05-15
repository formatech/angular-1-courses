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
