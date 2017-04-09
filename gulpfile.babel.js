import gulp from 'gulp';

import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import cleanCSS from 'gulp-clean-css';
import htmlReplace from 'gulp-html-replace';
import babel from 'gulp-babel';
import gulpWebpack from 'gulp-webpack';
import postCSS from 'gulp-postcss';

import webpack from 'webpack';
import postCSSImport from 'postcss-import';
import del from 'del';
import eslint from 'eslint';
import browserSync from 'browser-sync';

gulp.task('es6', () =>
  gulp.src('src/js/app.js')
    .pipe(gulpWebpack({
      output: {
        filename: 'bundle.min.js',
      },
    }, webpack))
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
);

gulp.task('html', () =>
  gulp.src('src/index.html')
    .pipe(htmlReplace({
      css: 'css/bundle.min.css',
      js: 'js/bundle.min.js',
    }))
    .pipe(gulp.dest('dist'))
);

gulp.task('css', () =>
  gulp.src('src/css/app.css')
    .pipe(rename('bundle.min.css'))
    .pipe(postCSS([postCSSImport]))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'))
);

gulp.task('eslint', () =>
  eslint('src/js/**/*.js')
);

gulp.task('clean', () =>
  del(['dist/**'])
);

gulp.task('browser-sync', () => {
  browserSync.init(['dist/css/**.css', 'dist/js/**.js', 'dist/**.html'], {
    server: 'dist',
  });
});

gulp.task('default', ['html', 'css', 'es6', 'browser-sync'], () => {
  gulp.watch('src/css/*.css', ['css']);
  gulp.watch('src/js/*.js', ['es6']);
  gulp.watch('src/*.html', ['html']);
});

gulp.task('build', ['html', 'css', 'es6']);
