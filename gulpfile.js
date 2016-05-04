var del = require('del'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload');

/****************** �ļ����������� ******************/
var watchList = [  // ֻ�������Ŀ¼�µ��ļ��䶯����webpack����µ�Դ�ļ�����
    'dist/**'
];

gulp.task('watch', () => {
    livereload({ start: true });  // �����Ͳ����ֶ�����livereload.listen()��

    gulp.watch(watchList, (file) => {
        livereload.changed(file.path);
    });
});

/****************** ����ѹ������ ******************/
gulp.task('minify', () => {
  gulp.src('dist/index.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/index.min.js'));
});

/****************** �������Ŀ¼ ******************/
gulp.task('clean', () => {
    return del([
        'dist/**',
        '!dist'
    ]);
});
