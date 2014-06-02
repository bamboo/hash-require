require('source-map-support').install();

var gulp = require('gulp');
var mjs = require('gulp-mjs');
var mocha = require('gulp-mocha');
var es = require('event-stream');
var path = require('path');
var Stream = require('stream').Stream;

var paths = {
    src: ['*.mjs'],
    dest: '.',
    test: {
      lib: ['test/for-all.mjs'],
      src: ['test/*-test.mjs'],
      dest: 'test'
    }
};

function macros() {
  return compile(paths.src, paths.dest);
}

function compile(src, dest) {
  return combine(
    gulp.src(src),
    mjs({debug: true}),
    gulp.dest(dest))
  .on('error', onError);
}

function combine() {
  return es.pipeline.apply(null, arguments);
}

var javascriptFiles = es.map(function (data, callback) {
  if (isJavascriptFile(data))
    callback(null, data);
  else
    callback();
});

function test() {
  return combine(
    compile(paths.test.src, paths.test.dest),
    javascriptFiles,
    mocha({reporter: 'spec'}));
}

function isJavascriptFile(f) {
  return f.path && path.extname(f.path) == '.js';
}

function onError(err) {
  console.warn(err.stack || err.message || err.toString());
}

gulp.task('test-lib', function () {
  return compile(paths.test.lib, paths.test.dest);
});

gulp.task('test', ['macros', 'test-lib'], test);

gulp.task('macros', macros);

gulp.task('default', ['test']);
