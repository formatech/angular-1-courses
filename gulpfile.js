const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-html-minifier');
const templateCache = require('gulp-angular-templatecache');
const sourcemaps = require('gulp-sourcemaps');

// Compress JavaScript using Uglify
gulp.task('js', ['views'], function () {

    return gulp.src(['src/app/**/*.js', 'dist/templates.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        // .pipe(uglify())
        .pipe(sourcemaps.write('.', { addComment: true }))
        .pipe(gulp.dest('dist'));

});

// Copy other assets
gulp.task('copy', function () {

    return gulp.src(['src/lib', 'src/api'])
        .pipe(gulp.dest('dist'));

});

// Copy and compress index.html page
gulp.task('html', function () {

    return gulp.src('src/index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/'))

});

// Compress Angular Views and put them in $templateCache
// so they get bundled directly in the js
gulp.task('views', function () {

    return gulp.src('src/views/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(templateCache({ module: 'app', root: '/views/' }))
        .pipe(gulp.dest('dist/'))

});


// Copy the css, we can do a lot of things here for example compressing the css
gulp.task('css', function () {

    return gulp.src('src/*.css')
        .pipe(gulp.dest('dist'))

})

gulp.task('default', ['copy', 'js', 'css']);
