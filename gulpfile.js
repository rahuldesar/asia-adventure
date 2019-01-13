const gulp = require('gulp');
const sass = require('gulp-sass');
var browserSync = require('browser-sync').create();



gulp.task('copyHtml', function(done){
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));
		 done();

	});



gulp.task('copyCss', function(done){
	gulp.src('src/css/*.css')
		.pipe(gulp.dest('dist'));
		 done();

	});



gulp.task('copyJs', function(done){
	gulp.src('src/js/*.js')
		.pipe(gulp.dest('dist'));
		 done();

	});

gulp.task('sassCompile', function(done){
	gulp.src('src/sass/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('src/css'));
    done();
});


gulp.task('browserSync', function() {
   browserSync.init({
      server: {
         baseDir: 'dist'
      },
   })
})


gulp.task('watch', function() {
	gulp.watch('src/sass/style.scss', gulp.series(['sassCompile','copyHtml','copyCss','copyJs'])); 
	gulp.watch('src/index.html', gulp.series(['sassCompile','copyHtml','copyCss','copyJs']));
	});


//npm install --save-dev gulp-sequence
//https://www.npmjs.com/package/gulp-merge


//https://www.npmjs.com/package/gulp-uglify

