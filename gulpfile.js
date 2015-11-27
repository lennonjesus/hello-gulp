var gulp = require('gulp');

var jshint = require('gulp-jshint');

var changed = require('gulp-changed');

var imagemin = require('gulp-imagemin');

var clean = require('gulp-clean');

gulp.task('jshint', function() {
  gulp.src('./src/app/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('imagemin', function() {

  var imgSrc = './src/app/images/**.*';

  var imgDest = './build/images';

  gulp.src(imgSrc)
    .pipe(changed(imgDest))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDest)).on('error', function(err) {
      console.log(err);
    });

});

gulp.task('clean', function() {
  return gulp.src('app/tmp', {read: false})
        .pipe(clean());
});
