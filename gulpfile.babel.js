import gulp from 'gulp';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import cssnano from 'cssnano';
import watch from 'gulp-watch';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import buffer from 'vinyl-buffer';

const server = browserSync.create();

const postcssPlugins = [
  cssnano({
    core: false,
    autoprefixer: {
      add: true,
      browsers: '> 1%, last 2 versions, Firefox ESR, Opera 12.1'
    }
  })
];

const paths = {
	pug : {
		src : './dev/pug/pages/**/*.pug',
		dest : './app/',
		watch : './dev/pug/**/*.pug'
	},

	styles : {
		src : './dev/sass/*.scss',
		dest : './app/css/',
		watch : './dev/sass/**/*.scss'
	},

	scripts : {
		src : './dev/scripts/index.js',
		dest : './app/js/',
		watch : './dev/scripts/**/*.js'
	},
}

const sassOptions = {
	// nested, expanded, compact or compressed
  outputStyle: 'nested'
};

gulp.task('pug', () =>
  gulp.src(paths.pug.src)
    .pipe(plumber())
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest(paths.pug.dest))
);

gulp.task('styles', () =>
  gulp.src(paths.styles.src)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(plumber())
    .pipe(sass(sassOptions))
    .pipe(postcss(postcssPlugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(server.stream({match: '**/*.css'}))
);

gulp.task('scripts', () =>
  browserify(paths.scripts.src)
    .transform(babelify)
    .bundle()
    .on('error', function(err){
      console.error(err);
      this.emit('end')
    })
    .pipe(source('scripts.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scripts.dest))
);

gulp.task('default', () => {
  server.init({
    server: {
      baseDir: './app'
    },
  });

	watch(paths.pug.watch, () => gulp.start('pug', server.reload) );
  watch(paths.styles.watch, () => gulp.start('styles'));
  watch(paths.scripts.watch, () => gulp.start('scripts',server.reload) );
});
