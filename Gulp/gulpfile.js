const gulp = require('gulp');
const sass = require("gulp-sass")(require("sass"));

gulp.task('One',async ()=>{
    console.log('One');
})
async function b(){
    console.log('b');
}
function c(done){
    console.log('c');
    done();
}
function compileSass(){
    return gulp.src("sass/**/*.scss")
    .pipe(sass({
        outputStyle: "compressed"
    }))
    .pipe(gulp.dest("css"));
}
function watchFiles(){
    gulp.watch("sass/**/*.scss", compileSass);
}
async function generateSymlink(){
    gulp.src("sass/**/*.scss").pipe(gulp.symlink("symlink/"))
}
exports.default = gulp.series('One',b,c,compileSass,generateSymlink,watchFiles);
