'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    sequence = require('run-sequence'),
    connect = require('gulp-connect'),
    sync = require('browser-sync');

// Sassコンパイル
gulp.task('sass', function () {
	return gulp.src('../scss/*.scss').pipe(sass().on('eroor', sass.logError)).pipe(gulp.dest('../htdocs/css'));
});

// ES6コンパイル (Babel)
gulp.task('babel', function () {
	return gulp.src('../es6/*.es6').pipe(babel({
		presets: ['../gulp/node_modules/babel-preset-es2015']
	})).pipe(gulp.dest('../htdocs/js'));
});

// ローカルサーバ立ち上げ
gulp.task('connect', function () {
	connect.server({
		root: '../htdocs/',
		livereload: true
	});
});

// 自動リロード
gulp.task('reload', function () {
	return gulp.src(['../htdocs/*.html', '../htdocs/css/*.css', '../htdocs/js/*.js', '../htdocs/img/']).pipe(connect.reload());
});

// コンパイル関係とリロードの順番を同期化
gulp.task('seq-reload', function () {
	return sequence(['sass', 'babel'], 'reload');
});

// 'gulp'だけで実行できるようdefaultタスクを設定
gulp.task('default', ['connect', 'sass', 'babel'], function () {
	return gulp.watch(['../htdocs/*.html', '../scss/*.scss', '../babel/*.es6', '../htdocs/img/*.png'], ['seq-reload']);
});
