var gulp = require('gulp');
var compass = require('gulp-compass');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS= require('gulp-minify-css');
var imagemin= require('gulp-imagemin');

/*var gulp = require("gulp");//把gulp模块包含进去
//gulp.task()任务 两个参数  第一个名字 第二个要做的事情
gulp.task('hello',function(){
  console.log('您好');
});*/

//gulp.task('default', ['hello']);//第二个参数为，默认要执行的任务的列表

//gulp主要的功能  读取想要处理的文件 然后放到想要放的地方去
//gulp.src() 找出想要处理的文件
//通过.pipe()处理这些找出来的文件 pipe可以理解成管道 在每个管道中可以去指定他的功能，去处理这个文件
//.pipe(gulp.dest())  把处理好的文件放到指定的地方

//怎样使用gulp把一个文件复制到另一个文件中
// var gulp = require('gulp');
gulp.task('copy-index',function(){
//大部分gulp的任务就是去读取要处理的文件 读取时 src()
  return gulp.src('index.html').pipe(gulp.dest('dist'));
});
//gulp.task('default', ['copy-index']);

gulp.task('images',function(){
  // return gulp.src('images/*.jpg').pipe(gulp.dest('dist/images'));  
  //images/*.jpg 意思是images文件夹下的所有名字的jpg格式的文件
  // return gulp.src('images/*.{jpg,png}').pipe(gulp.dest('dist/images'));  
  //{}里面可以指定多个扩展名 用，隔开注意，后面不能有空格
  // return gulp.src('images/*').pipe(gulp.dest('dist/images'));  
  //images/*是images下的所有文件 但不包括文件下的文件
  // return gulp.src('images/*/*').pipe(gulp.dest('dist/images'));  
  //images/*/*意识是images里面的所有东西包含images里面二级页面所有的东西
  return gulp.src('images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));  
});
//运行多个gulp，可以用一个数组，数组里的每一个项目就是用来匹配文件的gulp
// gulp.task('data', function(){
//   return gulp.src(['xml/*.xm','json/*.json']).pipe(gulp.dest('dist/data'));
// });
//经常把文件包含到要处理的文件列表里面，在这些列表里面可能有一些特定的文件而你又不想包含进来，在这些列表里面创建一个gulp可以描述一些要排除的文件，在前面加一个！即可
gulp.task('data', function(){
  return gulp.src(['xml/*.xm','json/*.json','!json/secret-*.json']).pipe(gulp.dest('dist/data'));
});
//在创建gulp的时候可以创建gulp依赖的其他任务
//创建一个任务build 依赖与上面三个任务 执行的时候是会先执行依赖的任务，然后在执行他要做的事 执行依赖的任务会同时执行，而不是依次执行
// gulp.task('build',['copy-index','images','data'],function(){
  // console.log('编译成功');
// });
//gulp.watch()可以用来监视一些文件，当这些文件发生一些变化的时候，就会立即去执行一些任务
gulp.task('watch',function(){
  gulp.watch('index.html',['copy-index']);//第二个参数必须是数组 意思是当index.html发生变化的时候执行copy-index任务
  gulp.watch('images/**/*',['images']);
  gulp.watch('xml/*.xm','json/*.json','!json/secret-*.json',['data']);
});
//gulp提供了一些很好的接口，但是它本身并不会去做太多的事情，除了可以去读取文件，去监视文件的变化，可以把文件放到指定的位置，我们可以使用插件去扩展gulp的功能


gulp.task('sass', function(){
  return gulp.src('stylesheets/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS()) //最小化css gulp-minify-css
    .pipe(gulp.dest('dist/css'));

});
//gulp-connect 创建本地服务器
gulp.task('server', function () {
  connect.server({
    root:'dist',
    livereload:true //启用实时刷新
  });
});
//实时刷新浏览器
gulp.task('copy-index',function(){
//大部分gulp的任务就是去读取要处理的文件 读取时 src()
  return gulp.src('index.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});
gulp.task('default',['server','watch']);
//gulp-concat 可以把一些文件合并到一起
gulp.task('scripts', function(){
  return gulp.src(['javascript/index.js','javascript/supersized.3.2.7.min.js'])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify()) //gulp-uglify压缩js文件
    .pipe(rename('vendor.min.js'))
    .pipe(gulp.dest('dist/js'));
});

//在把处理好的文件存储在指定的位置之前，我们可以对其重命名 gulp-rename
//优化图像体积
