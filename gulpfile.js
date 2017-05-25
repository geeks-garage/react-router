var gulp = require('gulp'),
    print = require('gulp-print'),
    babel = require('gulp-babel'),
    webserver = require('gulp-webserver'),
    less = require('gulp-less'),
    fs = require('fs'),
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackConfig = require('./webpack.config'),
    livereload = require('gulp-livereload'),
    cssnano = require('gulp-cssnano');

gulp.task('build', ['js', 'libs'], function(){
  return gulp.src('src/**/*.html')
          .pipe(print())
          .pipe(gulp.dest('build'));
});

gulp.task('watch', function(){
    gulp.watch('src/**/*.*', ['build']);
});

gulp.task('default', ['build']);

gulp.task('js', function() {
  return gulp.src('src/**/*.js')
        .pipe(print())
        .pipe(babel({ presets: ['es2015', 'react'] }))
        .pipe(gulp.dest('build'));
});

gulp.task('libs', function(){
    return gulp.src([
        'node_modules/systemjs/dist/system.js',
        'node_modules/babel-polyfill/dist/polyfill.js'])
        .pipe(print())
        .pipe(gulp.dest('build/libs'));
});

gulp.task('serve', ['build', 'watch'], function() {
    gulp.src('build')
        .pipe(webserver({ open: true }));
});

gulp.task('main-styles', () => {
  const source = 'src/app/assets/styles/main/index.less';
  const dest = 'src';

  const stream = gulp
    .src(source)
    .pipe(less())
    .pipe(livereload())
    .pipe(print())
    .pipe(cssnano())
    .pipe(gulp.dest(dest))
    .on('error', function (err) {
      console.log("error.........");
      this.emit('end');
    });



  return stream;
});

gulp.task('webpack-dev-server', () => new WebpackDevServer(webpack(webpackConfig), {
    hot: true,
    quiet: true
  }).listen(8080, 'localhost', (err) => {
    if (err) {
      console.log("Error.....", err);
    }
}));

gulp.task('dev', ['main-styles', 'webpack-dev-server']);
