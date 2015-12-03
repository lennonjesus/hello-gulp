'use strict'

var
  gulp = require('gulp')
  ,imagemin = require('gulp-imagemin')
  ,clean = require('gulp-clean')
  ,concat = require('gulp-concat')
  ,htmlReplace = require('gulp-html-replace')
  ,uglify = require('gulp-uglify')
  ,usemin = require('gulp-usemin')
  ,minifycss = require('gulp-minify-css')
  ,browserSync = require('browser-sync')

  // ,blah = require('gulp-blah')
;

gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });

  gulp.watch('dist/**/*').on('change', browserSync.reload);
});

gulp.task('default', ['copy'], function() {
  gulp.start(
    // 'build-js',
    // 'build-html'
    'usemin'
  );
});

gulp.task('imagemin', function () {
  gulp
    .src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('src/img'));
});

gulp.task('copy', ['clean'], function () {
  return gulp
    .src('src/**/*')
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
  return gulp
    .src('dist')
    .pipe(clean());
});

gulp.task('usemin', function () {
  return gulp
    .src('dist/**/*.html')
    .pipe(usemin({
      js: [uglify()],
      css: [minifycss()]
      // inlinejs: [uglify()],
      // inlinecss: [minifycss(), 'concat']
    }))
    .pipe(gulp.dest('dist'));
  ;
});

// gulp.task('build-js', function () {
//   gulp
//     .src('dist/js/**/*.js')
//     .pipe(concat('scripts.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/js'));
// });

// gulp.task('build-html', function () {
//   gulp
//     .src('dist/**/*.html')
//     .pipe(htmlReplace({
//       'js': 'js/scripts.js'
//     }))
//     .pipe(gulp.dest('dist/'));
//   ;
// });

/*

gulp.task('xxxxxxx', function () {
  gulp.src('');
});

*/

