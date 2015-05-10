var gulp = require('gulp');
var wiredep = require('wiredep');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var $ = require('gulp-load-plugins')();

var config = { 
    sassPath: './resources/sass',
     bowerDir: './bower_components' 
}

//浏览器自动刷新
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './source',
            routes: {
                "/bower_components": "bower_components"
            }
        }
    });
});

// gulp.task('copy-js', function() {
//     gulp.src(wiredep().js)
//         .pipe(gulp.dest('./source/lib/js/'))
//         .pipe(gulp.dest('./dist/lib/js'));
// });

gulp.task('copy-css', function() {
    return gulp.src(wiredep().css)
        .pipe(gulp.dest('./source/lib/css/'))
        .pipe(gulp.dest('./dist/lib/css/'));
});
gulp.task('bower', function() { 
    return $.bower() .pipe(gulp.dest(config.bowerDir)) 
});



//处理scss
gulp.task('scss', function() {
    gulp.src('./source/css/scss/main.scss')
        .pipe($.sass({
            outputStyle: 'nested'
        }))
        .pipe(gulp.dest('./dist/css/'));
});

// 处理css
gulp.task('css', function() {
    gulp.src('./source/build/css/**.css')
        .pipe($.autoprefixer('last 2 version', 'ie8', 'ie9'))
        .pipe($.minifyCss())
        .pipe(gulp.dest('./dist/build/css'));
});

//处理js
gulp.task("js", function() {
    gulp.src('./source/build/js/**.js')
        .pipe($.uglify())
        .pipe(gulp.dest('./dist/build/js/'));
});

//复制字体
gulp.task("font",function(){
	gulp.src(['./bower_components/bootstrap/dist/fonts/**','./bower_components/flat-ui/dist/fonts/**','./bower_components/fontawesome/fonts/**'])
		.pipe(gulp.dest('./source/lib/fonts/'))
		.pipe(gulp.dest('./dist/lib/fonts/'));
});
//在html中自动插入链接
gulp.task("html", function() {
    gulp.src('./source/**.html')
        .pipe(wiredep.stream({
            fileTypes: {
                html: {
                    replace: {
                        js: function(filePath) {
                            return '<script src="' + './lib/js/' + filePath.split('/').pop() + '"></script>';
                        },
                        css: function(filePath) {
                            return '<link rel="stylesheet" href="' + './lib/css/' + filePath.split('/').pop() + '"/>';
                        }
                    }
                }
            }
        }))
        .pipe($.inject(
          gulp.src(['source/build/js/**.js'], { read: false }), {
            addRootSlash: false,
            transform: function(filePath, file, i, length) {
              return '<script src="' + filePath.replace('source/', '') + '"></script>';
            }
          }))
    
        .pipe($.inject(
          gulp.src(['source/build/css/**.css'], { read: false }), {
            addRootSlash: false,
            transform: function(filePath, file, i, length) {
              return '<link rel="stylesheet" href="' + filePath.replace('source/', '') + '"/>';
            }
          }))
        .pipe(gulp.dest('./source/'))
        .pipe(gulp.dest('./dist/'));
});

//处理图片
gulp.task("img", function() {
    gulp.src('./source/img/**/**')
        .pipe($.imagemin())
        .pipe(gulp.dest('./dist/img'));
});
//构建
gulp.task("build",['css', 'js', 'html', 'img','font'])
gulp.task('default', ['browser-sync'], function() {
    // 观察改动
    gulp.watch([
        'source/**.html',
        'source/css/**.css',
        'souce/js/**.js',
        'source/img/**/*'
    ]).on('change', reload);

    gulp.watch('source/build/css/**.css', ['css']);
    gulp.watch('source/build/js/**.js', ['js']);
    gulp.watch('source/img/**/*', ['img']);
    gulp.watch('bower.json', ['html','copy-js','copy-css']);

});
