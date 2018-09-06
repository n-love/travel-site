var gulp = require("gulp"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssimport = require("postcss-import"),
mixins = require("postcss-mixins");

gulp.task("styles", function(){
    
    
    return gulp.src("./app/assets/styles/styles.css")
        .pipe(postcss([cssimport, mixins, cssvars, autoprefixer, nested]))
        .on('error', function(errorInfo){
            console.log(errorInfo.toString()); //prints out error info to console
            this.emit('end'); //tells gulp styles ended successfully
        })
        .pipe(gulp.dest("./app/temp/styles"));
});
