const sass = require('node-sass');

module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    // pass options to plugins and the references to the files here
    concat: {
      js: {
        src: "js/*.js",
        dest: "build/scripts.js",
      },
    },
    sass: {
      options: {
        implementation: sass,
      },
      files: {
        src: "sass/*.scss",
        dest: "build/styles.css",
      }
    },
    uglify:{
      minify: {
        src: "build/scripts.js",
        dest: "build/scripts.min.js",
      }
    }
  });
  // Load Plugins
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  // Register Tasks
  grunt.registerTask("name", () => {
    console.log("running");
  });
  // Run several tasks in order
  grunt.registerTask("all", ["name"]);
  grunt.registerTask("concat-js", ["concat:js"]);
  grunt.registerTask("transpile-scss", ["sass"]);
};
