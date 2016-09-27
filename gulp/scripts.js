'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();


gulp.task('scripts-reload', function() {
  return buildScripts()
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  return buildScripts();
});

var nonspecAndMockFilter = $.filter(['**/*.js', '!**/*.spec.js', '!**/*.mock.js'], { restore: true });

function buildScripts() {
  return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
    .pipe($.cached('scripts'))
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.size())
    .pipe($.remember('scripts'))
    .pipe(nonspecAndMockFilter)
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')));
};
