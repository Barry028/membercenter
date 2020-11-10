var gulp = require('gulp');
// SCSS
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var cssnano = require("cssnano");
// var autoprefixer = require('gulp-autoprefixer');
var autoprefixer = require('autoprefixer');
// 合併
// var concat = require('gulp-concat');
// // 壓縮
// var minifyCSS  = require('gulp-minify-css');
// // 重新命名
// var rename = require("gulp-rename");
// // 壓縮
// var uglify = require('gulp-uglify');
// // 照片壓縮
// var imagemin = require('gulp-imagemin');
// var mozjpeg = require('imagemin-mozjpeg');
// var optipng = require('imagemin-optipng');// 載入 imagemin-optipng 套件

gulp.task('concat', function() {
    return gulp.src('src/css/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('src/css/build'));
});

gulp.task('minify-css',['concat'], function() {
    return gulp.src('src/css/build/all.css')
        .pipe(minifyCSS({
            keepBreaks: true,
        }))
        .pipe(rename(function(path) {
            path.basename += ".min";
            path.extname = ".css";
        }))
        .pipe(gulp.dest('src/css/build/'));
});

gulp.task('uglify', function() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.basename += ".min";
            path.extname = ".js";
        }))
        .pipe(gulp.dest('src/js/build'));

});

gulp.task('sass', function(){
    return gulp.src('src/scss/*.scss')
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sass({
            outputStyle: 'expanded' //nested expanded compact compressed
        }))
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.', {
            includedContent: false,
            sourceRoot: '../scss'
        }))
        .pipe(gulp.dest('dist/css')) // 指定編譯後的 css 檔案目錄
        .pipe(gulp.dest('src/css')); // 指定編譯後的 css 檔案目錄
});


gulp.task('imagemin', function() {
    return gulp
        .src('img/*')
        .pipe(
            imagemin([
                mozjpeg({
                    quality: 75,
                }),
                optipng({
                    optimizationLevel: 3, // 優化級別
                }),
            ])
        )
        .pipe(gulp.dest('img/public'));
});

gulp.task('sass-icon', function(){
    return gulp.src('src/vender/icon_JobBank/*.scss')
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.', {
            includedContent: false,
            sourceRoot: '../scss'
        }))
        .pipe(gulp.dest('src/vender/icon_JobBank/css/')); // 指定編譯後的 css 檔案目錄
});

gulp.task('watch',function(){
    gulp.watch('src/scss/*.scss', ['sass']);
});

gulp.task('default',['minify-css','uglify','sass','webserver']);

