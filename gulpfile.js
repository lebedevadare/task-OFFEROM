'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./app/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/css'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
})

gulp.task('start', function () {
  return gulp.src('./app/css/*.css')
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('./style/css'))
});
