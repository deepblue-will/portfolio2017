const
	gulp	= require('gulp'),
	sass	= require('gulp-sass'),
	babel = require('gulp-babel'),
	babelify = require('babelify'),
	browserify = require('browserify'),
	rename = require('gulp-rename'),
	sequence = require('run-sequence'),
	connect = require('gulp-connect'),
	sync	= require('browser-sync'),
	source = require('vinyl-source-stream')
;

// Sassコンパイル
gulp.task('sass', () =>
	gulp.src('../scss/*.scss')
	.pipe(sass().on('eroor', sass.logError))
	.pipe(gulp.dest('../htdocs/css'))
);

// ES6コンパイル (Babel)
gulp.task('babel', () =>
	gulp.src('../jsx/*.jsx')
	.pipe(babel({
		presets: ['../gulp/node_modules/babel-preset-react', '../gulp/node_modules/babel-preset-es2015']
	}))
	.pipe(gulp.dest('../tmp/'))
);

// JSビルド
gulp.task('browserify', () =>
	browserify({
		entries: '../tmp/script.js'
	})
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('../htdocs/js'))
);

// 上2つ、まとめ
gulp.task('transpile', () =>
	sequence('babel', 'browserify')
);

// ローカルサーバ立ち上げ
gulp.task('connect', () => {
	connect.server({
		root: '../htdocs/',
		livereload: true
	});
});

// 自動リロード
gulp.task('reload', () =>
	gulp.src(['../htdocs/*.html', '../htdocs/css/*.css', '../htdocs/js/*.js', '../htdocs/img/'])
	.pipe(connect.reload())
);

// コンパイル関係とリロードの順番を同期化
gulp.task('seq-reload', () =>
	sequence(['sass', 'transpile'], 'reload')
);

// 'gulp'だけで実行できるようdefaultタスクを設定
gulp.task('default', ['connect', 'sass', 'transpile'], () =>
	gulp.watch(['../htdocs/*.html', '../scss/*.scss', '../jsx/*.jsx', '../htdocs/img/*.png'], ['seq-reload'])
);
