var gulp          = require('gulp');
var browserSync   = require('browser-sync');
var runSequence   = require('run-sequence');
var reload        = browserSync.reload;
var sass          = require('gulp-ruby-sass');
var compass       = require('gulp-compass');
var autoprefixer  = require('gulp-autoprefixer');

var AUTOPREFIXER_BROWSERS = [
  'ie >= 8',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

// Static server
gulp.task('browser-sync', function() {
  browserSync({
    server: {
    	baseDir: "./"
    }
  });
});

// Compile sass, autoprefix
gulp.task('styles_pc', function() {
  return sass('stylesheets/theme/pc/master.scss', {
    bundleExec: true,
    style: 'expanded',
    compass: false
  })
  .on('error', function(err) {
    console.error('Error', err.message);
  })
  .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
  .pipe(gulp.dest('dist/stylesheets/theme/pc'))
});

gulp.task('styles_sp', function() {
  return sass('stylesheets/theme/sp/master.scss', {
    bundleExec: true,
    style: 'expanded',
    compass: false
  })
  .on('error', function(err) {
    console.error('Error', err.message);
  })
  .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
  .pipe(gulp.dest('dist/stylesheets/theme/sp'))
});

// Default task
gulp.task('default', function() {
  runSequence('styles_pc', 'styles_sp', 'browser-sync'),
  gulp.watch(['*.html'], reload);
  gulp.watch(["stylesheets/*.scss", "stylesheets/**/*.scss"], ['styles_pc', 'styles_sp', reload]);
});
