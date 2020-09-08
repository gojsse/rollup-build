const gulp = require('gulp');
// SCSS
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
// JS, VUE
const rollup = require('rollup');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const vue = require('rollup-plugin-vue');
const replace = require('@rollup/plugin-replace');
const {eslint} = require('rollup-plugin-eslint');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify-es');

const paths = {
  styles: {
    src: './src/scss/**/*.scss',
    dest: './dist/assets/'
  },
  js: {
    src: './src/js/main.js',
    dest: './dist/assets/app.js',
    all: './src/js/**/*.*'
  },
}

function styles() {    
  return (
    gulp.src(paths.styles.src)
      .pipe(sourcemaps.init())
      .pipe(sass())
      .on('error', sass.logError)
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(paths.styles.dest))
  );
}

function js() {
  return rollup.rollup({
    input: paths.js.src,
    plugins: [
      resolve(),
      commonjs(),
      vue(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
        'process.env.VUE_ENV': JSON.stringify('browser')
      }),
      eslint(),
      babel({exclude: 'node_modules/**'}),
      uglify()
    ]
  }).then(bundle => {
    return bundle.write({
      file: paths.js.dest,
      format: 'umd',
      name: 'main',
      sourcemap: true,
      globals:  {
        vue: 'Vue',
        vuex: 'Vuex'
      }
    });
  });
}

function watch() {
  // Run initial tasks
  styles();
  js();
  // Start watching
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.js.all, js);
}

exports.styles = styles;
exports.js = js;
exports.watch = watch;
