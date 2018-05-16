# Session 03
Automate application build process

1. using `build.sh` script that can run on linux/macs and windows with shell support

2. using [gulp](https://gulpjs.com/) the js task runner, more recommended since it's supported by default by all operating systems.

to install gulp:

- 2.1 make sure you have node/npm installed, (use `npm -v`, `node -v` on terminal)
- 2.2 install gulp-cli tool `npm i -g gulp-cli`
- 2.3 install gulp and needed plugins in your project

```sh
npm i gulp gulp-concat gulp-uglify gulp-html-minifier gulp-angular-templatecache --save-dev
```

# Session 04
Directives:
 - User controls to defined new elements `restrict: 'E'`
 - Decorators to extend existing elements `restrict: 'A'`

Isolate scope by passing `scope: true`

Replace content with element by passing `replace: true`
