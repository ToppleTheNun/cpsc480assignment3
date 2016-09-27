'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

var browserSync = require('browser-sync');

gulp.task('preprocess-reload', ['preprocess'], function () {
  browserSync.reload();
});

gulp.task('preprocess', ['inject'], function () {
  var injectScripts = [
    path.join(conf.paths.tmp, '/serve/app/**/*.js')
  ];
  return gulp.src(injectScripts)
    .pipe($.preprocess({context: {DEBUG: conf.debug}}))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')));
});
