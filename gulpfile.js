
var fs = require('fs');
var gulp = require('gulp');
var rename = require("gulp-rename");
var gulpGithubStylePage = require('./lib/index');

gulp.task('test', function() {
    return gulp.src('./README.md')
        .pipe(gulpGithubStylePage())
        .pipe(rename('index.html'))
        .pipe(gulp.dest('test'));
});

gulp.task('test2', function() {
    gulp.src('./README.md')
        .pipe(gulpGithubStylePage({
            template: 'project',
            vars: {
                pkg: {
                    name: 'awesomeProject',
                    version: '0.1.0'
                },
                examples: ['simple']
            }
        }))
        .pipe(rename('index2.html'))
        .pipe(gulp.dest('build'));
});