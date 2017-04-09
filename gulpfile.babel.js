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
    .pipe(babel({ presets: ['es2015'] }))   // Transpile ES6+ into ES5
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))             // Copy to dist
);

gulp.task('html', () =>
  gulp.src('src/index.html')     // Take index.html
    .pipe(htmlReplace({
      css: 'css/bundle.min.css',   // Replace the stylesheet links section with the link to the new styleshet
      js: 'js/bundle.min.js',      // Replace the script links section with the link to the new script
    }))
    .pipe(gulp.dest('dist'))    // Copy to dist
);

gulp.task('css', () =>
  gulp.src('src/css/styles.css')     // Take CSS files
    .pipe(rename('bundle.min.css'))  // Concat
    .pipe(postCSS([postCSSImport]))
    .pipe(cleanCSS())                // Minify
    .pipe(gulp.dest('dist/css'))     // Copy to dist
);

gulp.task('eslint', () =>
  eslint('src/js/**/*.js')
);

gulp.task('clean', () =>
  del(['dist/**'])
);

gulp.task('browser-sync', () => {
  browserSync.init(['dist/css/**.css', 'dist/js/**.js', 'dist/**.html'], {  // Look for changes in dist directories
    server: 'dist',  // Reload browser when any JS is modified or inject CSS when any stylesheet is modified
  });
});

gulp.task('default', ['html', 'css', 'es6', 'browser-sync'], () => {
  gulp.watch('src/css/*.css', ['css']);
  gulp.watch('src/js/*.js', ['es6']);
  gulp.watch('src/*.html', ['html']);
});

gulp.task('build', ['html', 'css', 'es6', 'size']);
