import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
  gulp: gulp,
  path: path,
  plugins: plugins,
};

import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { tailwind } from './gulp/tasks/tailwind.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, iconfonts } from './gulp/tasks/fonts.js';
import { server } from './gulp/tasks/server.js';
import { minHTML, minCSS, minJS, minImg } from './gulp/tasks/minify.js';

function realodBrowser(){
  app.plugins.browsersync.reload()
}

function watcher() {
  gulp.watch(`${path.srcFolder}/assets/`, copy);
  gulp.watch(`${path.srcFolder}/html/**/*.html`, gulp.parallel(html, gulp.series(scss, tailwind)))
  gulp.watch(`${path.srcFolder}/scss/**/*.scss`, gulp.series(scss, tailwind)).on('change', realodBrowser)
  gulp.watch(`${path.srcFolder}/js/**/*.js`, js);
  gulp.watch(`${path.srcFolder}/img/**/*.{png,jpeg,jpg,gif,webp,svg}`, images);
}

const fonts = gulp.series(otfToTtf, ttfToWoff, iconfonts);

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, gulp.series(scss, tailwind), js, images));

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

const build = gulp.series(reset, mainTasks, gulp.parallel(minHTML, minCSS, minJS, minImg));

gulp.task('dev', dev);

gulp.task('build', build);
