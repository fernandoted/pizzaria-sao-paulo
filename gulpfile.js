// Gulpfile of Pizzaria São Paulo's project (https://github.com/fernandoted/pizzaria-sao-paulo)
// author: Fernando Ted (https://github.com/fernandoted/)
// 08-31-2016

var gulp = require("gulp");
var sass = require("gulp-sass");
var notify = require("gulp-notify");

// compile css
gulp.task("css-compile", function(){
	return gulp.src("./source/sass/*.scss")
	.pipe(sass({outputStyle:'compressed'}))
	.on('error', notify.onError({ title: 'Erro ao compilar css', message: '<%= error.message %>'}))
	.pipe(gulp.dest("./dist/css"));
});

// move font awesome
gulp.task("move-fonts", function(){
	return gulp.src("./source/components/font-awesome/fonts/**")
	.pipe(gulp.dest("./dist/fonts"));
});

// move js files from source to dist folder
gulp.task("build-js", function(){
	return gulp.src([
	'./source/components/jquery/dist/jquery.js',
	'./source/components/jquery.mobile-1.4.5/jquery.mobile-1.4.5.js',
	'./source/components/bootstrap/dist/js/bootstrap.js'
	])
	.pipe(gulp.dest("./dist/js"));
});

// move app.js from source to dist folder
gulp.task("move-js", function(){
	return gulp.src("./source/js/*.js")
	.pipe(gulp.dest("./dist/js"));
});

// watch files
gulp.task("listen-files", function(){
	gulp.watch("./source/sass/*.scss",["css-compile"]);
	gulp.watch("./source/js/**/*.js",["move-js"]);
});

// default command
gulp.task("default", ["build-js","move-js","css-compile","listen-files"]);