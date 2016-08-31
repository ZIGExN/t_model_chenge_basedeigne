var gulp          = require('gulp');
var browserSync   = require('browser-sync');
var runSequence   = require('run-sequence');
var reload        = browserSync.reload;
var sass          = require('gulp-ruby-sass');

// Static server
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});

// Compile sass, autoprefix
gulp.task('sp_layout', function() {
  return sass('stylesheets/', {
    bundleExec: true,
    style: 'expanded',
    compass: false
  })
  .on('error', function(err) {
    console.error('Error', err.message);
  })
  .pipe(gulp.dest('dist/stylesheets/'))
});

// Default task
gulp.task('default', function() {
  runSequence('sp_layout', 'browser-sync'),
  gulp.watch(['*.html'], reload);
  gulp.watch(['stylesheets/*.scss', 'stylesheets/**/*.scss'], ['sp_layout', reload]);
});
