var gulp = require('gulp'),
    print = require('gulp-print'),
    babel = require('gulp-babel'),
    webserver = require('gulp-webserver');

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
