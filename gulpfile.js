'use strict';

let gulp        = require('gulp');
let browserSync = require('browser-sync');

gulp.task('default', ['browser-sync'], function () {
});

gulp.task('browser-sync', [], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 7000
    });
});
