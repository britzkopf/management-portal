var gulp = require('gulp'),
	sass = require('gulp-sass');



gulp.task('sass', [], function () {
    return gulp.src('scss/app.scss')
    	.pipe(sass().on('error', sass.logError))
    	.pipe(gulp.dest('app/css'));
});

