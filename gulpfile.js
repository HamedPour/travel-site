var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
simpleVars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
postimport = require('postcss-import'),
normalize = require('postcss-normalize'),
livereload = require('gulp-livereload');


// ============================================================================
gulp.task('default', ['watch']);
// ============================================================================

gulp.task('styles', function(){

  var plugins = [postimport, simpleVars, nested, autoprefixer, normalize]

  return gulp.src('./app/assets/styles/master.css')
  .pipe(postcss(plugins))
  .pipe(gulp.dest('build'));
});

// ============================================================================
gulp.task('reloader', function(){
  var cssDir = "D:/CodeSandbox/Xampp/htdocs/www/travel-site/build/master.css";

   return gulp.src(cssDir)
  .pipe(livereload());
});


// ==================================================================GULP WATCH

gulp.task('watch', function(){

  livereload({start: true})

  return watch('./app/assets/styles/**/**/*.css', function(){
    gulp.start('styles')
    gulp.start('reloader')
  });
  
});
