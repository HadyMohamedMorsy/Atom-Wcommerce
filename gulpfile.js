const {src , dest , watch , series , task} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles(){
    return src('./sass/**/*.scss' , { sourcemaps: true }).pipe(sass({outputStyle : 'compressed'})).pipe(dest('./vendor/dist/css/' , { sourcemaps: true }))
}

function WatchTask(){
    watch(['./main.scss','./sass/**/*.scss'] , buildStyles)
}

task('style' , WatchTask);