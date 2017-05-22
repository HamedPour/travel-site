var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
simpleVars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
postimport = require('postcss-import'),
mixins = require('postcss-mixins'),
normalize = require('postcss-normalize');
// =============================================================================


gulp.task('styles', function(){
  var plugins = [postimport, mixins, simpleVars, nested, autoprefixer, normalize]
  return gulp.src('./app/assets/styles/master.css')
    .pipe(postcss(plugins))
    .on('error', function(errorinfo){
      console.log(errorinfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/build'));
});
