var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less');
 
    const autoprefixer = require('gulp-autoprefixer');
 
// gulp.task('default', () =>
//     gulp.src('src/app.css')
        // .pipe(autoprefixer({
        //     browsers: ['last 2 versions'],
        //     cascade: false
        // }))
//         .pipe(gulp.dest('dist'))
// );

//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function () {
    gulp.src('src/less/index.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('src/css'))
        .pipe(gulp.dest('demo/'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css')); //将会在src/css下生成index.css
});
 
gulp.task('default',['testLess']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务
 
gulp.watch('src/less/*.less', ['testLess']);
//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径