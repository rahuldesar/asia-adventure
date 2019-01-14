const gulp = require('gulp');
const sass = require('gulp-sass');
var browserSync = require('browser-sync').create();



gulp.task('copyHtml', function(done){
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));
		 done();

	});



gulp.task('copyCss', function(done){
	gulp.src('temp/css/*.css')
		.pipe(gulp.dest('dist/css'));
		 done();

	});



gulp.task('copyJs', function(done){
	gulp.src('src/js/*.js')
		.pipe(gulp.dest('dist'));
		 done();

	});


gulp.task('copyImg', function(done){
	gulp.src('src/img/**/*')
		.pipe(gulp.dest('dist/img'));
		 done();

	});

gulp.task('copyAssests', function(done){
	gulp.src('src/assests/**/*')
		.pipe(gulp.dest('dist/assests'));
		 done();

	});

gulp.task('sassCompile', function(done){
	gulp.src('src/sass/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('temp/css'));
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
	gulp.watch('src/sass/style.scss', gulp.series(['sassCompile','copyCss'])); 
	gulp.watch('src/index.html', gulp.series(['copyHtml'])); 
});

//npm install --save-dev gulp-sequence
//https://www.npmjs.com/package/gulp-merge


//https://www.npmjs.com/package/gulp-uglify

