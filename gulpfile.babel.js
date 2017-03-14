import gulp from 'gulp';
import sass from 'gulp-sass';
import babel from 'gulp-babel'
import babelify from 'babelify';
import browserify from 'browserify';
import rename from 'gulp-rename';
import sequence from 'run-sequence';
import connect from 'gulp-connect';
import sync	from 'browser-sync';
import source from 'vinyl-source-stream';

// Sassコンパイル
gulp.task('sass', () =>
	gulp.src('./scss/*.scss')
	.pipe(sass().on('eroor', sass.logError))
	.pipe(gulp.dest('./htdocs/css'))
);

// ES6コンパイル (Babel)
gulp.task('babel', () =>
	gulp.src('./jsx/*.jsx')
	.pipe(babel({
		presets: ['../node_modules/babel-preset-react', '../node_modules/babel-preset-es2015']
	}))
	.pipe(gulp.dest('./tmp/'))
);

// JSビルド
gulp.task('browserify', () =>
	browserify({
		entries: './tmp/script.js'
	})
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('./htdocs/js'))
);

// 上2つ、まとめ
gulp.task('transpile', () =>
	sequence('babel', 'browserify')
);

// ローカルサーバ立ち上げ
gulp.task('connect', () => {
	connect.server({
		root: './htdocs/',
		livereload: true
	});
});

// 自動リロード
gulp.task('reload', () =>
	gulp.src(['./htdocs/*.html', './htdocs/css/*.css', './htdocs/js/*.js', './htdocs/img/'])
	.pipe(connect.reload())
);

// コンパイル関係とリロードの順番を同期化
gulp.task('seq-reload', () =>
	sequence(['sass', 'transpile'], 'reload')
);

// 'gulp'だけで実行できるようdefaultタスクを設定
gulp.task('default', ['connect', 'sass', 'transpile'], () =>
	gulp.watch(['./htdocs/*.html', './scss/*.scss', './jsx/*.jsx', './htdocs/img/*.png'], ['seq-reload'])
);
