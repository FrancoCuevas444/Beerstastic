var gulp = require("gulp");
var sass = require("gulp-sass");
var livereload = require("gulp-livereload");

livereload({start: true});

gulp.task('livereload', function(){
	gulp.src('./*.html')
		.pipe(livereload());
});

gulp.task('sass', function(){
    gulp.src('./scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('scss/**/*.scss', ['sass', 'livereload']);
    gulp.watch('**/*.html', ['livereload']);
    gulp.watch('**/*.js', ['livereload']);
});

gulp.task('default', ['watch']);