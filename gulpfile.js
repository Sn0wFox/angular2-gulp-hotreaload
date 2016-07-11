const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const tscConfig = require('./tsconfig.json');

// clean the contents of the distribution directory
gulp.task('clean', () => {
  return del('build/**/*');
});

// TypeScript compile
gulp.task('compile', () => {
  return gulp
    .src(['src/**/*.ts', 'typings/**/*.ts'])
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build'));
});

// Copy static files
gulp.task('assets', () => {
  return gulp
    .src([
      'src/**/*.css',
      'src/**/*.html'
    ])
    .pipe(gulp.dest('build'));
});

// Watch for changes
gulp.task('watch', () => {
    gulp
      .watch(["src/**/*.ts"], ['compile'])
      .on('change', (e) => {
          console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
      });
    gulp
      .watch(["src/**/*.html", "src/**/*.css"], ['assets'])
      .on('change', (e) => {
          console.log('Resource file ' + e.path + ' has been changed. Updating.');
      });
});

gulp.task('build', ['compile', 'assets']);
gulp.task('default', ['build']);
