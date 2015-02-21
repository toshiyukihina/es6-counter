var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var mocha = require('gulp-mocha');
var jsdoc2md = require('gulp-jsdoc-to-markdown');
var concat = require('gulp-concat');

gulp.task('build', function() {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('lib'));
});

gulp.task('clean', function() {
  // TODO
});

gulp.task('test', function() {
  require('babel/register');
  return gulp.src('test/**/*.js')
    .pipe(mocha());
});

gulp.task('watch', function() {
  return gulp.watch('src/**/*.js', ['build', 'test']);
});

gulp.task('docs', ['build'], function() {
  return gulp.src('lib/**/*.js')
    .pipe(concat('api.md'))
    .pipe(jsdoc2md())
    .pipe(gulp.dest('docs'));
});

gulp.task('default', ['clean', 'build', 'test', 'docs']);
