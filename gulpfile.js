var del = require('del'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload');

/****************** 文件变更监控任务 ******************/
var watchList = [  // 只监控生产目录下的文件变动，与webpack监控下的源文件隔离
    'dist/**'
];

gulp.task('watch', () => {
    livereload({ start: true });  // 这样就不用手动调用livereload.listen()了

    gulp.watch(watchList, (file) => {
        livereload.changed(file.path);
    });
});

/****************** 代码压缩任务 ******************/
gulp.task('minify', () => {
  gulp.src('dist/index.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/index.min.js'));
});

/****************** 清理输出目录 ******************/
gulp.task('clean', () => {
    return del([
        'dist/**',
        '!dist'
    ]);
});
