const gulp = require('gulp');
const sass = require('gulp-sass');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');

//Compile scss to sass
function style() {
    //Get path of scss
    return gulp.src('./wwwroot/Content/styles/main.scss')
        //convets scss
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./'))
        .pipe(cleanCSS())
        //Dist folder
        .pipe(gulp.dest('./wwwroot/s'))
        .pipe(browserSync.stream());
}

function scripts() {
    // Get path of ts files
    return gulp.src('./wwwroot/Content/Scripts/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'main.js'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./wwwroot/js/'));
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './',
        }
    });

    gulp.watch('./wwwroot/Content/styles/**/*.scss', style);
    gulp.watch('./wwwroot/Content/Scripts/**/*.ts', scripts);

}
// Just run gulp watch to start gulp
exports.watch = watch;