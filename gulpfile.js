const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const buildStyles = () => {
  return src('coconut/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

const watchTask = () => {
  watch(['coconut/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);