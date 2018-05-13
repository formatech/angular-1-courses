SRC=src
DIST=dist

echo 'Building app ...'
echo 'Cleaning dist'
rm -rf $DIST && mkdir $DIST

cp -r $SRC/{index.html,lib,style.css,api} $DIST

uglifyjs $SRC/app/app.js $SRC/app/config.js $SRC/app/mr.filter.js $SRC/app/todos/todos.controller.js $SRC/app/todos/todos.service.js --output $DIST/app.min.js --source-map --compress --mangle --
