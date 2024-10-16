import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import tailwindcss from "tailwindcss";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(`${app.path.srcFolder}/scss/*.scss`, { sourcemaps: true })
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
      title: "SCSS",
      message: "Error: <%= error.message %>"
    })))
    .pipe(sass({
      outputStyle: "expanded"
    }))
    .pipe(postcss([
      tailwindcss('./tailwind.config.js'),
      autoprefixer()
    ]))
    .pipe(app.gulp.dest(`${app.path.buildFolder}/css/`))
    // .pipe(app.plugins.browsersync.stream())
};
