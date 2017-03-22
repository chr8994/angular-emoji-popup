var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var path    = require("path");
var DEST = "dist/js";
var SRC = "src/js/*.js";
var SRC_CSS = "src/css/*.css";

/**
 *
 *  Manage Core Files
 *
 **/
gulp.task('core-js', function() {
     return gulp.src(SRC)
            .pipe(plumber())
            .pipe(concat('main.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist/js'));
});
gulp.task('core-css', function() {
     return gulp.src(SRC_CSS)
            .pipe(plumber())
            .pipe(concat('main.min.css'))
            .pipe(uglifycss())
            .pipe(gulp.dest('dist/css'));
});
gulp.task('default', ['core-js', 'core-css']);
